//forma 1

//1.- Llamando al contenedor

const imagen = document.getElementsByClassName("contenedor")[0]; //el elemento que se llama va por fuera [0]

//2.- Crear el elemento

const nuevaImg = document.createElement('img');

//Atributos básicos para crear una imagen 
//3.- Modificar atributos
nuevaImg.src = "https://placeimg.com/640/480/nature"; 

nuevaImg.alt = "Imagen de naturaleza";

//4.- Insertar elemento nuevo; ya tenemos dónde la insertaremos "div, class="contenedor""
imagen.appendChild(nuevaImg);

/* Otra forma para agregar elementos:
 */

//1.- Llamar al elemento padre
const imagen2 = document.getElementById('img');
//Es más rápido este selector porque no tiene que guardar los elementos en una lista

//2.- 
imagen2.innerHTML =  ` 
    <img src="https://placeimg.com/640/480/nature" alt="Imagen 2 de animales"/>
`;
//src siempre va con comillas dobles

//Crear una lista a partir de los elementos guardadados en un arreglo

//insertarla en el documento para que se pueda mostrar

const nombres = ["Pedro", "Juan", "Sonia", "Miguel"];

/* lista = document.createElement('ul'); */
//Hasta aquí me quedé...
const lista1 = document.getElementById("lista1");
//Opción 1:
 nombres.forEach((el) => {
    const li = document.createElement('li');
    li.textContent = el;
    lista1.appendChild(li);
}); 
//Opción 2:
const frutas = ["Manzana", "Limón", "Pera", "Mango"];

const lista2 = document.getElementById('lista2');

frutas.forEach((el)=>{
    lista2.innerHTML += `
        <li>${el}</li> `;
});

//Por Luis

//Por Oscar