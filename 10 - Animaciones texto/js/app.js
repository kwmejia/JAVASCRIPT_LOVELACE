const textMaquina = document.querySelector("#maquina_escribir");

const palabras = ["Desarrollador Frontend", "Desarrollador Backend", "DevOps", "Qa"];

let indiceActual = 0;

function maquinaEscribir() {
    textMaquina.innerHTML = "";
    let textArr = palabras[indiceActual];
    textArr = textArr.split("");

    let i = 0;

    const pintarString = setInterval(() => {
        textMaquina.innerHTML += textArr[i];
        i++;

        if (i == textArr.length) {
            clearInterval(pintarString);

            setTimeout(() => {
                borrarPalabra();
            }, 1000); //Tiempo antes de borrar una palabra
        }
    }, 200); //Tiempo para escribir una letra
}

function borrarPalabra() {
    let texto = textMaquina.textContent;
    const borrarString = setInterval(() => {
        texto = texto.slice(0, -1);
        textMaquina.textContent = texto;
        if (texto == "") {
            clearInterval(borrarString);
            indiceActual = (indiceActual + 1) % palabras.length;
            setTimeout(() => {
                maquinaEscribir();
            }, 500);
        }
    }, 100) //Tiempo en borrar cada letra
}

maquinaEscribir()






const textoAnimar = document.querySelector("#text");

textoAnimar.innerHTML = textoAnimar.innerHTML
    .split("")
    .map((letra, i) => `<span style="transition-delay:${i * 40}ms; filter: hue-rotate(${i * 30}deg);">${letra}</span>`)
    .join("")