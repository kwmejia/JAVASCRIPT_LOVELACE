//Selectores
const formAuthor = document.getElementById("form-Author")
const nameAuthor = document.getElementById("name-author")
const ageAuthor = document.getElementById("age-author")
//Select books
const formBooks = document.getElementById("form-books")
const nameBook = document.getElementById("name-book")
const dateBook = document.getElementById("date-book")
const selectAuthor = document.getElementById("idAuthor")

const listBooks = document.getElementById("listBooks")

const URLAuthor = "http://localhost:3000/athors"
const URLBooks = "http://localhost:3000/books"

document.addEventListener("DOMContentLoaded", () => {
    loadingSelectAuthor()
    getBooks()
})

formBooks.addEventListener("submit", (event) => {
    event.preventDefault()
    createBook()
})

formAuthor.addEventListener("submit", (event) => {
    event.preventDefault();

    createAuthor()
})

async function getBooks() {
    const response = await fetch(`${URLBooks}?_embed=athor`)
    const data = await response.json()

    console.log(data)
    data.forEach(books => {
        listBooks.innerHTML += `
            <li>Nombre: ${books.name} - Autor: ${books.athor.name}</li>
        `;
    })
}

async function createBook() {
    await fetch(URLBooks, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: nameBook.value,
            date: dateBook.value,
            athorId: selectAuthor.value
        })
    })
}

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