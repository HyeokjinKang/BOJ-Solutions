const rl = require("readline").createInterface(process.stdin, process.stdout);

let isFirst = true;
let input = [];

rl.on("line", line => {
  if(isFirst) {
    isFirst = false;
    return;
  }
  if(!input[0]) {
    input[0] = Number(line);
    return;
  }
  input[1] = Number(line);
  let apartment = [];
  for(let i = 0; i <= input[0]; i++) {
    apartment[i] = [];
    for(let j = 0; j < input[1]; j++) {
      if(!i) {
        apartment[i][j] = j + 1;
      } else {
        let sum = 0;
        for(let k = 0; k <= j; k++) {
          sum += apartment[i - 1][k];
        }
        apartment[i][j] = sum;
      }
    }
  }
  console.log(apartment[input[0]][input[1] - 1]);
  input = [];
});