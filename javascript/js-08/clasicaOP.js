//Para declarar clases, es mejor empezar con MAYÚSCULA
class OperacionesAritmeticas {
    num0 = 0;
    num1 = 0;
      sumar (a, b){
        return a+b;
        }
}
//Dentro de las clases, en JS, no se ocupan las palabras reservadas let, var, function...
// Instancia - llamamos a la estructura (clase)
let obj1 = new OperacionesAritmeticas();
console.log(obj1.sumar(6, 5));

let obj2 = new OperacionesAritmeticas();


class OperacionesAritmeticas {
    num0 = 0;
    num1 = 0;
      
        constructor (valor0, valor1){
            this.num0 = valor0;
            this.this.num1 = valor1;
        }
        sumar (a, b){
            return a+b;
        }
}
//Operando a nivel memoria los valores
let obj3;
obj3 = new OperacionesAritmeticas(9,3);
console.log(obj3.num0);
console.log(obj3.num1);

console.log(obj3.sumar(obj3.num0, obj3.num1));