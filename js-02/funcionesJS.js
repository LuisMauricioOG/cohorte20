let miNom = "Mau";
console.log(miNombre); 

function miNombre(){
    let nombre = "Mau";
    console.log(nombre);
}
/* Para invocar la funcion creada solo requieres el nombre de la funcion, parentesis y listo */
miNombre();

function funcion1(){
    let valor = 2;
    valor = valor + 3;
    return valor;
}

let resultado = funcion1();
console.log("El resultado es: " + resultado);

/* Declaracion global cuando esta fuera de la descripcion de la funcion. Sin embargo, puede traer ciertos problemas... Como es global, cualquier otra de las funciones que ya tenga declaradas puede interferir.
Variable local seria cuando esta dentro de la descripcion de la funcion y su scope solo es dentro de esa funcion. No se pueden volver a llamar!!! */
function funcion2(){
    let valor2 = 5;
    valor2 = valor2 + 11;
    console.log("El resultado es: " + valor2);
}
funcion2();

let variableGlobal = 6;
function funcion3(){
    let variableLocal = "El valor es. ";
    console.log(variableLocal + variableGlobal);
}

funcion3();

/* Declarar parametros. Se le asigna al momento en que llamamos a la funcion */
function funcion4 (valor){
    let numero = 6;
    numero = numero * valor;
    return numero;
}
/* A continuacion, le damos el valor al parametro */
let salida = funcion4(3);
console.log("El producto es " + salida);

/* Podemos hacer una reasignacion a esos parametros. Se coloca dentro de la designacion del parametro. Por ejemplo:
function funcion4 (valor = 2){
    let numero = 6;
    numero = numero * valor;
    return numero;
}
let salida = funcion4();
console.log("El producto es " + salida);
*/

/* Funciones anonimas */
let miFuncion0 = function (parametro){
    parametro = parametro * 2;
    return parametro;
};
console.log("Llamando a la funcion anonima " + miFuncion0 (4));

let funcion01 = function (caracteres){
    return "Hola " + caracteres;
}("Lunes");
console.log("El resultado es " + funcion01);
/* Recordar poner PUNTO Y COMA ";" al finalizar de describir nuestra funcion */

/* Funciones FLECHA */
let suma = (x, y) => {return x+y};
let result = suma (5, 3);
console.log("La suma es: " + result);

/* ACTIVIDAD:
Realizar una funcion (calcularPrecioTotal)
para Calcular el precio total de una compra tomando encuenta 
impuestos = 1.16, gartos de envio = 10, y como parametro el precio
donde 
precioTotal = (precio * impuesto ) + gartosEnvio;

como salida precio Total
precioTotal = calcularPrecioTotal(23.34);
 */

function calcularPrecioTotal (){
    let impuesto = 1.16;
    let gastosEnvio = 10;
    let precio = 23.34;
   console.log((precio * impuesto)+gastosEnvio)

}
calcularPrecioTotal();

/* Con funcion ANONIMA */
let calcPrecioTotal = function (precioPrevio){
    let gastosDeEnvio = 10;
    let impuestos = 1.16;
    precioTotal = gastosDeEnvio + (impuestos * precioPrevio);
    return precioTotal;
}("23.34");
console.log("El precio total de su compra es " + calcPrecioTotal);

/* Con funcion FLECHA */
let calcPrTotal = (x, y, z) => {return (x*y)+z};
let resultCalcPrTotal = calcPrTotal (23.34, 1.16, 10);
console.log("Usted debe pagar: " + resultCalcPrTotal);

/* Calculando el impuesto */
let calculoPrecioTotal = (pr, porcImpuesto) => {
    let gEnvio = 10;
    let prConImpuesto = pr*(1+porcImpuesto/100);
    let precioTot = prConImpuesto + gEnvio;
    return precioTot
}
let precioTot = calculoPrecioTotal(23.34, 16);
console.log("El precio total a pagar (incluyendo IVA) es: " + precioTot);


/* OBJETOS */
let miObjeto = {
    nombre: "Mau",
    edad: 26
};
/* La llamada se llama INSTANCIA */
let mensaje = "Tu nombre es: " + miObjeto.nombre;
/* Concatenar */
mensaje += ". Tienes " + miObjeto["edad"] + " años.";
console.log(mensaje);