let fs = require("fs");
let [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(BigInt);

console.log(`${(a + b) / 2n}\n${(a - b) / 2n}`);
