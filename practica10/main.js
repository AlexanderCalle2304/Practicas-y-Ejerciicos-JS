const precioPorKm = 0.25;
const arranque = 0.55;
const distancia = parseInt(prompt("Ingrese la distancia recorrida"));

let ValorTotal = arranque + precioPorKm * distancia ;

alert(`EL precio a pagar es: $${ValorTotal}`);