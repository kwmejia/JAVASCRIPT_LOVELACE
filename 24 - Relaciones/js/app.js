//Selectores
const formAuthor = document.getElementById("form-Author")
const nameAuthor = document.getElementById("name-author")
const ageAuthor = document.getElementById("age-author")
const URLAuthor = "http://localhost:3000/athors"

formAuthor.addEventListener("submit", (event) => {
    event.preventDefault();

    createAuthor()
})

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