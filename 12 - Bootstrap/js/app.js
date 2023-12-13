// Selectores
const tbody = document.querySelector("#tbody");

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
                    <button class="btn btn-primary edit-product">
                        Editar
                    </button>

                    <button class="btn btn-danger delete-product">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;

    })
}




mostrarProductos()