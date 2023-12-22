//Selectores
const contenedor = document.querySelector(".container-cards");
const marca = document.querySelector("#marca")
const year = document.querySelector("#year")
const minimo = document.querySelector("#minimo")
const maximo = document.querySelector("#maximo")
const puertas = document.querySelector("#puertas")
const transmision = document.querySelector("#transmision")
const color = document.querySelector("#color")

/**Objeto de busqueda */
const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: ""
}

/**Eventos */

/**El evento input se dispara cada vez que cambia el valor
 * del input en el HTML
 */
marca.addEventListener("input", function (event) {
    datosBusqueda.marca = event.target.value;

    //Filtramos
    filtrarAutos();
})


year.addEventListener("input", function (event) {
    datosBusqueda.year = event.target.value;
    filtrarAutos();
})


document.addEventListener("DOMContentLoaded", function () {
    mostrarAutos(autos)

    //Llenar el select de años
    const max = new Date().getFullYear();
    const min = max - 10

    for (let i = max; i >= min; i--) {
        const option = document.createElement("option");
        option.value = i;
        option.innerText = i;
        year.appendChild(option)
    }
})


//Funciones
function filtrarAutos() {
    const resultado = autos
        .filter(filtrarPorMarca)
        .filter(filtrarPorYear)

    mostrarAutos(resultado)
}

function filtrarPorYear(auto) {
    if (datosBusqueda.year) {
        return datosBusqueda.year == auto.year
    }

    return auto
}

function filtrarPorMarca(auto) {
    //SI el usuario esta filtrando por marca entonces
    if (datosBusqueda.marca) {
        //Guarda el vehiculo solo si se cumple la condicion
        return datosBusqueda.marca === auto.marca
    }
    //SI no se esta filtrando por marca entonces se retorna el auto completo
    return auto;
}


function mostrarAutos(autos) {

    limpiarHTML()

    autos.forEach(auto => {
        contenedor.innerHTML += `
            <div class="card">
                <img
                src="${auto.imagen}"
                alt=""
                />
            <div class="description-card">
                <p>${auto.marca} - ${auto.modelo} - ${auto.year}</p>
                <p>Transmision: ${auto.transmision}</p>
                <p>Puertas: ${auto.puertas}</p>
                <p>Color: ${auto.color}</p>
                <p>Precio: $ ${auto.precio.toString().toLocaleString("en-US", {
            currency: "USD",
            style: "currency"
        })}</p>
            </div>
        </div>
        `;
    });
}


function limpiarHTML() {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild)
    }
}