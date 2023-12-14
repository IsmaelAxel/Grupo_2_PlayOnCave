// Obtener el estado del modo del almacenamiento local o configurar el modo claro por defecto
const clasesBootstrap = id => document.getElementById(id)
if (localStorage.getItem('modo') === 'noche') {
    document.querySelector('body').classList.add('noche');
} else {
    document.querySelector('body').classList.remove('noche');
}

const botonModo = document.getElementById("modo");
botonModo.addEventListener("change", cambiarModo);

function cambiarModo() {
    const body = document.querySelector("body");

    if (localStorage.getItem('modo') === 'dia') {
        body.classList.add("noche");
        localStorage.setItem('modo', 'noche');
    } else {
        body.classList.remove("noche");
        localStorage.setItem('modo', 'dia');
    }
}
