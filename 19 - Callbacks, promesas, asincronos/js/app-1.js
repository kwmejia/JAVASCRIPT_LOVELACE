//1. Callback Hell

const coders = ["Javier", "Terry", "Hernan"];

function agregarCoder(coder, callback) {
    setTimeout(() => {
        coders.push(coder)
        callback()
    }, 3000)
}

function mostrarCoders() {
    setTimeout(() => {
        console.clear()
        coders.forEach(coder => {
            console.log(coder)
        });

    }, 1000)
}

mostrarCoders()
agregarCoder("Tomás", mostrarCoders)