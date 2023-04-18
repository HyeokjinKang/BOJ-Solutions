let fs = require("fs");
let [d1, d2, x] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

let [c1, c2] = [d1 > d2 ? x : 100 - x, d1 > d2 ? 100 - x : x];
let [b1, b2] = [c1 / d1, c2 / d2];

console.log(100 / (b1 + b2));
