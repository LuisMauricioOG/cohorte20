/* const - let - var
NO usar var de preferencia porque se considera global y se puede acceder a ella en cualquier parte del codigo que queramos */

const numeros = [2, 4, 6, 57, 120];

// forEach recorre todo el arreglo y ejecuta el codigo que le indiquemos sobre los valores guardados
/* numeros.forEach(function sumar(elemento){
    console.log(elemento*elemento)
});

let suma = 0;
numeros.forEach(function sumar(elemento){
    suma = suma + elemento;
});
console.log(suma); */
let suma = 0;

numeros.forEach((el, indice) => {
    console.log(el, indice);
});

/* map genera una copia del arreglo original y ocuparlo despues como nuevo arreglo */

/* filter nos sirve para crear una copia del arreglo original y discriminar... 
const frutas = ["papaya", "manzana". "uva", "manzana"];
let frutaFiltrada = frutas.filter((fruta) => fruta.length > 3);
console.log(frutaFiltrada);*/

