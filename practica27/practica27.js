`use strict`;

let message = "ecuatoriano";
let cont = 0;

for (let index = 0; index < message.length; index++) {
  if (message[index] == "a") {
    cont++;
  }
  alert(cont);
  //alert(message[index]);
}
