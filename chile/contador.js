const fechaObjetivo = new Date("April 25, 2025 00:00:00").getTime();

const actualizaContador = () => {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia < 0) {
        document.getElementById("contador").innerHTML = "¡Ya llegó el día!";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML =
        `<span>${dias} días</span>` +
        `<span>${horas} hrs</span>` +
        `<span>${minutos} min</span>` +
        `<span>${segundos} seg</span>`;
};

setInterval(actualizaContador, 1000);
