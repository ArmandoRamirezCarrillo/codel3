const inicio = document.getElementById('inicio');
const productos = document.getElementById('productos');
const info = document.getElementById('info');

inicio.addEventListener('click', () => navigation(inicio.id));
productos.addEventListener('click', () => navigation(productos.id));
info.addEventListener('click', () => navigation(info.id));

let navigation = (idNav) => {
    switch (idNav) {
        case 'inicio':
            location.href = `http://localhost/codel3/`;
            break;
        case 'productos':
            location.href = `http://localhost/codel3/Welcome/producto`;
            break;
        case 'info':
            location.href = `http://localhost/codel3/Welcome/info`;
            break;
    }
}

const addNewStockDiv = document.getElementById('addNewStockDiv');
const newStockDiv = document.getElementById('newStockDiv');

const nuevoProducto = document.getElementById('nuevoProducto');
nuevoProducto.addEventListener('click', () => openInputs());

let openInputs = () => {
    addNewStockDiv.classList.remove('addNewStock');
    addNewStockDiv.classList.add('addNewStockDisable');
    newStockDiv.classList.remove('newStockDiable');
    newStockDiv.classList.add('newStockEnable');
};

let nombreProducto = document.getElementById('nombreProducto');
let caracteristicaProducto = document.getElementById('caracteristicaProducto');
let cantidadProducto = document.getElementById('cantidadProducto');
let saveProducto = document.getElementById('saveProducto');

saveProducto.addEventListener('click', () => {
    if (nombreProducto.value == "" || caracteristicaProducto.value == "" || cantidadProducto.value == "") {
        alert('Campos vacios');
    } else {
        if (saveProducto.id == 'saveProducto') {
            $.ajax({
                type: 'POST',
                url: 'http://localhost/codel3/Welcome/addNewProduct',
                dataType: 'json',
                data: {
                    'nombre': nombreProducto.value,
                    'Caracteristicas': caracteristicaProducto.value,
                    'Cantidad': cantidadProducto.value
                },
                beforeSend: function() {
                    console.log('Procesando...');
                },
                success: function(result) {
                    addNewStockDiv.classList.remove('addNewStockDisable');
                    addNewStockDiv.classList.add('addNewStock');
                    newStockDiv.classList.remove('newStockEnable');
                    newStockDiv.classList.add('newStockDiable');
                    nombreProducto.value = "";
                    caracteristicaProducto.value = "";
                    cantidadProducto.value = "";
                    location.reload();
                },
                error: function(x, e) {
                    console.log(`Ocurrio un error`);
                }
            });
        } else {
            let txtNewTitle = document.getElementById('txtNewTitle');
            console.log(txtNewTitle.textContent);
            let idProducto = txtNewTitle.textContent.split('-');
            console.log(`id: ${idProducto[1]}`);
            console.log(`nombre: ${nombreProducto.value}`);

            $.ajax({
                type: 'POST',
                url: 'http://localhost/codel3/Welcome/updateProduct',
                dataType: 'json',
                data: {
                    'idInventario': idProducto[1],
                    'nombre': nombreProducto.value,
                    'Caracteristicas': caracteristicaProducto.value,
                    'Cantidad': cantidadProducto.value
                },
                beforeSend: function() {
                    console.log('Procesando...');
                },
                success: function(result) {
                    if (!result) {
                        addNewStockDiv.classList.remove('addNewStockDisable');
                        addNewStockDiv.classList.add('addNewStock');
                        newStockDiv.classList.remove('newStockEnable');
                        newStockDiv.classList.add('newStockDiable');
                        nombreProducto.value = "";
                        caracteristicaProducto.value = "";
                        cantidadProducto.value = "";
                        location.reload();
                    }
                },
                error: function(x, e) {
                    console.log(`Ocurrio un error`);
                }
            });

        }
    }
});

let actualizarProducto = id => {
    let infoProducto = id.id.split('-');
    let txtNewTitle = document.getElementById('txtNewTitle');
    txtNewTitle.innerHTML = `Producto-${infoProducto[1]}`;
    $.ajax({
        type: 'POST',
        url: 'http://localhost/codel3/Welcome/dataIdProduct',
        dataType: 'json',
        data: { 'idInventario': infoProducto[1] },
        beforeSend: function() {
            console.log('Procesando...');
        },
        success: function(result) {
            nombreProducto.value = result[0]['nombre'];
            caracteristicaProducto.value = result[0]['Caracteristicas'];
            cantidadProducto.value = result[0]['Cantidad'];
            console.log(result[0]);
        },
        error: function(x, e) {
            console.log(`Ocurrio un error`);
        }
    });
    openInputs();
    saveProducto.setAttribute('id', 'updateProducto');
};

let borrarProducto = id => {
    let productoArray = id.id.split('-');
    console.log(productoArray);
    $.ajax({
        type: 'POST',
        url: 'http://localhost/codel3/Welcome/deleteProduct',
        dataType: 'json',
        data: { 'idInventario': productoArray[1] },
        beforeSend: function() {
            console.log('Procesando...');
        },
        success: function(result) {
            location.reload();
        },
        error: function(x, e) {
            console.log(`Ocurrio un error`);
        }
    });
};