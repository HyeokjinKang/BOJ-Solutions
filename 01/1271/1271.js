let fs = require("fs");
let [m, n] = fs.readFileSync("/dev/stdin").toString().split(" ").map(BigInt);

console.log((m / n).toString().split(".")[0]);
console.log((m % n).toString());
