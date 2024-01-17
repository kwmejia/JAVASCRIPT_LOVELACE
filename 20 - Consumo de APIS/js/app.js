

document.addEventListener("DOMContentLoaded", () => {
    consumirAPI()
})

async function consumirAPI() {
    const URL = "https://jsonplaceholder.typicode.com/photos"
    try {
        const respuesta = await fetch(URL);
        console.log(respuesta)
        const data = await respuesta.json()
        console.log(data)

        imprimirDatos(data.slice(0, 100))

    } catch (error) {

    }
}

function imprimirDatos(data) {

    data.forEach(element => {
        console.log(element)
        document.body.innerHTML += `
        <div class="card" style="width: 10rem;">
            <img src="${element.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${element.title}</p>
            </div>
        </div>
        `
    });
}