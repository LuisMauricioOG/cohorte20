let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

/* console.log(arr[0]); */
/* Recordar que para llamar a un elemento dentro de un sub-arreglo, debemos ocupar [# posicion del subarreglo][# posicion del elemento].
Por ejemplo, para el numero 5: arr[1][1] */

/* Para acceder a los elementos
for (let fila = 0; fila <= 2; fila++){
    for (let columna = 0; columna <= 2; columna++){
    console.log(arr[fila][columna]);
                }
                console.log("-------------------");
}  *///revisar que el recorrido sea el que queremos

//Muestra de 0 a 9
//let contador = 0;
/* while(contador < 10){
    console.log(contador);
    
    contador = contador + 1;
    
} */ 
//Muestra de 1 a 11
/* do{
    contador ++;
    console.log(contador);
}while(contador <= 10);*/ 

/* let cadena = "hola";
console.log(cadena.length);

let fila = 0;
while(fila < 3 ){
    for(let columna = 0; columna <= 2; columna++){

        console.log(arr [fila][columna]);

    }
    fila ++;
    
    console.log("-----------------")
}
 */

/* let fila = 0;

do{
    for(let columna = 0; columna <= 2; columna++){

        console.log(arr [fila][columna]);

    }
    fila ++;
    
    console.log("-----------------");
}while(fila <= 2) */

//Ejercicio: multiplicacion de matrices, pero solamente fila 1 de matriz1 * columna 1 de matriz 2. 
let matriz1 = [
    [1, 5, 9],
    [4, 6, 5],
    [9, 8, 3]
];

let matriz2 = [
    [7, 6, 2],
    [1, 5, 3],
    [2, 6, 4]
];
//Recordar poner la matriz resultante vacia para colocar los elementos de la multiplicacion dentro.

matrizFinal=[];

for(let indexA = 0; indexA < matriz1.length; indexA++) {
    let fila=[];
    for(let indexAA = 0; indexAA < matriz1[indexA].length; indexAA++){
        console.log(matriz1[indexA][indexAA]*matriz2[indexAA][indexA]);
        let elementos = matriz1[indexA][indexAA]*matriz2[indexAA][indexA];
        fila.push(elementos);
    }
    matrizFinal.push(fila);
}
console.log(matrizFinal);
