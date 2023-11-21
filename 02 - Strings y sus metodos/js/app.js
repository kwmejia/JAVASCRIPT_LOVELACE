// alert("Holaaa")

nombre = "Riwi"; //Var
var nombre2 = "Riwi Medellin"; // Var

//Let se puede reasignar pero tiene condiciones de scope
let nombre3 = "Kevin Mejia"
nombre3 = "Hector"

//Const 
const nombre4 = "Ken "
// nombre4 = "Darwing"


/*
 STRINGS

*/

const ciudadCampus = "Bucaramanga";
const ciudad2 = String("Pereira");
const ciudad3 = new String("Medellin");

console.log(ciudadCampus);
console.log(ciudad2);
console.log(ciudad3.valueOf());


//Metodos de los strings

const centroEducativo = "Riwi Medellin";
const coder = "Tomás Montoya";

console.log("Centro Educativo", centroEducativo);

//Convertir a minuscula
console.log("Texto en minuscula: ", centroEducativo.toLowerCase());

//Convertir a mayuscula
console.log("Texto en mayuscula: ", centroEducativo.toUpperCase());

//Mostrar cuantos caracteres tiene una cadena
console.log("La palabra",centroEducativo,"tiene", centroEducativo.length,"caracteres")


//Preguntar si la cade de caracteres incluye la palabra Riwi
console.log(centroEducativo.toLocaleLowerCase().includes("riwi"))

//Concatenar las dos cadenas de Strings
//Concat
console.log(centroEducativo.concat(" ",coder));
//Sintaxis de +
console.log(centroEducativo + " " + coder);
//Back String
console.log(`${centroEducativo} ${coder}`);

//Quitar espacios a los extremos de una cadena
const email = "     kevin.mejia@riwi.io       " 

//Quitar los espacios al inicio
console.log(email.trimStart());
//Quitar los espacios al final
console.log(email.trimEnd());
//Quitar los espacios en los dos extremos
console.log(email.trim());

//Quitar una palabra de la oración

console.log(coder.split(" "));
console.log("Hola ",coder.split(" ")[0]);


//Remplazar Una palabra

console.log(coder.replace("Tomás","Samuel"))


//Rellenar una  cade de texto
const numero = "1"
console.log(numero.padStart(5,"0"));

//Buscar el indice de una palabra
//Search retorna el indice de la primera coincidencia
console.log(coder.search(/Montoya/))
