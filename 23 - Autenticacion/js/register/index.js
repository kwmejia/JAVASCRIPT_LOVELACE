//Selectores
const form = document.getElementById("form-register")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")

const URL = "http://localhost:3000/users"

form.addEventListener("submit", (event) => {
    // Eliminar las acciones por defecto
    event.preventDefault();

    //Invocamos la función para registrar un usuario
    registerUser()
})

async function registerUser() {
    //1. La contraseñas tienen que ser iguales

    const { validated, message } = validatePassword();
    //2. Contraseña segura
    console.log(validated, message)

    if (!validated) {
        showAlert(message)
        return
    }

    const { validated: validatedSegurity, message: messageError } = validatePasswordSegurity();

    if (!validatedSegurity) {
        showAlert(messageError)
        return
    }



    //3. No existe una cuenta con este correo

    if (await validateEmail()) {
        showAlert("El email ya se encuentra registrado.")
        return
    }

    console.log("TODO CORRECTO")

    try {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email.value, password: password.value })
        })

    } catch (error) {
        showAlert(error)
    }

}


async function validateEmail() {
    const response = await fetch(`${URL}?email=${email.value}`)

    const data = await response.json()

    return data.length

}

function validatePassword() {
    if (password.value != passwordConfirmation.value) {
        return { validated: false, message: "Las contraseñas no coinciden" }
    }

    return { validated: true }
}


function validatePasswordSegurity() {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    //El metodo test permite evaluar una cadena de texto a partir de una expresión regular
    if (regex.test(password.value)) {
        return { validated: true }
    }

    return { validated: false, message: "La contraseña debe tener mayusculas, minusculas, un caracater especial y un rango de 8 a 15 caracateres" }
}



function showAlert(message) {
    Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
        toast: "true",
        timer: 4000,
        showConfirmButton: false,
        position: "bottom-right",
        confirmButtonText: 'Aceptar'
    })
}