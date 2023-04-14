let fs = require("fs");
let [p, number, ...problem] = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n, m] = p.split(" ").map(Number);
number = number.split(" ").map(Number);
let pre = [];
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum += number[i];
  pre.push(sum);
}

let rst = "";
for (let i = 0; i < m; i++) {
  let [start, fin] = problem[i].split(" ").map((n) => Number(n) - 1);
  let result = pre[fin] - (start > 0 ? pre[start - 1] : 0);
  rst += `${result}\n`;
}

console.log(rst);
