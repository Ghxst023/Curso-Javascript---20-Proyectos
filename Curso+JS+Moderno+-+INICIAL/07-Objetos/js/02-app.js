//! Como acceder a los valores de un objeto...

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

console.log(producto);
console.log(producto.nombre); //! Sintaxis de punto
console.log(producto.precio);
console.log(producto.disponible);
console.log(producto['nombre']); //! Sintaxis de corchete