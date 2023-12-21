`use strict`;

let contador = 0;
let vueltas = 6;
/*
while (contador < vueltas) {
  contador += 1;
  alert(`vueltas ${contador}`);
}
*/
/*-
for (let i = 0; i < vueltas; i++) {
  alert(`vueltas ${i}`);
}
*/

do {
  contador += 1;
  alert(`vuelta ${contador}`);
} while (contador < vueltas);
