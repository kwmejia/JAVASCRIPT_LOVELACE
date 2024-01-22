//Selectores
const URLBase = "http://localhost:3000";
const nameUser = document.querySelector("#user-name")
const ageUser = document.querySelector("#user-age")
const idUser = document.querySelector("#user-id")
const form = document.querySelector("#form")
const tbody = document.querySelector("#tbody")

//Eventos
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

    const response = await fetch(`${URLBase}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

    console.log(response)

}