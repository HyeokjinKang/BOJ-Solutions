let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [ax, ay, az] = input[0].split(" ").map(Number);
let [cx, cy, cz] = input[1].split(" ").map(Number);

console.log(cx - az, cy / ay, cz - ax);
