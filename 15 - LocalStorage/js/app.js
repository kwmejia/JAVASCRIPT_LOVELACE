//Ejemplo basico para guardar información en el localStorage
localStorage.setItem("company", "Riwi");

//Ejemplo basico para obtener información del localStorage
const info = localStorage.getItem("company");


//Eliminar un item del localStorage
localStorage.removeItem("company")

//Eliminar o limpiar todo el localStorage
localStorage.clear();
console.log(info)


//Ejemplo para guardar un objeto en el localStorage

// 1.Creamos el objeto
const coder = {
    nombre: "Terry",
    fecha_nac: "Mayo",
    edad: 24,
};
//2. Convertir el objeto a String (JSON)
console.log(coder)
const objString = JSON.stringify(coder);
console.log(objString)

//3. Agregar el objeto al localStorage
localStorage.setItem("coder", objString);

//Actualizar el objeto

//1. Obtener el objeto guardado anteriormente
let coderModificar = localStorage.getItem("coder");

//2. Convertir de String a Codigo (JSON)

coderModificar = JSON.parse(coderModificar);

coderModificar.fecha_nac = "Junio";
coderModificar.edad = 21;

//3. Convertir de nuevo el objeto en String y sobrescribir el  localStorage
localStorage.setItem("coder", JSON.stringify(coder))
console.log(coderModificar)



//Lista de objetos
const coders = [
    { nombre: "Roberto", edad: 34 },
    { nombre: "Ricardo", edad: 21 },
    { nombre: "Julian", edad: 22 },
    { nombre: "Darwing", edad: 23 },
    { nombre: "Tomás", edad: 20 },
]

let listaString = JSON.stringify(coders);

localStorage.setItem('coders', listaString);

let listaActualizar = localStorage.getItem('coders');

listaActualizar = JSON.parse(listaActualizar);

listaActualizar.forEach(element => {
    if (element.nombre == 'Darwing') {
        element.edad++
    }
});

localStorage.setItem('coders', JSON.stringify(listaActualizar));

console.log(listaActualizar);
