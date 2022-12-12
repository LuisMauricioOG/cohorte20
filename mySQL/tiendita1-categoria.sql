SELECT * FROM categoria;
SELECT * FROM productos;
/*Para mostrar solo ciertos datos */
SELECT nombre, precio, existencia FROM productos WHERE idCategoria >= 2;
/*Para mostrar maximos y minimos, max(), min() */
SELECT min(existencia) as existencia_minima, max(existencia) as existencia_maxima FROM productos;
/* limit (6,3: despues del parametro 6, muestre 3 registros) */
SELECT * from productos limit 6, 3;
/*ORDER BY, ASC, DESC*/
SELECT * FROM productos order by existencia asc;