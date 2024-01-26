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


document.body.addEventListener("click", (event) => {

    //Quitar las acciones por defecto
    // event.preventDefault()

    //SI a la etiqueta que se le dió clic contiene la clase btn-delete entonces:
    if (event.target.classList.contains("btn-delete")) {
        //Extraemos el valor del id
        const id = event.target.getAttribute("user-id")
        deleteUser(id)
    }

    if (event.target.classList.contains("btn-edit")) {
        const id = event.target.getAttribute("user-id")
        loadingInfo(id)

    }
})

form.addEventListener("submit", (event) => {
    //Prevenir los eventos por defecto
    event.preventDefault();

    //SI idUser tiene valor entonces:
    if (idUser.value) {
        //Actualizar
        updateUser()
    } else {
        //Función para crear un usuario
        createUser()
    }
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
                    <button class="btn btn-danger btn-delete" user-id="${user.id}">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

async function loadingInfo(id) {
    const response = await fetch(`${URLBase}/users/${id}`)
    const user = await response.json()

    nameUser.value = user.name;
    ageUser.value = user.age;
    idUser.value = user.id;
}

async function deleteUser(id) {
    await fetch(`${URLBase}/users/${id}`, {
        method: "DELETE"
    });
}

async function updateUser() {
    const id = idUser.value

    const user = {
        name: nameUser.value,
        age: ageUser.value
    }

    await fetch(`${URLBase}/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
}

function cleanTbody() {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild)
    }
}