let fs = require("fs");
let [a, b, c] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log((b / a) * 3 * c);
