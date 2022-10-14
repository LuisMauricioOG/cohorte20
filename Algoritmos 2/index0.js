let miVariable=prompt('¿Cuál es tu nombre?');

/*
function saludoPer(){
    alert(miVariable);

}

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

function resta(){
    //let num1 = parseInt(prompt("Coloca un valor al número 1: "));
    //let num2 = parseInt(prompt("Ahora, coloca un valor al número 2: "));
    let num1 = 7
    let num2 = 4
    let resultado = num1 - num2;
    return resultado
}
//alert(suma());
console.log('El resultado de esta operación (7-4), es:' + resta());

function multi(){
    //let num1 = parseInt(prompt("Coloca un valor al número 1: "));
    //let num2 = parseInt(prompt("Ahora, coloca un valor al número 2: "));
    let num1 = 3
    let num2 = 4
    let resultado = num1 * num2;
    return resultado
}

console.log('El resultado de esta operación (3*4), es:' + multi());

function divis(){
    //let num1 = parseInt(prompt("Coloca un valor al número 1: "));
    //let num2 = parseInt(prompt("Ahora, coloca un valor al número 2: "));
    let num1 = 12
    let num2 = 4
    let resultado = num1 / num2;
    return resultado
}

console.log('El resultado de esta operación (12/4), es:' + divis());

function residuo(){
    //let num1 = parseInt(prompt("Coloca un valor al número 1: "));
    //let num2 = parseInt(prompt("Ahora, coloca un valor al número 2: "));
    let num1 = 12
    let num2 = 7
    let resultado = num1 % num2;
    return resultado
}

console.log('El resultado de esta operación, es:' + residuo());

function adicionales(){
    //let num1 = parseInt(prompt("Coloca un valor al número 1: "));
    //let num2 = parseInt(prompt("Ahora, coloca un valor al número 2: "));
    let num1 = 3
    let resultado = ++num1;
    return resultado
}

console.log('El resultado de esta operación, es:' + adicionales());
*/
//if

function edad(){
    let miEdad = 18;
    if (miEdad >= 18){
        console.log('Eres mayor de edad.');
    }
        else{
console.log('No eres mayor de edad.')}
}
edad()

function conjuncion(){
    let valor1 = true;
    let valor2 = true;
    if(valor1 && valor2){
        console.log('El valor1 y el valor 2 son verdaderos.');
    }
    else {
        console.log('Un valor es falso.');
    }
}
conjuncion();

function disyuncion(){
    let var1 = false;
    let var2 = false;
    if(var1 || var2){
        console.log('El operador OR es verdadero.');
    }
    else{
        console.log('El operador OR es falso.');
    }
}
disyuncion();

function negacion(){
    let var1 = true;
    if(!!var1){
        console.log('El valor es ' + var1);
    }
    else{
        console.log('El valor negado es ' + var1);
    }
}
negacion();