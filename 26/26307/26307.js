let fs = require("fs");
let [h, m] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(60 * (h - 9) + m);
