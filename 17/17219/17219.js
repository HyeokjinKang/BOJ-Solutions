let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let password = new Map();

for (let i = 1; i <= n; i++) {
  input[i] = input[i].split(" ");
  password.set(input[i][0], input[i][1]);
}

let result = "";
for (let i = n + 1; i <= n + m; i++) {
  result += `${password.get(input[i])}\n`;
}

console.log(result);
