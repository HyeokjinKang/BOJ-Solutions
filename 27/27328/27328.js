let fs = require("fs");
let [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

console.log(a == b ? 0 : a > b ? 1 : -1);
