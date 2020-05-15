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
nuevoProducto.addEventListener('click', () => {
    addNewStockDiv.classList.remove('addNewStock');
    addNewStockDiv.classList.add('addNewStockDisable');
    newStockDiv.classList.remove('newStockDiable');
    newStockDiv.classList.add('newStockEnable');
});

let nombreProducto = document.getElementById('nombreProducto');
let caracteristicaProducto = document.getElementById('caracteristicaProducto');
let cantidadProducto = document.getElementById('cantidadProducto');
let saveProducto = document.getElementById('saveProducto');

saveProducto.addEventListener('click', () => {
    if (nombreProducto.value == "" || caracteristicaProducto.value == "" || cantidadProducto.value == "") {
        alert('Campos vacios');
    } else {
        //console.log(`http://localhost/codel3/Welcome/addNewProduct`);

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
                if (result) {
                    addNewStockDiv.classList.remove('addNewStockDisable');
                    addNewStockDiv.classList.add('addNewStock');
                    newStockDiv.classList.remove('newStockEnable');
                    newStockDiv.classList.add('newStockDiable');
                    // console.log(`nombre: ${nombreProducto.value}, caract: ${caracteristicaProducto.value}`);
                    nombreProducto.value = "";
                    caracteristicaProducto.value = "";
                    cantidadProducto.value = "";
                } else {
                    alert('Error al insertar el nuevo producto');
                }
            },
            error: function(x, e) {
                console.log(`Ocurrio un error`);
            }
        });
    }
})