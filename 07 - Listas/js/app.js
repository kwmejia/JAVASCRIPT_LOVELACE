//Crear una lista
const lista = [
  "T o  más     ",
  true,
  { nombre: "terry", barrio: "Belén" },
  2,
  [1, 2, 3, 4],
];
//Acceder a elementos
console.log(lista.at(3));
console.log(lista[3]);
console.log(lista[2]["nombre"]);
console.log(lista[2].nombre);

console.log(lista[0].trim().split(" ").join(""));
console.log(lista[0].replace(/\s/g, ""));

//Recorrer una lista
//Foor loop
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}
//For of and in
for (let iterador in lista) {
  console.log(iterador);
}

for (let iterador of lista) {
  console.log(iterador);
}

//Metodos de listas

const coders = [
  { id: 22, nombre: "Camilo", barrio: "Robledo ", cedula: "10013123" },
  { id: 4, nombre: "Santiago", barrio: "Belén", cedula: "120343423" },
  { id: 3, nombre: "Kevin", barrio: "Patio bonito", cedula: "530343423" },
  { id: 10, nombre: "Angela", barrio: "La paz", cedula: "23343423" },
];

//foreach
coders.forEach((temporal, i) => {
  console.log(i, temporal);
  temporal.edad = Math.floor(Math.random() * (30 - 15 + 1) + 15);
});

console.log(coders);

// const nombreEstudiate = prompt("Estudiante a buscar");
// coders.forEach((coder) => {
//   if (coder.nombre.toLowerCase() === nombreEstudiate.toLocaleLowerCase()) {
//     alert(
//       `Estudiante encontrado: Nombre: ${coder.nombre} edad:${coder.edad}, barrio: ${coder.barrio}`
//     );
//   }
// });

// Map -- similar a foreach retorna una nueva lista

const nuevaLista = coders.map((temporal, index) => {
  console.log(index + 1);
  return { ...temporal, barrio: "Antioquia" };
});

console.log(nuevaLista);
console.log(coders);

//Filter
const filtrados = coders.filter((iterador) => iterador.nombre === "Keiber");

console.log(filtrados);

let filtrados2 = coders
  .filter((iterador) => iterador.nombre == "Kevin")
  .map((iterador) => iterador.nombre);

console.log(filtrados2);

//Some
console.log(coders.some((iterador) => iterador.nombre === "keiber"));

//Sort -- Utiliza el algoritmo de ordenamiento burbuja - el cual se basa en la recta númerica
const lisOrdenada = coders.sort((a, b) => a.edad - b.edad);
console.log(lisOrdenada);

const listaOrdenada2 = coders.sort((a, b) => a.nombre.localeCompare(b.nombre));

console.log(listaOrdenada2);

const inicio = Number(prompt("Ingrese el primer rango de edad"));
const final = Number(prompt("Ingrese el ultimo rango de edad"));
let coincidencias = "";

coders.forEach((element, index) => {
  if (element.edad >= inicio && element.edad <= final) {
    coincidencias += `${index + 1}. Nombre: ${element.nombre}, Edad: ${
      element.edad
    } cedula: ${element.cedula}, Barrio: ${element.barrio}\n`;
  }
});

alert(`
  ESTUDIANTES DENTRO DEL RANGO:
  ${coincidencias}
`);

//Funciones

function saludar(msg) {
  console.log("saludar");
}

const mostrarError = (message) => console.log(message);

const ejecutarPrograma = (funcion1, funcion2) => {
  funcion1();
  funcion2("OOps! Ocurrió un problema");
};
ejecutarPrograma(() => console.log("saludar"), saludar);
