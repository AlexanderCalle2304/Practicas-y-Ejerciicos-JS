`use strict`;

let nombre = "Juan";
let apodo = nombre;

//alert(nombre);
//alert(apodo);

let person = {
  firstName: "Juan",
};

let otherPerson = person;
//alert(person.firstName);
//alert(otherPerson.firstName);

//otherPerson.firstName = "Jhon";
//alert(person.firstName);

function Vehiculo(placa) {
  this.placa = placa;
}
let vehiculo = new Vehiculo("AAA-4112");
alert(vehiculo.placa);
let vehiculodos = new Vehiculo("PQY-321");
