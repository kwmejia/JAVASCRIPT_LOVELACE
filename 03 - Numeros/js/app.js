//Creación de números en js
//Primera forma
const num1 = -20;
//Segunda forma
const num2 = Number(30);
//Tercera forma
const num3 = new Number(20.23);

console.log(num1);
console.log(num2);
console.log(num3.valueOf());

//Propiedades del objeto Number
console.log(Number.POSITIVE_INFINITY);
console.log(Number.MAX_VALUE);

//Operaciones con números
let numero1 = 20;
let numero2 = 30;
let resultado;

//Suma
resultado = numero1 + numero2;
console.log(`El resultado de la suma de ${numero1} y ${numero2} = ${resultado}`)

//Resta
resultado = numero1 - numero2;
console.log(`El resultado de la resta de ${numero1} y ${numero2} = ${resultado}`)

//Multiplicación
resultado = numero1 * numero2;
console.log(`El resultado de la multiplicación de ${numero1} y ${numero2} = ${resultado}`)

//División
resultado = numero1 / numero2;
console.log(`El resultado de la división de ${numero1} y ${numero2} = ${resultado}`)

//Modulo
resultado = numero1 % numero2;
console.log(`El Residuo de la división de ${numero1} y ${numero2} = ${resultado}`)

//Incrementos y decrementos
console.log(numero1);

//Primera forma Incremento
numero1 = numero1 + 1;
console.log(numero1);

//Segunda forma
numero1++;
console.log(numero1);

//Tercera forma
++numero1;
console.log(numero1);

//Personalizado
numero1 +=3
console.log(numero1)

//Decremento
//Primera forma
numero2 = numero2 - 1;
console.log(numero2);

//Segunda forma
numero2--;
console.log(numero2);

//Tercera forma
--numero2;
console.log(numero2);

//Cuarta forma 
numero2 -= 3
console.log(numero2);


//Objeto Math

//Obtener el número PI
const PI = Math.PI;
console.log(PI);

//Euler
const euler = Math.E;
console.log(euler);

//Redondeos de decimales

//Redondear 2.8

console.log(Math.round(2.8));

//Redondear hacia abajo
console.log(Math.floor(2.8));

//Redondear hacia a arriba
console.log(Math.ceil(2.8));

//Hacer un número al azar
console.log(Math.random()); 

//Número al azar de 0 a 5
console.log(Math.floor(Math.random() * 5));

//Número al azar de 10 a 30
console.log(Math.floor(Math.random() * (30 - 10 + 1) + 10))