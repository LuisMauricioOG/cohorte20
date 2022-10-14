/*crea un archivo llamado ejercicio2.js
cada comando debe mostrarse en consola

const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//Escribe un comando para remover a "Dani" del arreglo

splice();

//Escribe un comando para remover a "Juan del arreglo"

//Escribe un comando para agregar a "Luis" al inicio del arreglo

//Escribe el comando para agregar tu nombre al final del arreglo

//Escribe el comando para mostrar la posición de "Maria"

indexOf()

//Escribe el comando para mostrar la posición de tu nombre */
const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(personas);
//Escribe un comando para remover a "Dani" del arreglo     ---> splice(Posicion, Cuantas veces se elimina)
// También Puedes agregar los que quieras creo
/*personas.splice(personas.indexOf("Dani"), 1);*/
var removed = personas.splice(1, 1);
console.log(personas);
//Escribe un comando para remover a "Juan del arreglo"
var removed2 = personas.splice(2, 1);
console.log(personas);
//Escribe un comando para agregar a "Luis" al inicio del arreglo
console.log(personas.unshift('Luis'));
console.log(personas);
//Escribe el comando para agregar tu nombre al final del arreglo
console.log(personas.push('Mau'));
console.log(personas);
//Escribe el comando para mostrar la posición de "Maria"       --  indexOf()
console.log(personas.indexOf('Mau'));
console.log(personas);