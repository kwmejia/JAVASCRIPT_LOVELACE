//Selectores
const formLogin = document.getElementById("form-login")
const email = document.getElementById("email")
const password = document.getElementById("password")

const URL = "http://localhost:3000/users"
//Eventos

formLogin.addEventListener("submit", (event) => {
    event.preventDefault()

    login()
})

async function login() {
    //1. Petición por email
    const response = await fetch(`${URL}?email=${email.value}`)
    const data = await response.json()
    //2. Esta registrado ese email
    console.log(data)
    if (!data.length) {
        console.log("Email no resgistrado")
        return
    }

    //3. Comparar las contraseñas
    if (data[0].password === password.value) {
        //Con el objeto window podemos redireccionar al usuario
        window.location.href = "administrator.html";
        localStorage.setItem("isAuthorizated", "true")
    } else {
        console.log("Credenciales incorrectas")
    }

}

