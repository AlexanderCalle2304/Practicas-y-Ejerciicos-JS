let persona = {
  nombre: "Damian",
  edad: 18,
  showage: function () {
    alert(this.edad);
  },
  updateEdad: function (nuevoValor) {
    this.edad = nuevoValor;
  },
};

persona.showage();
persona.updateEdad(20);
persona.showage();
