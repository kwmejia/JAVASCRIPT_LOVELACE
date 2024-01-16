//Metodos

class Cliente {

    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    //Sintaxis para crear metodos
    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`
    }

    retirarSaldo(retiro) {
        this.saldo -= retiro
    }
    //Este metodo lo puedo utilizar sin instanciar la clase
    static bienvendida() {
        return "Hola, bienvenido al cajero"
    }
}


console.log(Cliente.bienvendida())
//Usar la clase cliente
const objKevin = new Cliente("Kevin", 400)

console.log(objKevin.imprimirSaldo())

objKevin.retirarSaldo(150)

console.log(objKevin.imprimirSaldo())

