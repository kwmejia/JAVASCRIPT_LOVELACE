function main() {
  let flag = true;
  do {
    const opcion = menu();
    switch (opcion) {
      case "1":
        agregarProducto();
        break;

      case "6":
        mostrarReporte();
        break;

      case "7":
        flag = false;
        break;

      default:
        mostrarAlerta();
    }
  } while (flag);
}

function mostrarReporte() {
  if (listaDeProductos.length < 0) {
    mostrarAlerta("No hay productos en el inventario");
    return;
  }

  listaDeProductos.sort((a, b) => a.nombre.localeCompare(b.nombre));

  const fechaHoy = new Date().toDateString();

  let listaString = `Lista de productos fecha hoy: ${fechaHoy}\n`;

  listaDeProductos.forEach((producto, index) => {
    const { nombre, categoria, cantidad, precio, id } = producto;

    listaString =
      listaString +
      `${
        index + 1
      }. id: ${id} Nombre:${nombre}, Categoria:${categoria} Cantidad:${cantidad} Precio:${precio} \n`;
  });

  mostrarAlerta(listaString);
}

function agregarProducto() {
  nombre = prompt("Ingrese el nombre del producto");
  categoria = prompt("Ingrese la categoria del producto");
  cantidad = Number(prompt("Ingrese la cantidad del producto"));
  precio = Number(prompt("Ingrese el precio del producto"));

  //Validación de números
  if (isNaN(cantidad) || isNaN(precio)) {
    mostrarAlerta("Cantidad y precio deben ser numericos");
    return;
  }
  const id = Date.now();
  const nuevoProducto = { nombre, categoria, cantidad, precio, id };
  listaDeProductos.unshift(nuevoProducto);

  console.log(listaDeProductos);
}

function mostrarAlerta(mensaje = "opcion no valida") {
  alert(mensaje);
}
function menu() {
  const opcion = prompt(`
  MENU DE OPCIONES
  1. Agregar producto
  2. Eliminar producto
  3. Modificar producto
  4. Buscar por nombre
  5. Filtrar por rango de precios
  6. Crear reporte de inventario ordenado
  7. Salir

  Ingrese una opción:
  `);

  return opcion;
}
main();
