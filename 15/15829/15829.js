let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let hash = 0n;
for (let i = 0; i < input[1].length; i++) {
  hash += BigInt(input[1].charCodeAt(i) - 96) * 31n ** BigInt(i);
  hash %= 1234567891n;
}

console.log(Number(hash));
