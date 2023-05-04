let fs = require("fs");
let [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
console.log(b * 2 - a);
