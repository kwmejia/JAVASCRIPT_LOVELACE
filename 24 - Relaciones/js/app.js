//Selectores
const formAuthor = document.getElementById("form-Author")
const nameAuthor = document.getElementById("name-author")
const ageAuthor = document.getElementById("age-author")
//Select books
const formBooks = document.getElementById("form-books")
const nameBook = document.getElementById("name-book")
const dateBook = document.getElementById("date-book")
const selectAuthor = document.getElementById("idAuthor")

const URLAuthor = "http://localhost:3000/athors"

document.addEventListener("DOMContentLoaded", () => {
    loadingSelectAuthor()
})

formBooks.addEventListener("submit", (event) => {
    event.preventDefault()
    // createAuthor()
})

formAuthor.addEventListener("submit", (event) => {
    event.preventDefault();

    createAuthor()
})

async function loadingSelectAuthor() {
    const response = await fetch(URLAuthor)
    const data = await response.json()
    //Recorro la lista de autores
    data.forEach(author => {
        //Por cada iteración voy a crear una etiqueta option
        const option = document.createElement("option")
        option.value = author.id
        option.textContent = author.name
        selectAuthor.appendChild(option)
    });
    console.log(data)
}

async function createAuthor() {
    await fetch(URLAuthor, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: nameAuthor.value,
            age: ageAuthor.value
        })
    })
}