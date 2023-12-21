`use strict`

let numbers = [5, 3, 8, 1, 6];
let suma =0;

for (let i = 0; i < numbers.length; i++) {
  if(numbers[i]> 5){
  suma += numbers[i];
  }
}
console.log(suma);
