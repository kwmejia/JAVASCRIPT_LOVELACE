function main() {
    let flag = true;
    do {
        const opcion = menu();
        switch (opcion) {
            case "1":
                agregarProducto();
                break;

            case "2":
                eliminarProducto()
                break;

            case "3":
                modificarProducto()
                break

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


function modificarProducto() {

    //Creo el reporte mandando como parametro un false
    //EL cual nos devuelve las lista de productos
    const listaString = mostrarReporte(false);
    const idModificar = prompt(listaString + " \n\nIngrese el identificador del producto a actualizar");

    if (!listaDeProductos.some(producto => producto.id == idModificar)) {
        mostrarAlerta("No existen productos con este indentificador")
        return
    }

    //Buscamos el producto que contenga este id
    const objModificar = listaDeProductos.find(producto => producto.id == idModificar)

    //Utilizamos la función obtener datos y mandamos como parametro el objeto encontrado
    const datos = obtenerDatos(objModificar)


    //Actualizamos todos los atributos
    //Si lo queremos hacer en una linea: 
    // Object.keys(objModificar).map(key => objModificar[key] = datos[key])
    // o
    objModificar.nombre = datos.nombre
    objModificar.cantidad = datos.cantidad
    objModificar.categoria = datos.categoria
    objModificar.precio = datos.precio


    //Mostramos la alerta
    mostrarAlerta(`El producto se modificó correctamante`)

}

function obtenerDatos(objModificar = {
    nombre: "",
    categoria: "",
    cantidad: "",
    precio: ""
}) {
    nombre = prompt("Ingrese el nombre del producto", objModificar.nombre);
    categoria = prompt("Ingrese la categoria del producto", objModificar.categoria);
    cantidad = Number(prompt("Ingrese la cantidad del producto", objModificar.cantidad));
    precio = Number(prompt("Ingrese el precio del producto", objModificar.precio));

    //Validación de números
    if (isNaN(cantidad) || isNaN(precio)) {
        mostrarAlerta("Cantidad y precio deben ser numericos");
        return;
    }

    return { nombre, categoria, cantidad, precio }

}

function eliminarProducto() {
    mostrarReporte();

    const nombreEliminar = prompt("Ingresa el nombre del producto a eliminar");

    if (!listaDeProductos.some(producto => producto.nombre.toLowerCase() == nombreEliminar.toLowerCase())) {
        mostrarAlerta(`No existen productos con el nombre ${nombreEliminar}`)
        return
    }

    listaDeProductos = listaDeProductos.filter(
        (producto) => producto.nombre.toLowerCase() != nombreEliminar.toLowerCase()
    );


    mostrarAlerta(
        `Los productos con el nombre ${nombreEliminar} fueron eliminados exitosamente`
    );
}

function mostrarReporte(imprimir = true) {
    if (listaDeProductos.length < 0) {
        mostrarAlerta("No hay productos en el inventario");
        return;
    }

    listaDeProductos.sort((a, b) => a.nombre.localeCompare(b.nombre));

    const fechaHoy = new Date().toDateString();

    let listaString = `Lista de productos fecha hoy: ${fechaHoy}\n`;

    listaDeProductos.forEach((producto, index) => {
        const { nombre, categoria, cantidad, precio, id } = producto;

        listaString += `${index + 1
            }. id: ${id} Nombre:${nombre}, Categoria:${categoria} Cantidad:${cantidad} Precio:${precio} \n`;
    });

    if (imprimir) {
        mostrarAlerta(listaString);
        return
    }

    return listaString;
}

function agregarProducto() {
    const objNuevo = obtenerDatos()

    const id = Date.now();
    const nuevoProducto = { id, ...objNuevo };
    listaDeProductos.unshift(nuevoProducto);

    mostrarAlerta("Producto agregado correctamente")
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
