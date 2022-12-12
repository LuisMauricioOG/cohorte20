/* Join */ 
select * from productos, categoria
where idCategoria = id;

select * from productos as p INNER JOIN categoria as c
where p.idCategoria = c.id;
/* inner join */
select p.nombre, p.existencia, c.nombre from productos as p INNER JOIN categoria as c
ON p.idCategoria = c.id;

/* Left join = devuelve todos los elementos de la primera tabla y los que coinciden con la segunda
 */
select p.nombre, p.existencia, t.nombre from productos as p LEFT JOIN temporal as t
ON p.idCategoria = t.id;
/* Right join */
select p.nombre, p.existencia, t.nombre from productos as p RIGHT JOIN temporal as t
ON p.idCategoria = t.id;

SELECT * FROM proveedores;

select * from categoria union
select * from proveedores;

/* Multi consulta */
SELECT p.nombre, p.precio, p.existencia FROM productos as p;
C
SELECT p.nombre, p.precio, p.existencia FROM productos AS p INNER JOIN categoria AS c ON p.idCategoria = c.id;

SELECT p.nombre as nom_producto, p.precio, p.existencia FROM productos as p;

SELECT p.nombre as nom_producto, c.nombre as nom_categoria
from productos as p
right join categoria as c
on p.idCategoria = c.id
left join detalle_producto_proveedor as det
on p.idProducto = det.idProducto;

SELECT p.nombre as nom_producto, c.nombre as nom_categoria
from productos as p
right join categoria as c
on p.idCategoria = c.id
left join detalle_producto_proveedor as det
on p.idProducto = det.idProducto
inner join proveedores as pv
on det.idProveedor = pv.id
where p.existencia > 20;