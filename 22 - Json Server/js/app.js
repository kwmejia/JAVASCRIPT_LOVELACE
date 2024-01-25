//Selectores
const URLBase = "http://localhost:3000";
const nameUser = document.querySelector("#user-name")
const ageUser = document.querySelector("#user-age")
const idUser = document.querySelector("#user-id")
const form = document.querySelector("#form")
const tbody = document.querySelector("#tbody")

//Eventos
document.addEventListener("DOMContentLoaded", () => {
    getUsers()
})

form.addEventListener("submit", (event) => {
    //Prevenir los eventos por defecto
    event.preventDefault();

    //Función para crear un usuario
    createUser()
})

//Funciones
async function createUser() {
    //Verbos HTTP
    // GET -> Obtener
    // POST -> Crear
    // PUT -> Actualizar
    // DELETE -> Eliminar

    const user = {
        name: nameUser.value,
        age: ageUser.value,
    }

    //Fetch recibe dos parametros, la URL y un objeto de configuración
    const response = await fetch(`${URLBase}/users`, {
        //Metodo POST porque vamos a insertar
        method: "POST",
        //Cabecera de tipo json, para decirle que la información se enviara de esta manera
        headers: {
            "Content-Type": "application/json"
        },
        //Body: Enviamos la información convertida en String
        body: JSON.stringify(user)
    })

    console.log(response)

    getUsers()

}

async function getUsers() {
    const respose = await fetch(`${URLBase}/users`)
    const data = await respose.json()

    console.log(data)
    renderUsers(data);
}

function renderUsers(users) {

    // tbody.innerHTML = ""
    cleanTbody()

    users.forEach((user) => {
        tbody.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>
                    <button class="btn btn-primary btn-edit" user-id="${user.id}">Editar</button>
                    <button class="btn btn-danger btn-delete" user-id="${user.id}>Eliminar</button>
                </td>
            </tr>
        `;
    });
}

function cleanTbody() {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild)
    }
}