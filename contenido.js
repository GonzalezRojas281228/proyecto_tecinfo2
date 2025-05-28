document.getElementById("btn-accion").addEventListener("click", function () {
    const mensaje = document.getElementById("mensaje-compromiso");
    mensaje.textContent = "¡Gracias por comprometerte! 🌿 Juntos podemos marcar la diferencia.";
    mensaje.style.opacity = 0;
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        } else {
            opacity += 0.05;
            mensaje.style.opacity = opacity;
        }
    }, 50);
});
