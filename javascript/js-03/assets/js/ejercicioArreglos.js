//crear una aplicación con JS, recibir una palabra y va a regresar la palabra invertida ... e.g. raul  ==> luar
let palabra = prompt("Escribe una palabra:");

let arregloPalabra = palabra.split("");

let palabraAlReves = arregloPalabra.reverse();

let palabraFinal = palabraAlReves.join("");

console.log(palabraFinal);

/* Luis nos comentaba que se puede tener multiples funciones mientras sea un string:
let palabra = prompt("Introduce una palabra:");
console.log(palabra.split("").reverse().join("")); */