//! Funciones en objetos y acceder a sus valores

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de : ${this.precio}`);
    }
}

producto.mostrarInfo();