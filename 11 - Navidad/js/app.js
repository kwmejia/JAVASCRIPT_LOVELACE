const contNieve = document.querySelector(".nieve");
const audioNavidad = document.querySelector("#musica-navidad");

audioNavidad.play();
audioNavidad.loop = true;



contNieve.innerHTML = "";

function generarNieve() {
    Array.from({ length: 50 }).forEach(element => {
        const num = random(11, 26);
        contNieve.innerHTML += `<span style="--i: ${num}"></span>`
    });
}

function random(inicio, final) {
    return Math.floor(Math.random() * (final - inicio + 1) + inicio)
}

function timerNavidad() {
    //1. Obtener la fecha actual
    const fechaActual = new Date();

    //2.Definir la fecha objetivo (25)
    const fechaObjetivo = new Date(fechaActual.getFullYear(), 11, 25) //El mes 11 representa a diciembre

    //3. Verificar su la fecha objetivo ya pasó en este año
    if (fechaActual.getMonth() === 11 && fechaActual.getDate() > 25) {
        fechaObjetivo.setFullYear(fechaObjetivo.getFullYear() + 1);
    }

    //4. Calcular la diferencia entre las dos fechas

    let diferenciaMs = fechaObjetivo - fechaActual;

    //5. Convertir los Milisegundoshora,horas,minutos, segundos

    let diasRestantes = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

    let horasRestantes = Math.floor(
        (diferenciaMs % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    );

    let minutosRestantes = Math.floor(
        (diferenciaMs % (1000 * 60 * 60)) / (1000 * 60)
    );

    let segundosRestantes = Math.floor((diferenciaMs % (1000 * 60)) / 1000);

    console.log(diasRestantes, horasRestantes, minutosRestantes, segundosRestantes);

    const diasHTML = document.getElementById("dia-timer");
    const horaHTML = document.getElementById("hora-timer");
    const minutosHTML = document.getElementById("minutos-timer");
    const segundosHTML = document.getElementById("segundos-timer");

    diasHTML.innerHTML = diasRestantes.toString().padStart(2, "0");
    horaHTML.innerHTML = horasRestantes.toString().padStart(2, "0");
    minutosHTML.innerHTML = minutosRestantes.toString().padStart(2, "0");
    segundosHTML.innerHTML = segundosRestantes.toString().padStart(2, "0");
}

setInterval(timerNavidad, 1000)

generarNieve()