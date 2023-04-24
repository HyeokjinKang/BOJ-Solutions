let fs = require("fs");
let [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let result = 0;
input.forEach((e) => {
  result += e;
});

console.log(result);
