//Viendo sincronía y asincronía
/* Primero saldrá First, Third porque son asincrónicos.
Luego, Second porque es sincrónico 
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();
*/

const nombre = () => {
    const nombres = ['Pepe', 'Maria', 'Pancho'];
   /*  setTimeout(() => {
        return nombres;
    }, 3000); */

    return new Promise((resolve, reject) => {                                   //resolve nos permite ver el proceso exitoso
        setTimeout(() => {              //reject para proceso no exitoso
            if(false){
            resolve(nombres);
            }else{
                reject("No hay nombres");
            }
        }, 3000) 
    });
}
/* Con el setTimeout(() => {
        return nombres;
    }, 3000); nos dirá UNDEFINED porque se tarda, aunque sea solamente por milisegundos */

//console.log(nombre());
//console.log(nombre()[0]);

//Azúcar sintáctica = código que se creó para facilitar el trabajo de los programadores

//async -- await

//FORMA 1: async function obtenerNombre(){}

const obtenerNombre = async() => {
    let nombres = await nombre();
    console.log(nombres);
}

obtenerNombre();

/* const obtenerNombre = async() => {
    try {
    let nombres = await nombre();
    console.log(nombres);
    }catch (error) {
    console.log(error)
        }
}

obtenerNombre(); */


//Usando promesas en cadena
nombre().then(nombres => console.log(nombres)).catch(error => console.warn(error));

//console.error manda un error & console.warn advertencia en color amarillo
// .forEach((elemento, indice, arreglo) => {})

console.log(nombre());
/* Servidor: 
const url = "https://pokeapi.co/api/v2/pokemon/16";

const pokedex = () => {
    fetch(url)
        .then(datos => datos.json())
        .then(pokemon => console.log(pokemon));
};
//.json nos ayuda a transformar los datos a elementos que se puedan leer
pokedex();

//.catch me permite percibir el error. Es buena práctica utilizarlo */

//pokemon.sprites.other['official-artwork'].front_default

const cartaPokemon = document.getElementById('pokemon');
const nombrePokemon = document.getElementById('nombre');
const imagen = document.getElementById('img');
const form = document.getElementById('form');

//const url = 'https://pokeapi.co/api/v2/pokemon/125';

const pokedex = async (numero) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${numero}`;
    
    try {

        const respuesta = await fetch(url);
        const pokemon = await respuesta.json();
        
        console.log(pokemon.name);

        const datos = {
            nombre: pokemon.name,
            imagen: pokemon.sprites.other['official-artwork'].front_default,
        }

        console.log(datos.imagen);

        nombrePokemon.textContent = datos.nombre;
        imagen.innerHTML = `
            <img src="${datos.imagen}" alt="imagen de ${datos.nombre}" width="250"/>
        `;
        
        
    } catch (error) {


        
    }
}
//pokedex();

form.addEventListener('submit', (evento) => {
    //codigo
    evento.preventDefault(); //para que no se pueda actualizar
    //para guardar el valor del id:
    const valor = document.getElementById('idP').value;
    
    console.log(valor);

    
    pokedex(valor);
    //console.log(evento.target);

    //Para borrar el número:
    form.reset();
});