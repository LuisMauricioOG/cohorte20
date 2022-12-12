/*   OPERADORES   */
SELECT * FROM productos;
SELECT * FROM productos WHERE idCategoria = 1 and precio = 10;
SELECT * FROM productos WHERE idCategoria = 1 or existencia > 10;
/* not !=, diferente a <> */
SELECT * FROM productos WHERE idCategoria != 1;
/* null y not null */
SELECT * FROM productos WHERE precio is null;

/* between ... and ..., not between... and ... */
SELECT * FROM productos WHERE precio between 5 and 20;



