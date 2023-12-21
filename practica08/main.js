let primerMomento;
let segundoMomento;
let tercerMomento;

primerMomento = Number ( prompt("Ingresa nota de 1er momento"));
segundoMomento = Number ( prompt("Ingresa nota de 2do momento"));
tercerMomento = Number ( prompt("Ingresa nota de 3er momento"));

let promedio;

promedio= primerMomento+segundoMomento+tercerMomento;
promedio = promedio /3;

if (promedio >= 70) {
    alert(promedio +" Aprobado")
}else{
    alert(promedio + " Reprobado")
}
