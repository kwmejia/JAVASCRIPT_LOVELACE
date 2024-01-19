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

async function loadShowMore(id) {
    const URL = `https://www.omdbapi.com/?apikey=690d22ef&i=${id}`
    try {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        //Funcion para imprimir en el HTML los detalles de la pelicula
        printShowMore(data)
    } catch (error) {
        console.log(error)
    }

}

function printShowMore(movie) {

    //Desestructuración del objeto movie

    //1. Primera forma de acceder a un objet
    // movie.Poster

    //2. Segunda forma = movie["Poster"]

    //3. const { Poster: imagen, DVD, Actors } =  movie;


    // const imagen = movie.Poster
    const {
        Poster,
        Language,
        Genre,
        Director,
        Country,
        BoxOffice,
        Actors,
        Title,
        Writer,
        Year,
        Released,
        Plot
    } = movie

    cleanHTML();

    container.innerHTML = `
      <div class="card-show-more">
        <i class='bx bx-arrow-back'></i>
        <img  src="${Poster}"/>

        <div> 
            <p>Title: <span>${Title}</span></p>
            <p>Director: <span>${Director}</span></p>
            <p>Genre: <span>${Genre}</span></p>
            <p>Language: <span>${Language}</span></p>
            <p>Year: <span>${Year}</span></p>
            <p>Writer: <span>${Writer}</span></p>
            <p>Released: <span>${Released}</span></p>
            <p>Country: <span>${Country}</span></p>
            <p>Actors: <span>${Actors}</span></p>
            <p>Plot: <span>${Plot}</span></p>
            <p>BoxOffice: <span>${BoxOffice}</span></p>
        </div>
      </div>
    `
}


function printMovies(movies) {
    //Limpiar el HTML
    cleanHTML()

    //Validar que si existan peliculas
    if (!movies) {
        const titleError = document.createElement("h2")
        titleError.textContent = "La pelicula no fue encontrada 😒";
        titleError.classList.add("alert")

        container.appendChild(titleError)
    }

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
                <button class="btn-show-more" id-movie="${movie.imdbID}">Ver más</button>
            </div>
        `;

    });
}


function cleanHTML() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}