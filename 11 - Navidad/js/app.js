const contNieve = document.querySelector(".nieve");

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

generarNieve()