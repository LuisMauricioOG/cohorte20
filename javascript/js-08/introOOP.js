let x = 10;
console.log(x);

let persona = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function (){
        return "El nombre es " + this.nombre + " " + this.apellido;
    }
} //Aquí no son tan necesarios los ;

console.log(persona.nombre);
console.log(persona.nombreCompleto());

let persona1 = new Object();
//persona1.edad = 23;
//console.log(persona1.edad);

//Podemos acceder al objeto como si fuese un arreglo:
//console.log(persona["apellido"]);

//for( <nombre de cada elemento> in <objeto/arreglo a recorrer>)... Es una variable temporal que comienza a vivir cuando se inicia el ciclo y termina cuando el ciclo termina


for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log("valor: "+ persona[nombrePropiedad]);
}


persona.tel = "5554205145";
console.log(persona);
console.log(persona.tel);
//Para borrar:
delete persona.tel
console.log(persona); //lo debe mostrar ahora sin teléfono
let personaArreglo = Object.values(persona); //le estamos pasando los valores de su padre
console.log(personaArreglo);
let personaString = JSON.stringify(persona); //para convertir el string en tipo json
console.log(personaString);