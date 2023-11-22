// const nombre = "Ana";
// const edad = 23;
// const barrio = "Palmas";

//Creación de un objeto con atributos
const coder = {
  nombre: "Ana",
  edad: 23,
  barrio: "Palmas",
  ubicacion: {
    calle: "54",
    carrera: "16A",
  },
};
console.log(coder);

//Primera forma de acceder a un atributo .
console.log(coder.nombre);
console.log(coder.edad);
console.log(coder.barrio);
console.log(coder.ubicacion.calle);
console.log(coder.ubicacion.carrera);

//Segunda forma de acceder
console.log(coder["nombre"]);
console.log(coder["edad"]);
console.log(coder["barrio"]);
console.log(coder["ubicacion"]["calle"]);
console.log(coder["ubicacion"]["carrera"]);

//Agregar un nuevo atributo a un objeto
coder.foto = "img/fotoCoder.png";
console.log(coder);

//Segunda forma
coder["familiares"] = 6;
console.log(coder);

coder.fecha = { dia: "18", mes: "05" };
coder.nombre = "Terry";
console.log(coder);

//Eliminar un atributo
delete coder.familiares;
coder.familiares = undefined;

console.log(coder);

//Guardar los atributos en variables
//Primera forma
const nombreCoder = coder.nombre;
const edadCoder = coder.edad;
const barrioCoder = coder.barrio;
const ubicacionCoder = coder.ubicacion;
console.log(nombreCoder, edadCoder);

//Segunda forma (Object destructuring)
const {
  barrio: distrito,
  edad,
  nombre,
  ubicacion: { calle, carrera },
} = coder;

console.log(distrito);
console.log(edad);
console.log(nombre);
console.log(calle);
console.log(carrera);
console.log(coder.ubicacion.calle);

//Congelar un objeto

//Primera, congela de forma estricta
Object.freeze(coder);
console.log(coder);

coder.mascotas = 4;
coder.nombre = "Samuel";
console.log(coder);
//Saber si un objeto está o no congelado
console.log(Object.isFrozen(coder));

//Segunda forma y forma mas debil
let nuevoObjeto = { ...coder };
console.log(Object.isFrozen(nuevoObjeto));
//Object seal deja modificar los atributos ya establecidos, pero no eliminar ni agregar nuevos

Object.seal(nuevoObjeto);
console.log(nuevoObjeto);
nuevoObjeto.ubicacion.calle = "105";
console.log(nuevoObjeto);

console.log(Object.isSealed(nuevoObjeto));
//Descongelar con misma variable o espacio de memoria

nuevoObjeto = { ...nuevoObjeto };
console.log(Object.isSealed(nuevoObjeto));

//Unir dos objetos
const producto = {
  nombre: 'Monitor 32"',
  precio: 233333,
};

const caracteristicas = {
  fps: "144hz",
  display: "touch",
  resolucion: "4k",
};

const productoCompleto = Object.assign(producto, caracteristicas);
console.log(productoCompleto);
console.log(producto);

//Segunda forma
const productoCompleto2 = { ...producto, ...caracteristicas };
console.log(productoCompleto2);

//Metodos de objets
console.log(Object.keys(productoCompleto2));
console.log(Object.values(productoCompleto2));
console.log(Object.entries(productoCompleto2));

//
Object.defineProperty(productoCompleto2, "nota", {
  value: "100",
  configurable: false,
  writable: false,
  enumerable: true,
});
console.log(productoCompleto2);
productoCompleto.nota = "50";
console.log(productoCompleto2);

//Destructurar rest operator

const { ...ubicacion } = coder;
