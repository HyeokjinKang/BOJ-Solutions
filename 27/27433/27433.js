let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let result = 1;
for (let i = 2; i <= input; i++) {
  result *= i;
}

console.log(result);
