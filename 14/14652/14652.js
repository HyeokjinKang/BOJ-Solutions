let fs = require("fs");
let [n, m, k] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(Math.floor(k / m), (k % m) % n);
