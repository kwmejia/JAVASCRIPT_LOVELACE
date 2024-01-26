//Selectores
const form = document.getElementById("form-register")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")


form.addEventListener("submit", (event) => {
    // Eliminar las acciones por defecto
    event.preventDefault();

    //Invocamos la función para registrar un usuario
    registerUser()
})

function registerUser() {
    //1. La contraseñas tienen que ser iguales

    const { validated, message } = validatePassword();
    //2. Contraseña segura
    console.log(validated, message)

    if (!validated) {
        showAlert(message)
        return
    }

    //3. No existe una cuenta con este correo

}


function validatePassword() {
    if (password.value != passwordConfirmation.value) {
        return { validated: false, message: "Las contraseñas no coinciden" }
    }

    return { validated: true }
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