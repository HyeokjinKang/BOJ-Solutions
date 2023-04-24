let fs = require("fs");
let bottle = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let sum = 0;
bottle.forEach((e) => (sum += e));

console.log(5 * sum);
