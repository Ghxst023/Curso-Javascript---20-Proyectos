//! El operador ORO para que se cumpla al menos una condiciones

const efectivo = 300;
const credito = 1000;
const disponible = efectivo + credito;
const totalAPagar = 600;

if(efectivo > totalAPagar || credito > totalAPagar || disponible > totalAPagar){
    console.log('Si podemos pagar');
} else{
    console.log('Fondos insuficientes');
}