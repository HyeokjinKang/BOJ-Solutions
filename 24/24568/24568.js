let fs = require("fs");
let [r, s] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(BigInt);

console.log((r * 8n + s * 3n - 28n).toString());
