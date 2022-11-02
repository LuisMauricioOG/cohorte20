/* INSTRUCCIONES: 
pedir la hora por promt
evaluar la hora y responder
Buenos dias 6 - 11
Buenas tardes 12 - 18
Buenas noches 19 - 23
Dejame dormir 0 - 5
 */

let hora = Number(prompt("¡Hola! ¿Podrías darme la hora (formato 24h), por favor?"));
/*
if((hora >= 6) && (hora <= 11)){
    document.write("Buenos días")
}else if((hora >= 12) && (hora <= 18)){
    document.write("Buenas tardes");
}else if((hora >= 19) && (hora <= 23)){
    document.write("Buenas noches");
}  else{
    document.write("No molestar. Déjame dormir.")};
     Si lo dejo así tendré problemas, porque valores mayores a 23 los tomará en cuenta, lo cual no es válido... */
     if((hora >= 6) && (hora <= 11)){
        document.write("Buenos días")
    }else if((hora >= 12) && (hora <= 18)){
        document.write("Buenas tardes");
    }else if((hora >= 19) && (hora <= 23)){
        document.write("Buenas noches");
    } else if( (hora === 24) || (hora >= 0) && (hora <= 5)){
        document.write("No molestar. Déjame dormir.")
    } else{
            document.write("No es una hora válida. Intenta otra vez, por favor.")};