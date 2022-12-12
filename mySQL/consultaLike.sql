/* Buscando datos dentro de registro, o dentro del valor de un campo = like */
SELECT * FROM productos
WHERE nombre LIKE 'limonada';
/* Busqueda con referencia, usando %. Ya sea al final, al principio, o que contenga todas esas palabras (%limon%) */
SELECT * FROM productos
WHERE nombre LIKE '%limon';