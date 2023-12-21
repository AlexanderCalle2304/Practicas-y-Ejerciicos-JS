`use strict`;

let vehicle = {
  brand: "Chevrolet",
  model: "aveo",
  color: "gray",
  licenseplate: "AAA-4112",
  year: 2016,
  isEnable: true,
};

function validartaxi(vehicle) {
  vehicle.year = 2023 - vehicle.year;
  if (vehicle.year <= 10) {
    alert("El vehiculo es apto");
  } else {
    alert("El vehiculo no es apto");
  }
}

validartaxi(vehicle);
