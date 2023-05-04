let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let sum = 91;
sum += input[0] + input[2] + input[1] * 3;

console.log(`The 1-3-sum is ${sum}`);
