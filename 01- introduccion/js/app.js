// Comentario de una sola línea

/*  
    COMENTARIO EN BLOQUE
*/

//Alert muestra un mensaje de alerta al usuario
alert("Holaaa Mundo");

//Prompt muestra un mensaje al usuario y contiene una entrada
edad = prompt("Cuantos años tienes?");


// Imprimir por consola 
console.log("La edad es:",edad);
console.log("La edad es: " + edad);
console.log(`La edad es: ${edad}`);

//Console .info muestra información por consola
console.info("Informacion al usuario")

//Console .warn  muestra un mensaje de advertencia
console.warn("Esto es un mensaje de advertencia")

//Console .error muentra un mensaje de error
console.error("Esto es un mensaje de error")


//Muestra un mensaje con el fin de debugear
console.debug("Esto es un mensaje de debugeo");

//Group agrupa los mensajes de consola
console.group("Grupo principal");
console.log("item 1");
console.log("item 2");
console.log("item 3");
console.groupEnd();
console.group("Segundo grupo");
console.log("subitem 3");
console.groupEnd();

//Console table nos permite ver listas en forma de tablas

console.table([{ nombre: "Kevin", ciudad: "Medellin", edad: edad}])



