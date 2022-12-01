
class Persona {
    constructor (numero, nombre, apellido, edad){
        this._numero = numero;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get Persona (){
        return this._numero;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre (nombre){
        this._nombre = nombre;
    }
    get apellido (){
        return this._apellido;
    } 
    set apellido (apellido){
        this._apellido = apellido;
    } 
    get edad () {
        return this._edad; //number
    } 
    set edad (edad){
        this._edad = edad; //string
    } 
    nombreCompleto (){
        return this._nombre + " " + this._apellido;
    }
}

class Empleado extends Persona{
   
    constructor(nombre, apellido, idEmpleado, sueldo){
        super(nombre, apellido);//para acceder al padre y poder redifinir a empleado
        this._idEmpleado = idEmpleado; //¿Mismo que número de persona?
        this._sueldo = sueldo;
    }
    set idEmpleado (idEmpleado){
        this._idEmpleado = idEmpleado;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    set sueldo (sueldo){
        this._sueldo = sueldo;
    }
    get sueldo (){
        return this._sueldo;
    }
    //Sobreescritura del método:
    nombreCompleto (){
        return super.nombreCompleto() + ", " + this._empresa;
    }
    toString (){
        return this.nombreCompleto();
    }
}

class Cliente extends Persona{
    constructor (idCliente, registro){
        this._idCliente = idCliente;
        this._registro = registro;
    }
}


let p1 = new Persona("Hugo", "Sanchez");
console.log(p1.nombreCompleto);//solo dará la función
//Mandará a llamar a los valores seleccionados console.log(p1.nombreCompleto());

let E1 =  new Empleado("Juan", "Escutia", "Coppel");

//Antes del cambio de nombreCompleto dentro de la clase empleado, era: console.log(E1.nombreCompleto() + ", " + E1.empresa);

console.log(E1.nombreCompleto());

//Método toString para concatenar; empleando el polimorfismo:
console.log(E1.toString());