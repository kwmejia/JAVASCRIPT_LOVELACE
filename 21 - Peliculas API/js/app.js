import { callToApi, loadShowMore } from "./functions.js";


//Selectores 
const inputTitle = document.querySelector("#search")
const container = document.querySelector(".container-cards");

let timer


//Eventos
container.addEventListener("click", (event) => {

    if (event.target.classList.contains("btn-show-more")) {
        const id = event.target.getAttribute("id-movie")
        console.log(id)
        loadShowMore(id)
    }

    if (event.target.classList.contains("bx-arrow-back")) {
        // const title = event.target.getAttribute("title-movie")
        callToApi(inputTitle.value)
    }

})


inputTitle.addEventListener("input", (event) => {
    //Event = evento que ocurrió
    //target = la etiqueta donde ocurrió el evento
    //Value = el valor del input
    // console.log(event.target.value)

    //Hacemos un BackDrop de forma manual con JAVASCRIPT    
    clearTimeout(timer)
    timer = setTimeout(() => {
        //Llamado a la API
        callToApi(event.target.value)
    }, 500);

})