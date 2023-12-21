`use strict`;
let persona = {
  nombre: "Alexander",
  apellido: " Calle",
  edad: 19,
  "estado civil": "soltero",
  hobbie: "escuchar musica",
  ocupacion: "Estudiante",
};

alert(
  `Me llamo ${persona.nombre + persona.apellido} tengo ${persona.edad} soy ${
    persona["estado civil"]
  }, me gusta ${persona.hobbie} y soy ${persona.ocupacion}`
);
