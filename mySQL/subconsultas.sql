/* Subconsultas */
SELECT * FROM productos 
where idCategoria = 2 and precio > 10 and existencia BETWEEN 5 AND 20 AND fecha_alta is not null;

SELECT * FROM productos 
where idCategoria
in (SELECT id FROM categoria WHERE id > 2);
