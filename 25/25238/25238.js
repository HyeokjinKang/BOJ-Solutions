let fs = require("fs");
let [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log((a / 100) * (100 - b) < 100 ? 1 : 0);
