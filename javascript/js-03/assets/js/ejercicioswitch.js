/* INSTRUCCIONES:
Escribir un programa que detecte el cupón que tiene el usuario
Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%
-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
 cupón equivocado
 */
let precio = Number(prompt("¡Hola! ¿Cuál es el precio de tu artículo?"));

let cupon = prompt("Coloca tu cupón:");
cupon = cupon.toLowerCase(); //permite cambiar lo que se ingrese a MINUSCULAS
console.log(cupon);

switch(cupon){
    case "bronce":
        descuento = 0.05;
        precioConDescuento = precio*(1-descuento);
        document.write("Del precio del artículo " + "($" + precio + " MXN)" + ", tienes un 5% de descuento. Por lo tanto, el precio final es: " + "$" + precioConDescuento + " MXN.");
        break;
    case "plata":
        descuento = 0.10;
        precioConDescuento = precio*(1-descuento);
        document.write("Del precio del artículo " + "($" + precio + " MXN)" + ", tienes un 10% de descuento. Por lo tanto, el precio final es: " + "$" + precioConDescuento + " MXN.");
        break;
    case "oro":
        descuento = 0.20;
        precioConDescuento = precio*(1-descuento);
        document.write("Del precio del artículo " + "($" + precio + " MXN)" + ", tienes un 20% de descuento. Por lo tanto, el precio final es: " + "$" + precioConDescuento + " MXN.");
        break;
    case "platino":
        descuento = 0.25;
        precioConDescuento = precio*(1-descuento);
        document.write("Del precio del artículo " + "($" + precio + " MXN)" + ", tienes un 25% de descuento. Por lo tanto, el precio final es: " + "$" + precioConDescuento + " MXN.");
        break;
    default:
        document.write("El cupón no fue válido, favor de reescribirlo.");
        break;
}
/* 
NOTAS
*Los operadores logicos o funcionan en SWITCH.
function descuento(){
    let precioConDescuento = precio-(precio*cupon);
    return precioConDescuento;    
}
document.write(descuento());
 */