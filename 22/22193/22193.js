let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").splice(1).map(BigInt);

console.log((input[0] * input[1]).toString());
