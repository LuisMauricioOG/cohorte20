/*
INSTRUCCIONES
Crear un programa en Javascript que realice lo siguiente:
    1.- Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
    2.- Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
    3.- Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
    4.- Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
*/
let nombre =  prompt('¿Cuál es tu nombre?');
let saludo = ('Hola ' + nombre + '. Hoy haremos un ejercicio. Requiero que pienses en tres (3) números y los coloques a continuación.');
alert(saludo);
let valor1 =  parseInt(prompt('¡Comencemos! Coloca el primer valor numérico:'));
let valor2 =  parseInt(prompt('Ahora, coloca el segundo valor numérico:'));
let valor3 =  parseInt(prompt('Por último, coloca el tercer valor numérico:'));
let ver = ('Bueno, ahora es mi turno de analizar los números que colocaste. Por favor, abre la consola para poder ver el resultado.');
alert(ver);
function comparacion(){
    if(valor1 == valor2 && valor1 == valor3){
        console.log('Los valores que ingresaste son IGUALES. ¿Cierto? ' + 'Entonces, no hay menor ni mayor.');
    }
    if(valor1 == valor2 || valor1 == valor3 || valor2 == valor3){
        console.log('Dos valores se repiten. ¿Cuáles son los mayores y cuál el menor? ¿O viceversa? ' + '🧐');
    }
        else{
        console.log('Los valores que ingresaste son DIFERENTES. ¿Cuál es el mayor y cuál el menor?');}
    }
comparacion();

function numMayor(){
    if(valor1 > valor2 && valor1 > valor3){
        console.log('El primer valor que colocaste es el mayor '+ '(' + valor1 + ')' + '.');
    } 
    if(valor2 > valor1 && valor2 > valor3){
        console.log('El segundo valor que colocaste es el mayor '+ '(' + valor2 + ')' + '.');
    }
    if(valor3 > valor1 && valor3 > valor2){
        console.log('El tercer valor que colocaste es el mayor '+ '(' + valor3 + ')' + '.');
    }
    if(valor1 == valor2 && valor1 > valor3){
        console.log('El primer y el segundo valor son los mayores ' + '(' + valor1 + ')' + '.');
    }
    if(valor1 == valor3 && valor1 > valor2){
        console.log('El primer y el tercer valor son los mayores ' + '(' + valor1 + ')' + '.');
    }
    if(valor2 == valor3 && valor2 > valor1){
        console.log('El segundo y el tercer valor son los mayores ' + '(' + valor3 + ')' + '.');
    }
    }
numMayor();

function numMenor(){
    if(valor1 < valor2 && valor1 < valor3){
        console.log('El primer valor que colocaste es el menor '+ '(' + valor1 + ')' + '.');
    } 
    if(valor2 < valor1 && valor2 < valor3){
        console.log('El segundo valor que colocaste es el menor '+ '(' + valor2 + ')' + '.');
    }
    if(valor3 < valor1 && valor3 < valor2){
        console.log('El tercer valor que colocaste es el menor '+ '(' + valor3 + ')' + '.');
    }
    if(valor1 == valor2 && valor3 > valor1){
        console.log('El primer y el segundo valor son los menores ' + '(' + valor1 + ')' + '.');
    }
    if(valor1 == valor3 && valor2 > valor1){
        console.log('El primer y el tercer valor son los menores ' + '(' + valor1 + ')' + '.');
    }
    if(valor2 == valor3 && valor1 > valor2){
        console.log('El segundo y el tercer valor son los menores ' + '(' + valor3 + ')' + '.');
    }
}
numMenor();

console.log('Finalmente, veamos su orden (de mayor a menor y viceversa).');
/*
let arr1 = new Array[valor1, valor2, valor3];
let val1Mayor = (valor1 > valor2 && valor1 > valor3);
let val2Mayor = (valor2 > valor1 && valor2 > valor3);
let val3Mayor = (valor3 > valor2 && valor3 > valor1);
let val12Mayor = (valor1 == valor2 && valor1 > valor3);
let val13Mayor = (valor1 == valor3 && valor1 > valor2);
let val23Mayor = (valor3 == valor2 && valor3 > valor1); 
*/
function ordenar1(){
    if(valor1 > valor2 && valor2 > valor3){
        console.log('Orden de mayor a menor: ' + valor1 + ', ' + valor2 + ', ' + valor3 + '.');
    }
    if(valor1 == valor2 && valor2 > valor3){
        console.log('Orden de mayor a menor: ' + valor1 + ', ' + valor2 + ', ' + valor3 + '.');
    }
    if(valor1 == valor3 && valor1 > valor2){
        console.log('Orden de mayor a menor: ' + valor1 + ', ' + valor3 + ', ' + valor2 + '.');
    }
    if(valor3 == valor2 && valor2 > valor1){
        console.log('Orden de mayor a menor: ' + valor3 + ', ' + valor2 + ', ' + valor1 + '.');
    }
    if(valor1 > valor3 && valor3 > valor2){
        console.log('Orden de mayor a menor: ' + valor1 + ', ' + valor3 + ', ' + valor2 + '.');
    }
    if(valor2 > valor1 && valor1 > valor3){
        console.log('Orden de mayor a menor: ' + valor2 + ', ' + valor1 + ', ' + valor3 + '.');
    }
    if(valor2 > valor3 && valor3 > valor1){
        console.log('Orden de mayor a menor: ' + valor2 + ', ' + valor3 + ', ' + valor1 + '.');
    }
    if(valor3 > valor2 && valor2 > valor1){
        console.log('Orden de mayor a menor: ' + valor3 + ', ' + valor2 + ', ' + valor1 + '.');
    }
    if(valor3 > valor1 && valor1 > valor2){
        console.log('Orden de mayor a menor: ' + valor3 + ', ' + valor1 + ', ' + valor2 + '.');
    }
}
ordenar1();

function ordenar2(){
    if(valor1 == valor2 && valor2 < valor3){
        console.log('Orden de menor a mayor: ' + valor1 + ', ' + valor2 + ', ' + valor3 + '.');
    }
    if(valor1 == valor3 && valor1 < valor2){
        console.log('Orden de menor a mayor: ' + valor1 + ', ' + valor3 + ', ' + valor2 + '.');
    }
    if(valor3 == valor2 && valor2 < valor1){
        console.log('Orden de menor a mayor: ' + valor3 + ', ' + valor2 + ', ' + valor1 + '.');
    }
    if(valor1 < valor2 && valor2 < valor3){
        console.log('Orden de menor a mayor: ' + valor1 + ', ' + valor2 + ', ' + valor3 + '.');
    }
    if(valor1 < valor3 && valor3 < valor2){
        console.log('Orden de menor a mayor: ' + valor1 + ', ' + valor3 + ', ' + valor2 + '.');
    }
    if(valor2 < valor1 && valor1 < valor3){
        console.log('Orden de menor a mayor: ' + valor2 + ', ' + valor1 + ', ' + valor3 + '.');
    }
    if(valor2 < valor3 && valor3 < valor1){
        console.log('Orden de menor a mayor: ' + valor2 + ', ' + valor3 + ', ' + valor1 + '.');
    }
    if(valor3 < valor2 && valor2 < valor1){
        console.log('Orden de menor a mayor: ' + valor3 + ', ' + valor2 + ', ' + valor1 + '.');
    }
    if(valor3 < valor1 && valor1 < valor2){
        console.log('Orden de menor a mayor: ' + valor3 + ', ' + valor1 + ', ' + valor2 + '.');
    }
}
ordenar2();
/*
function suma(){
    //let num1 = parseInt(prompt("Coloca un valor al número 1: "));
    //let num2 = parseInt(prompt("Ahora, coloca un valor al número 2: "));
    let num1 = 5
    let num2 = 6
    let resultado = num1 + num2;
    return resultado
}
//alert(suma());
console.log('El resultado de esta operación (5+6), es:' + suma());
*/