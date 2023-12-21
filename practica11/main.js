`use strict`

const precioPorKm = 0.25;
const arranque = 0.55;
const distancia = parseInt(prompt("Ingrese la distancia recorrida"));

let valorTotal = arranque + precioPorKm * distancia ;

if (valorTotal <= 1.50) {
    valorTotal = 1.50;
    alert(`El precio a pagar es $1.50`);
}
    alert(`EL precio a pagar es: $${valorTotal}`);

