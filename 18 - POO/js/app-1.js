
//Como crear una clase en Javascript

class Coder {
    //El metodo cosntructor se ejecuta automaticamente
    //en el momento que se usa = instancia
    //Utilizando palabra NEW
    constructor(nombre, edad, lenguajes) {
        this.nombre = nombre;
        this.edad = edad;
        this.lenguajes = lenguajes;
    }
}


//Instanciar = Usar
const objCoder = new Coder("Kevin", 20, ["Python", "Javascript"])
const objCoder2 = new Coder("Terry", 21, ["Python", "Javascript"])


console.log(objCoder.nombre)
console.log(objCoder2)


//Segunda forma de crear una clase

// const Cliente = class Cliente {

// }



