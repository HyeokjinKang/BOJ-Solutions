let fs = require("fs");
let [a, b] = fs.readFileSync("/dev/stdin").toString().split("\n").map(BigInt);

console.log(`${a + b}\n${a - b}\n${a * b}`);
