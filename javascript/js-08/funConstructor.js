//Declarando constructor
let constructor = function (){
    let valor0 = 0;
    let valor1 = 0;
    //Declarando el objeto
    let persona = {
        nombre: "Pedro",
        apellido: "López",
        //Método
        suma: function (a, b){
            return a+b;
        },
        get nombre1 (){
            return this.nombre; //Puede ser return this._nombre; 
        },
        set nombre1 (nombre2){
            this.nombre = nombre1;
        }
    };
    return persona;
};
//Debemos crear un objeto antes de llamarlo, porque está dentro del constructor
let p1 = new constructor();
console.log(p1.apellido);

//Métodos para acceder a los atributos: GET, SET
p1.nombre = "Carlos";
console.log(p1.nombre);
