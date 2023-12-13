// Selectores
const tbody = document.querySelector("#tbody");
const alerta = document.querySelector("#alerta");

/**Selectores de los inputs (entradas) */
const nombreProducto = document.querySelector("#nombre_producto");
const cantidadProducto = document.querySelector("#cantidad_producto");
const precioProducto = document.querySelector("#precio_producto");
const categoriaProducto = document.querySelector("#categoria_producto");
const imagenProducto = document.querySelector("#imagen_producto");
/** Botones*/
const btnAgregar = document.querySelector("#btn_agregar");

/**Eventos */
//Cuando el usuario haga clic dentro del botón btnAgregar
//Se ejecutará una función
btnAgregar.addEventListener("click", function (event) {
    //Quito los eventos por defecto
    event.preventDefault();
    //Si el usuario dio click se ejecuta esta función
    agregarProducto();
})

//Lista de productos
const listaProductos = [
    {
        id: Date.now(),
        nombre: "Pastas",
        precio: 5.0,
        cantidad: 10,
        imagen: "https://cdn.colombia.com/sdi/2019/03/05/recetas-con-pasta-716227.jpg",
        categoria: "Carbohidrato"
    }
];

function mostrarProductos() {
    //Limpiar tabla 
    tbody.innerHTML = "";


    /**Recorro mi lista de objetos con foreach */
    /**Donde producto es el item que se está recorriendo en el momento */
    /**Y index el indice correspondiente al item del momento */
    listaProductos.forEach(function (producto, indice) {
        /**Desestructuramos el objeto (producto) */
        const { cantidad, categoria, id, imagen, nombre, precio } = producto;

        const precioFormat = Number(precio).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });

        tbody.innerHTML += `
            <tr>
                <td>${indice + 1}</td>
                <td> 
                    <img 
                        src="${imagen}" 
                        alt="img producto"
                        class="rounded-circle"
                        width="50px"
                        height="50px"
                    />
                </td>

                <td>${nombre}</td>
                <td>${precioFormat}</td>
                <td>${categoria}</td>
                <td>${cantidad}</td>

                <td>
                    <button class="btn btn-primary edit-product" data-id="${id}">
                        Editar
                    </button>

                    <button class="btn btn-danger delete-product" data-id="${id}">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;

    })
}

/**Está función se encarga de agregar 
 * y modificar un producto */
function agregarProducto() {

    /**Le adicionamos clases a nuestra alerta (d-none para no se visible) */
    alerta.classList = "alert alert-danger d-none";
    /**Validar  */

    if ([nombreProducto.value,
    cantidadProducto.value,
    categoriaProducto.value,
    precioProducto.value,
    ].includes("")) {
        /**Si algun campo está vacío */
        alerta.textContent = "Todos los campos son obligatorios.";
        alerta.classList.remove("d-none");
        return
    }
    const nuevoProducto = {
        nombre: nombreProducto.value,
        cantidad: cantidadProducto.value,
        categoria: categoriaProducto.value,
        precio: precioProducto.value,
        imagen: imagenProducto.value,
        id: Date.now()
    }
    listaProductos.push(nuevoProducto);
    mostrarProductos()

}


mostrarProductos()