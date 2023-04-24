let fs = require("fs");
let [n1, n2, n12] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(Math.floor(((n1 + 1) * (n2 + 1)) / (n12 + 1) - 1));
