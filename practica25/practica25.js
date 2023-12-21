`use strict`;

let persona ={
  nombre: "Alexander",
  edad: 19,

  mostarEdad(){
    alert(this.edad);
  },
  actualizarEdad(EdadActualizada){
    this.edad = EdadActualizada;
    alert(EdadActualizada);
  },
};

persona.mostarEdad();
persona.actualizarEdad(20);
