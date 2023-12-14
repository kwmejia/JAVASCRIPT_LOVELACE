// Selectores
const tbody = document.querySelector("#tbody");
const alerta = document.querySelector("#alerta");
const tituloDrawer = document.querySelector("#offcanvasNavbarLabel");

/**Selectores de los inputs (entradas) */
const nombreProducto = document.querySelector("#nombre_producto");
const cantidadProducto = document.querySelector("#cantidad_producto");
const precioProducto = document.querySelector("#precio_producto");
const categoriaProducto = document.querySelector("#categoria_producto");
const imagenProducto = document.querySelector("#imagen_producto");
/** Botones*/
const btnAgregar = document.querySelector("#btn_agregar");
let productCache;
/**Eventos */

//Cuando el usuario haga clic dentro del botón btnAgregar
//Se ejecutará una función
btnAgregar.addEventListener("click", function (event) {
    //Quito los eventos por defecto
    event.preventDefault();
    //Si el usuario dio click se ejecuta esta función
    agregarProducto();
})

//Escuchar cuando el usuario de clic en el cuerpo de la tabla
tbody.addEventListener("click", (event) => {

    /**Si a la etiqueta en la que se ejecutó el evento contiene la clase delete-product - entonces */
    if (event.target.classList.contains("delete-product")) {
        /**Obtener el id del producto */
        const id = event.target.getAttribute("data-id")
        if (id) eliminarProducto(id);
        //Para que no siga la función
        return
    }

    /**Si la etiqueta contiene la clase edit-product quiere decir que estamos editando */
    if (event.target.classList.contains("edit-product")) {
        console.log("Editandoooo")
        /**Obtener el id del producto */
        const id = event.target.getAttribute("data-id")
        /**Si existe un id invoco la funcion */
        if (id) cargarInformacion(id)
    }


});

//Lista de productos
let listaProductos = [
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

        const imgDefault = "https://img.freepik.com/vector-premium/concepto-menu-diseno-icono-comida-grafico-vector-ilustracion-10-eps_24911-20357.jpg?w=2000"

        tbody.innerHTML += `
            <tr>
                <td>${indice + 1}</td>
                <td> 
                    <img 
                        src="${imagen || imgDefault}" 
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

    /**Si existe un producto en cache  agrega*/
    if (!productCache) {
        /**Creo un nuevo objeto literal */
        const nuevoProducto = {
            nombre: nombreProducto.value,
            cantidad: cantidadProducto.value,
            categoria: categoriaProducto.value,
            precio: precioProducto.value,
            imagen: imagenProducto.value,
            id: Date.now()
        }
        /**Agrego al final de la lista el nuevo producto */
        listaProductos.push(nuevoProducto);

    } else {
        //De lo contrario actualizo el objeto que esta apuntando
        //al mismo espacio de memoria que se quiere actualizar
        productCache.nombre = nombreProducto.value;
        productCache.cantidad = cantidadProducto.value;
        productCache.precio = precioProducto.value;
        productCache.categoria = cantidadProducto.value;
        productCache.imagen = imagenProducto.value;

        productCache = undefined;

    }
    /**  Mostrar alerta de éxito*/
    alerta.classList = "alert alert-success"
    alerta.textContent = "Producto agregado correctamente."

    /**Escondo la alerta despues de 3 segundos */
    setTimeout(() => {
        alerta.classList.add("d-none");
    }, 3000);

    /**Reseteamos el formulario */
    document.querySelector("#form_productos").reset();

    /**Mostramos de nuevo los productos */
    mostrarProductos();

}

function eliminarProducto(id) {
    /**Filtro todos los productos */
    listaProductos = listaProductos.filter(producto => producto.id != id);

    mostrarProductos();
}

/**Esta funcion se encarga de mostrar los valores en el drawer */
function cargarInformacion(id) {

    /**Busco el producto que contenga ese id */
    productCache = listaProductos.find((product) => product.id == id);

    console.log(productCache)

    /**Asignar el valora a cada input */
    nombreProducto.value = productCache.nombre;
    cantidadProducto.value = productCache.cantidad;
    precioProducto.value = productCache.precio;
    categoriaProducto.value = productCache.categoria;
    imagenProducto.value = productCache.imagen;


    /**Selecciono el botón de editar desde el HTML */
    const drawer = document.querySelector("#btnOpenDrawerEdit");

    /**Obligo a hacer un clic al botón de abrir el drawer de editar */
    drawer.click();

    tituloDrawer.textContent = "Actualizar producto";
    btnAgregar.textContent = "Actualizar";

}


mostrarProductos()