//Selectores 
const inputTitle = document.querySelector("#search")
const container = document.querySelector(".container-cards");

let timer
//Eventos
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

//Función para hacer el llamado a la API
async function callToApi(title) {
    //Modifico la URL de la petición donde de añado el titulo de la pelicula
    const URL = `https://www.omdbapi.com/?apikey=690d22ef&s=${title}`
    //Realizo la petición HTTP con el servicio fetch
    //Await = codigo no bloqueante A código bloqueante
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data.Search)
    printMovies(data.Search)
}

//Función para mostrar las peliculas en el HTML
function printMovies(movies) {
    //Recorremos la lista
    movies.forEach(movie => {
        //Inyectar el HTML
        container.innerHTML += `
            <div class="card">
                <h2 class="title-movie">${movie.Title}</h2>
                <img
                src="${movie.Poster}"
                alt=""
                />

                <p>Año: <span>${movie.Year}</span></p>
                <p>Tipo: <span>${movie.Type}</span></p>
                <button>Ver más</button>
            </div>
        `;

    });
}