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

switch(cupon){
    case "bronce":
        document.write("Del precio del artículo" + "(" + precio + ")" + ", tienes un 5% de descuento. Por lo tanto, el precio final es: ");
        document.write();
        break;
    case "plata":document.write("Tienes un 10% de descuento.");
        break;
    case "oro":document.write("Tienes un 20% de descuento.");
        break;
    case "platino":document.write("Tienes un 25% de descuento.");
        break;
    default:
        document.write("El cupón no es válido.");
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