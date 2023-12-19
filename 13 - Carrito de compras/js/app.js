/**Selectores */
const contenedorProductos = document.querySelector("#lista-productos")
const tbody = document.querySelector("#lista-carrito tbody")

/**Inicio mi lista de carrito de compras */
let carritoCompras = []

/**Eventos */
contenedorProductos.addEventListener("click", function (event) {

    /**Validamos que el elemento al que se le dio clic
     * contenga la clase agregar-carrito
    */
    if (event.target.classList.contains("agregar-carrito")) {
        /**Obtengo el id del producto con la propiedad
        getAttribute */
        const id = event.target.getAttribute("data-id")
        /**Subir hasta el padre dos veces */
        const card = event.target.parentElement.parentElement;
        /**Invoco a la función agregar carrito */
        agregarProductoCarrito(id, card);
    }

})

function agregarProductoCarrito(id, card) {

    /**Creo un objeto con toda la información del producto */
    const infoProducto = {
        id,
        nombre: card.querySelector("h4").textContent,
        precio: card.querySelector(".precio span").textContent,
        imagen: card.querySelector(".imagen-curso").src,
        cantidad: 1
    }

    /**Busco al producto que contenga el id dentro de
     * la lista del carrito
     */
    const producto = carritoCompras.find(elemento => elemento.id == id);

    /**Si el producto existe entonces */
    if (producto) {
        /**Aumento la cantidad */
        producto.cantidad++
    } else {
        /**De lo contrario lo agrego a la lista del carrito */
        carritoCompras.push(infoProducto)
    }

    pintarProductosEnCarrito()
}


function pintarProductosEnCarrito() {
    //Forma lenta de limpiar
    // tbody.innerHTML = ""
    limpiarCarrito();
    // carritoCompras.forEach(function (producto) {
    //     tbody.innerHTML += `
    //         <tr>
    //             <td>
    //                 <img height="100" src="${producto.imagen}"/>
    //             </td>
    //             <td>${producto.nombre}</td>
    //             <td>${producto.precio}</td>
    //             <td>${producto.cantidad}</td>
    //             <td>
    //                 <button class="eliminar-producto" data-id="${producto.id}">Eliminar</button>
    //             </td>
    //         </tr>
    //     `;
    // })

    carritoCompras.forEach(function (producto) {
        const tr = document.createElement("tr");

        //TD DE LA IMAGEN
        const tdImagen = document.createElement("td");
        const imagen = document.createElement("img");
        imagen.src = producto.imagen;
        imagen.height = "100";

        tdImagen.appendChild(imagen)
        tr.appendChild(tdImagen);

        //TD para el nombre
        const tdNombre = document.createElement("td")
        tdNombre.textContent = producto.nombre;
        tr.appendChild(tdNombre);

        //TD PARA EL PRECIO
        const tdPrecio = document.createElement("td")
        tdPrecio.textContent = producto.precio;
        tr.appendChild(tdPrecio)

        //TD PARA la cantidad
        const tdCantidad = document.createElement("td")
        tdCantidad.textContent = producto.cantidad;
        tr.appendChild(tdCantidad)

        //TD para el boton
        const tdBoton = document.createElement("td")
        const boton = document.createElement("button");
        boton.classList.add("eliminar-producto")
        boton.setAttribute("data-id", producto.id)
        boton.textContent = "Eliminar";

        tdBoton.appendChild(boton)
        tr.appendChild(tdBoton);

        tbody.appendChild(tr)
    })
}

function limpiarCarrito() {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild)
    }
}