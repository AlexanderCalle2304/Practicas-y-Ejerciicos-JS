`use strict`

let students =['Caballero', 'Prado'];

students.splice(1, 0, 'Peralta');
students.push('Samaniego');
students.splice(1, 0, 'Gutierrez');
students.splice(1, 0, 'Criollo');
students.splice(3, 0, 'Luzuriaga');
students.unshift('Aguilera');
students.push('Vidal');
students.splice(2, 0, 'Calle');
students.splice(6, 0, 'Paredes');
students.splice(6, 0, 'Muñoz');

console.log(students);
