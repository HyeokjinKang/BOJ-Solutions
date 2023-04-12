let fs = require("fs");
let [n, time] = fs.readFileSync("/dev/stdin").toString().split("\n");
n = Number(n);
time = time.split(" ").map(Number);
time.sort((a, b) => b - a);

let result = 0;
for (let i = 0; i < n; i++) {
  result += time[i] * (i + 1);
}

console.log(result);
