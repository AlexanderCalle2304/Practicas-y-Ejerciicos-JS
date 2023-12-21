`use strict`

const age = parseInt(prompt("Ingrese su edad"));

if (age <= 6 || age >=65) {
    alert("Usted es apto para la vacuna");
}else{
    alert("No es apto para la vacuna");
}