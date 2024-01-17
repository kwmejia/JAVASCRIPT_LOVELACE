//Petición HTTP con fetch

//Selectores
const btnText = document.querySelector("#btnLoadText")
const textoHTML = document.querySelector("#texto")
console.log(premiarProyecto)
//Eventos
btnText.addEventListener("click", () => {
    consumirTxt()
})

function consumirTxt() {
    //fetch es un servicio integrado de Javascript que nos permite hacer peticiones HTTP, Fetch recibe como paramero la URL del archivo al cual se la va a hacer la petición. (FETCH RETORNA UNA PROMESA)
    const URL = "data/data.txt"

    fetch(URL)
        .then((respuesta) => {
            console.log(respuesta)
            console.log(respuesta.status)
            console.log(respuesta.statusText)
            //Si quiero la respuesta en texto = text()
            //En JSON = .json()
            return respuesta.text()
        }).then(valor => {
            console.log(valor)
            textoHTML.textContent = valor
        })
}