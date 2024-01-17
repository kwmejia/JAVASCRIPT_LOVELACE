//Petición HTTP con fetch

//Selectores
const btnText = document.querySelector("#btnLoadText")
const textoHTML = document.querySelector("#texto")
//Eventos
btnText.addEventListener("click", () => {
    consumirTxtSegundaForma()
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


async function consumirTxtSegundaForma() {
    const URL = "data/data.txt"
    try {
        //Plan A
        const respuesta = await fetch(URL)
        if (respuesta.status != 200) {
            throw new Error("Ocurrió un error")
        }
        const valor = await respuesta.text()
        textoHTML.textContent = valor;
    } catch (error) {
        //Pla B
        console.error(error)
        textoHTML.textContent = error;

    }

}



