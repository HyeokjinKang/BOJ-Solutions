let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let index = 1;
for (let i = 1; i <= Number(input[0]); i++) {
  let count = {};
  for (let j = 1; j <= Number(input[index]); j++) {
    let name = input[index + j].split(" ")[1];
    if (count[name] != undefined) count[name]++;
    else count[name] = 2;
  }
  let counts = Object.values(count);
  let result = 1;
  for (let k = 0; k < counts.length; k++) {
    result *= counts[k];
  }
  console.log(result - 1);
  index += Number(input[index]) + 1;
}
