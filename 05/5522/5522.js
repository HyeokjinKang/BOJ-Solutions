let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let output = 0;
input.forEach((e) => {
  output += e;
});
console.log(output);
