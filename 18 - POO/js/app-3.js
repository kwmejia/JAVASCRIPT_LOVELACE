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

//Nuevo
//Herencia
class Empresa extends Cliente {
    //Encapsulación
    #nit
    constructor(nombre, saldo, tipo, nit) {
        super(nombre, saldo)
        this.tipo = tipo;
        this.#nit = nit;
    }
    //Crear un metodo encargado de mostrar el nit
    obtenerNit() {

        return this.#nit
    }

    //Polimorfismo o sobrescritura
    //@Overwriting
    static bienvendida() {
        return "Hola, bienvenido al cajero para empresas"
    }
}

//Instancias
console.log(Cliente.bienvendida())
const objCliente = new Cliente("Kevin", 200)
console.log(objCliente.imprimirSaldo())


//Instancia
console.log(Empresa.bienvendida())
const objEmpresa = new Empresa("Riwi", 3000, "Tecnologia", "991112")

console.log(objEmpresa.obtenerNit())

console.log(objEmpresa.imprimirSaldo())

objEmpresa.retirarSaldo(1000)

console.log(objEmpresa.imprimirSaldo())
