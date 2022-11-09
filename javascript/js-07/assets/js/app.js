const titulo = document.getElementById("titulo");
const parrafos = document.getElementsByClassName("parrafo");

titulo.textContent = "Hola"
parrafos[0].innerHTML = "Soy un párrafo"

console.log(titulo.textContent);
console.log(parrafos[1].textContent);

//para modificar el estilo con propiedades de CSS
/* parrafos[1].style.color = "red";
parrafos[1].style.backgroundColor = "pink";
 */
 
/*Para modificar algo:
console.log(parrafos[1].classList.contains("coloresFeos"));*/

parrafos[1].classList.add("coloresFeos"); 

//Crear elementos html
const enlace = document.createElement("a");
enlace.href = "https://google.com";
enlace.textContent = "Ir a Google";

document.body.appendChild(enlace); //se agrega al final

console.log(document.body);