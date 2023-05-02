let fs = require("fs");
let [sum, dif] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let a = (sum + dif) / 2;
let b = sum - a;

if (a >= 0 && b >= 0 && a % 1 == 0) console.log(a >= b ? `${a} ${b}` : `${b} ${a}`);
else console.log(-1);
