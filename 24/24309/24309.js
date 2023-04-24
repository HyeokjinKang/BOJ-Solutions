let fs = require("fs");
let [a, b, c] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(BigInt);

console.log(((b - c) / a).toString());
