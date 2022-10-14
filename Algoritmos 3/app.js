//alert('funciona')
let nombre = 'Mau';
console.log(nombre);

//Arreglos
let arr1 = new Array('MAR', 5, true);
console.log(arr1[1]); //para escoger el elemento que queremos mostrar o manipular. Recordar que comienza a contar en '0'.

//llamar valores
console.log(arr1[1]); //5

//modificar valores
console.log(arr1[3]);
arr1[3] = 234;
console.log(arr1[3]);

//modificar valores ya existentes
arr1[10] = 5;
console.log(arr1);

arr1[10] = 'GDL';
console.log(arr1);

// arreglos multidimensionales, matrices
// un arreglo dentro de otro
const arr4 = [1, 'Adios', false, [1]];
console.log(arr4[2]);
console.log(arr4[3][0]); //primero, la posicion dentro del arreglo general de donde lo toma, luego, la posicion dentro del pequeno arreglo.


let arr2 = [];
console.log(arr2);


/* numeros.sort((a,b) => a -b)*/ //Es una funcion callback, para ordenar de MENOR a MAYOR. Es una funcion anonima, una variacion de una funcion flecha.

/* indexOf sirve para llamar un elemento dentro de un arreglo, pero solo llama al primero que encuentra (si es que existe). */

/* sort sirve para acomodar los elementos dentro de un arreglo */

/* reverse sirve para */