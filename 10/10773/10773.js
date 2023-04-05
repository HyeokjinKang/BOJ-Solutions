let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);
let array = [];

for (let i = 1; i < input.length - 1; i++) {
  if (input[i] == 0) array.pop();
  else array.push(input[i]);
}

console.log(array.reduce((a, b) => a + b, 0));
