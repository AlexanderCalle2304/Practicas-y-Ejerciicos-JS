`use strict`;

function multiplicacion(multiplicando, multiplicador) {
  let sumatotal = 0;
  
  for (let total = 0; multiplicador > total; total++) {
    sumatotal = suma + multiplicando;
  }
  return sumatotal;
}
let multiplicando = parseInt(prompt("Ingresa el primer numero."));
let multiplicador = parseInt(prompt("Ingresa el segundo numero"));
let resultado = multiplicacion(multiplicando, multiplicador);
alert(`Reusltado ${resultado}`);
