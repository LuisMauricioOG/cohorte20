//propiedades de arreglos
//lenght nos da la cantidad de elementos dentro del arreglo
const frutas = ['🍐', 'Manzana', 'Guayaba'];
console.log(frutas);
//si escribimos el PUNTO (.) despues del nombre, nos abre las opciones que tenemos
console.log(frutas.length);

// Metodos - accions
frutas.push('Platano');
console.log(frutas);

/*
Algunos métodos Para agregar/remover elementos:

push(...items) – agrega ítems al final,
pop() – extrae un ítem del final,
shift() – extrae un ítem del inicio,
unshift(...items) – agrega ítems al inicio.
splice(pos, deleteCount, ...items) – desde el índice pos borra deleteCount elementos e inserta items.
slice(start, end) – crea un nuevo array y copia elementos desde la posición start hasta end (no incluido) en el nuevo array.
concat(...items) – devuelve un nuevo array: copia todos los elementos del array actual y le agrega items. Si alguno de los items es un array, se toman sus elementos.
*/