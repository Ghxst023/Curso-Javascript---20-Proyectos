//! Concatenar strings
const producto = "Monitor 20 pulgadas"
const precio = "30 USD"

console.log(producto.concat(precio))
console.log(producto.concat('En descuento'))
console.log(producto + " con un precio de " + precio)
console.log("El producto " + producto + " tiene un precio de " + precio)
console.log("El producto " , producto , " tiene un precio de " , precio)

//! Template literals ( la mejor forma )
console.log(`${producto} con un precio de ${precio}`);