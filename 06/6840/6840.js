let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
input.sort((a, b) => a - b);
console.log(input[Math.floor(input.length / 2)]);
