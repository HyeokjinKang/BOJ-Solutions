let fs = require("fs");
let n = BigInt(fs.readFileSync("/dev/stdin").toString());

if (n <= 2) return console.log(n.toString());

let count = 2;
let i = 2n;

while (n > i) {
  i = i * 2n;
  count++;
}

console.log(count);
