const carrusel = document.querySelector('.carrusel');
const imagenes = document.querySelectorAll('.carrusel img');
const botonAnterior = document.querySelector('.anterior');
const botonSiguiente = document.querySelector('.siguiente');

let indice = 0;

function mostrarImagen(indice) {
    const translateX = -indice * 100 + '%';
    carrusel.style.transform = `translateX(${translateX})`;
}

function siguienteImagen() {
    indice = (indice + 1) % imagenes.length;
    mostrarImagen(indice);
}

function anteriorImagen() {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indice);
}

botonSiguiente.addEventListener('click', siguienteImagen);
botonAnterior.addEventListener('click', anteriorImagen);

// Mostrar la primera imagen al cargar la página
mostrarImagen(indice);
