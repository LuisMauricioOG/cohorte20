
class Persona {
    constructor (nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    set nombre (nombre){
        this._nombre = nombre;
    }
    set apellido (apellido){
        this._apellido = apellido
        ;
    } 
    nombreCompleto (){
        return this._nombre + " " + this._apellido;
    }

}

class Empleado extends Persona{
   
    constructor(nombre, apellido, empresa){
        super(nombre, apellido);//para acceder al padre y poder redifinir a empleado
        this._empresa = empresa;
    }
    set empresa (empresa){
        this._empresa = empresa;
    }
    get empresa(){
        return this._empresa;
    } //Sobreescritura del método:
    nombreCompleto (){
        return super.nombreCompleto() + ", " + this._empresa;
    }
    toString (){
        return this.nombreCompleto();
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