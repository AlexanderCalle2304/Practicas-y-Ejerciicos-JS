`use strict`;

function Productos(codigo, precio, descripcion) {
  this.codigo = codigo;
  this.precio = precio;
  this.descripcion = descripcion;
}

let leche = new Productos(123, 1.1, "Leche Semidescremada");
alert(
  `Producto: ${leche.descripcion}, precio: ${leche.precio}, codigo: ${leche.codigo}`
);
