let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let sum = 0;
input.forEach((e) => {
  sum += e;
});

let min = Math.floor(sum / 60);
console.log(min);
console.log(sum - min * 60);
