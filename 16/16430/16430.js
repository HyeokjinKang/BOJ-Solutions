let fs = require("fs");
let [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(b - a, b);
