const inicio = document.getElementById('inicio');
const productos = document.getElementById('productos');
const info = document.getElementById('info');

inicio.addEventListener('click', () => navigation(inicio.id));
productos.addEventListener('click', () => navigation(productos.id));
info.addEventListener('click', () => navigation(info.id));

let navigation = (idNav) => {
    switch (idNav) {
        case 'inicio':
            // let url = `${location.hostname}/codel3/Welcome`;
            // console.log(url);
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