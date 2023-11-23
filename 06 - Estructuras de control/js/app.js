//Estructuras de control

//1. Condicionales
const puntaje = 101;

if (puntaje === 100) {
  console.log("El puntaje es igual a 100");
} else if (puntaje > 100) {
  console.log("El puntaje es mayor a 100");
} else if (typeof puntaje == "number") {
  console.log("El puntaje es menor a 100");
} else {
  console.log("El puntaje no es válido");
}

//Switch - Estructura de control condicional
const metodoPago = "cheque";

switch (metodoPago) {
  case "efectivo":
    console.log("Pagaste en efectivo");
    break;
  case "tarjeta":
    console.log("Pagaste con tarjeta");
    break;
  case "cheque":
    console.log("Pagaste con cheque");
    break;
  default:
    console.log("Metodo de pago no válido");
}

if (metodoPago === "efectivo") {
  console.log("Pagaste en efectivo");
} else if (metodoPago === "cheque") {
  console.log("Pagaste con cheque");
} else if (metodoPago === "tarjeta") {
  console.log("Pagaste con tarjeta");
} else {
  console.log("Metodo de pago no válido");
}

//FOR LOOP
for (let iterador = 0; iterador <= 10; iterador++) {
  console.log(`8 x ${iterador} = ${iterador * 8}`);
}

for (let iterador = 0; iterador <= 10; iterador++) {
  if (iterador % 2 != 0) {
    continue;
  } // iterador = 1
  console.log(`TABLA DEL ${iterador}`);
  for (let iterador2 = 0; iterador2 <= 10; iterador2++) {
    console.log(`${iterador} x ${iterador2} = ${iterador * iterador2}`);
  }
}

//FOR IN AND OF
let automovil = {
  modelo: "2024",
  motor: "5.0",
  linea: "Camaro",
  marca: "Chevrolet",
};

for (let temporal in automovil) {
  console.log(temporal);
  console.log(automovil[temporal]);
}

const lista = ["Sail", "Jetta", "Supra", "Cupra", "kwid"];

for (let temporal of lista) {
  console.log(temporal);
}

//Do while
let saldo = 10000;
let continuar = true;

do {
  const opcion = prompt(`*** Bienvenido  al cajero ***
    1. Consultar saldo
    2. Depositar
    3. Retirar
    4. Salir
    Ingrese una opción: `);

  switch (opcion) {
    case "1":
      alert(`Su saldo es de = $ ${saldo}`);
      break;
    case "2":
      const nuevoSaldo = prompt(`Ingrese el valor a depositar`);
      saldo += Number(nuevoSaldo);
      break;
    case "3":
      const valorRetiro = prompt(`Ingrese el valor a retirar`);
      if (valorRetiro > saldo) {
        alert("Saldo insuficiente!!!!!");
      } else {
        saldo -= Number(valorRetiro);
        alert(`Saldo disponible = $ ${saldo}`);
      }
      break;
    default:
      continuar = false;
      break;
  }
} while (continuar);
