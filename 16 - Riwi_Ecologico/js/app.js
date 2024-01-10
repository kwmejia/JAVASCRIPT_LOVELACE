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
    pintarPuntoEcologico();
})

selectPiso.addEventListener("input", () => {
    pintarPuntoEcologico();
})

btnAgregar.addEventListener("click", () => {
    const cantidad = document.getElementById("cantidad").value

    console.log(cantidad, selectPiso.value, tipoCanecaAgregar)
    //Agregar la cantidad de desechos en su respectivo punto ecologico y piso

    //1. Recorrer la lista de puntos ecologicos
    puntosEcologicos.forEach(punto => {
        //1.2 Encontrar el piso que al que el usuario agregó la basura
        if (punto.piso == selectPiso.value) {
            //1.3 Sumar los desechos que estaban + los nuevos
            //1.aprovechables
            //2.no_aprovechables
            //3.organicos
            punto[tipoCanecaAgregar] += parseInt(cantidad)
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

    //1.2 Preguntar si el piso que se está iterando es igual al seleccionado por el usuario
    //1.3 Seleccionar los contadores de cada caneca y asignar nuevo valor
    //1.4 Sacar el promedio del punto ecologico 

}