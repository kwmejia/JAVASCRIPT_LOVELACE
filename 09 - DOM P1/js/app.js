//Objeto document _ DOM
console.log(document)

//Selector al head
console.log(document.head)

//Selector al body
console.log(document.body)

//Seleccionar 
console.log(document.URL)

//Seleccionar formularios
console.log(document.forms)

//Seleccionar anclas
console.log(document.links)

//Seleccionar por clases
const elemento = document.getElementsByClassName("subtitulo")
console.log(elemento[0].textContent)

const elemento2 = document.querySelector("#nombre")

elemento2.textContent = "Kevin Mejia"

const elemento3 = document.querySelector(".contenedor_anclas")

console.log(elemento3.innerHTML)

const urlImg = "https://media.licdn.com/dms/image/D4E0BAQE6QGDqCKQ17A/company-logo_200_200/0/1682093032999?e=2147483647&v=beta&t=KsvWNfuoy_aqLTU56z2X09ZdedyedcfmLN1faCGUtZk";


elemento3.innerHTML += `
    <img class="imagen" src="${urlImg}" alt="Imagen riwi" />
`;

console.log(elemento2.style)

elemento2.style.backgroundColor = "#000";
elemento2.style.color = "#FAFAFA";
elemento2.style.padding = "10px";

const body = document.body;

const listaDeColores = ["black", "red", "green", "violet", "blue", "#e3e3e3"]

const mensajes = ["Feliz Navidad!!!!", "Te desea RIWI!!!"];

const titulo = document.querySelector("#titulo_contenedor");

titulo.textContent = mensajes[0];

setInterval(() => {
    titulo.textContent == mensajes[0]
        ? titulo.textContent = mensajes[1]
        : titulo.textContent = mensajes[0];

    let colorRandom = Math.floor(Math.random() * 5);
    body.style.backgroundImage = `linear-gradient(90deg, ${listaDeColores[colorRandom]}, ${listaDeColores[colorRandom - 1]} `
}, 1000)
