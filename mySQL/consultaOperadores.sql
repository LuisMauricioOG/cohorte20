/* listas */
/* in */
SELECT * FROM productos;
SELECT * FROM productos 
WHERE precio
in (5, 6, 7, 8, 9, 10);
/* Por fechas */
SELECT * FROM productos
WHERE date(fecha_alta)
between '2015-01-01' and '2016-07-24';

/*Operadores aritmeticos*/
SELECT * FROM productos
WHERE precio > 5+5; 

/* Para promediar - avg() */
SELECT nombre, avg(precio) as promedio_precios FROM productos 
WHERE idCategoria = 1
group by nombre; 
