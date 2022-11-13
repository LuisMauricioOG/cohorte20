console.log("Hola desde node.js")
/* node js sirve como un intérprete para que podamos usar Javascript fuera del navegador.

Una vez instalado nos pasó un comando para instalar desde la terminal "parrotsay" en la que escribías un comando y aparecía un pájaro con ese mismo anuncio, pero después borramos esa instalación solo era para probar npm:

    const parrotSay = require('parrotsay-api')
    
    parrotSay('yaaay')
        .then(console.log)
        .catch(console.error)

En el documento package.json se coloca 
"dependencies": {
   "parrotsay-api": "^0.1.1" 
}                                       después de license.


También desde la consola escribimos npm init y se generó una carpeta node_modules pero para evitar que todo eso se cargará a github, elaboramos un archivo .gitignore dentro de la carpeta de js-09 y escribimos: node_modules dentro de git ignore para que no lo tomara en cuenta al subirse toda la carpeta js-09 a GitHub */

