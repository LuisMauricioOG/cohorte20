/* Control de flujo */
//evalua rangos
let edad = Number(prompt("Comenta tu edad, por favor."));

/* if(condicion === true){
    bloque 
    codigo
} */
/* == operador de comparacion
   === comparacion estricta /*
/*console.log(typeof edad);

 if(edad <= 17){
    document.write("Estas peque")
}else if(edad === 18){
    document.write("Eres mayor de edad");
}else if(edad > 18){
    document.write("Tas viejo");
}    else{
    document.write("Eso no es un número válido.");
}*/

//OPERADORES LOGICOS: 
/* && and
   || or
    ! not */
 if((edad > 0) && (edad <= 17)){
    document.write("Estas peque")
}else if(edad === 18){
    document.write("Eres mayor de edad");
}else if(edad > 18){
    document.write("Tas viejo");
}else if(edad < 0){
    document.write("Los números negativos no son válidos.");
}  else{
    document.write("Eso no era un número. Lo siento, vuelve a intentar.")};

//`` son especiales para poder colocar otras cosas dentro

let nombre = "Mau";

console.log("Hola, soy" + nombre);
console.log('Hola');
//Plantilla literal
console.log(`Hola, soy ${nombre} y mi edad es ${2022-1996}`)

//OPERADOR TERNARIO
let edads = 18;
edads >= 18 
? console.log("es mayor de edad")
: console.log("Tas chiquito");
// o podemos guardarlo en una variable: 
/*let mensaje = edad = 18;
edad >= 18 
? "es mayor de edad" --> lo que se ejecuta si es verdad
: "Tas chiquito"; --> lo que se ejecuta si es falso
console.log(mensaje);  */

