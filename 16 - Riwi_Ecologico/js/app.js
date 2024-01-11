//Variables globales

let puntosEcologicos = [
    {
        piso: "3",
        no_aprovechables: 0,
        organicos: 0,
        aprovechables: 0
    },
    {
        piso: "4",
        no_aprovechables: 0,
        organicos: 0,
        aprovechables: 0
    },
    {
        piso: "5",
        no_aprovechables: 0,
        organicos: 0,
        aprovechables: 0,

    }
]

let tipoCanecaAgregar;


//Selectores
const selectPiso = document.getElementById("select_floor");
const canecas = document.querySelectorAll(".bowl")
const btnAgregar = document.getElementById("btnSubmit")

//Eventos y escuchadores de eventos
document.addEventListener("DOMContentLoaded", () => {

    const puntosCache = localStorage.getItem("puntosEcologicos")
    if (puntosCache) {
        puntosEcologicos = JSON.parse(puntosCache)
    }
    pintarPuntoEcologico();
})

selectPiso.addEventListener("input", () => {
    pintarPuntoEcologico();
})

btnAgregar.addEventListener("click", () => {
    const cantidad = document.getElementById("cantidad")

    //Agregar la cantidad de desechos en su respectivo punto ecologico y piso

    //1. Recorrer la lista de puntos ecologicos
    puntosEcologicos.forEach(punto => {
        //1.2 Encontrar el piso que al que el usuario agregó la basura
        if (punto.piso == selectPiso.value) {
            //1.3 Sumar los desechos que estaban + los nuevos
            //1.aprovechables
            //2.no_aprovechables
            //3.organicos
            if (punto[tipoCanecaAgregar] + parseInt(cantidad.value) <= 500) {
                punto[tipoCanecaAgregar] += parseInt(cantidad.value)
                //Cierro el modal
                document.getElementById("btnCloseModal").click();
                //Limpiar el input de cantidad
                cantidad.value = "";

            } else {
                const parrafo = document.createElement("p")
                parrafo.textContent = "La cantidad es excesiva."
                parrafo.style.color = "red"
                cantidad.after(parrafo)

            }
        }
    })

    pintarPuntoEcologico()
})

canecas.forEach(caneca => {
    caneca.addEventListener("click", (event) => {
        //1.Abrir el modal
        document.getElementById("btnOpenModal").click()
        //2. Obtener el atributo personalizado

        tipoCanecaAgregar = caneca.getAttribute("type-bowl")
    })
})

//Funciones
function pintarPuntoEcologico() {
    //1. Recorrer la lista de puntos ecologicos
    puntosEcologicos.forEach(punto => {

        //1.2 Preguntar si el piso que se está iterando es igual al seleccionado por el usuario
        if (punto.piso == selectPiso.value) {

            //1.3 Seleccionar los contadores de cada caneca y asignar nuevo valor

            const contadorOrganico = document.querySelector("#organicos .body_top span")
            const contadorNoAprovechable = document.querySelector("#no_aprovechables .body_top span")
            const contadorAprovechable = document.querySelector("#aprovechables .body_top span")

            contadorOrganico.textContent = `${punto.organicos}/500`;
            contadorNoAprovechable.textContent = `${punto.no_aprovechables}/500`;
            contadorAprovechable.textContent = `${punto.aprovechables}/500`;

            //1.4 Sacar el promedio del punto ecologico 
            const suma = punto.aprovechables + punto.no_aprovechables + punto.organicos;
            const promedio = (suma * 100) / 1500;

            if (promedio < 25) {
                document.body.style.background = "#950101";
            } else if (promedio < 50) {
                document.body.style.background = "#fc4b08";

            } else {
                document.body.style.background = "#00f839";

            }

            console.log(promedio)
        }
    })
    //GUARDAMOS LA INFORMACIÓN EN EL LOCAL STORAGE
    localStorage.setItem("puntosEcologicos", JSON.stringify(puntosEcologicos));

}