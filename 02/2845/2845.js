let fs = require("fs");
let [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
a = a.split(" ").map(Number);
b = b.split(" ").map(Number);
let count = a[0] * a[1];

let result = "";
for (let i = 0; i < b.length; i++) {
  result += `${b[i] - count} `;
}

console.log(result);
