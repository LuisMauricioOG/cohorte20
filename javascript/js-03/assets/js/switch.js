/* Swtich - case */
//switch evalua opciones
let dia = Number(prompt("¡Hola! ¿Podrías darme la hora (formato 24h), por favor?"));;

switch(dia){
    case 1:
        document.write("Lunes");
        break;
    case 2:document.write("Martes");
        break;
    case 3:document.write("Miércoles");
        break;
    case 4:document.write("Jueves");
        break;
    case 5:document.write("Viernes");
        break;
    case 6:document.write("Sábado");
        break;
    case 7:document.write("Domingo");
        break;
    default:
        document.write("No es un día válido.");
        break;
}
//si nos salimos del rango de las opciones que limitamos, podemos usar el default.
