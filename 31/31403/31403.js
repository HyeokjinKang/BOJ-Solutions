let fs = require("fs");
let [a, b, c] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(Number(a) + Number(b) - Number(c));
console.log(a + b - c);
