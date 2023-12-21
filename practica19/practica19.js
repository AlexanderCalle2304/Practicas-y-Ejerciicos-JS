`use struct`;

function mostarEdad(birthYear) {
  const currentyear = 2023;
  alert(`tu edad es ${currentyear - birthYear}`);
}
let birthYear = parseInt(prompt("Ingresar año de nacimiento"));
mostarEdad(birthYear);
