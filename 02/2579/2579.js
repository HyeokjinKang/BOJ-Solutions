let fs = require("fs");
let [n, ...stair] = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);
let mem = [new Array(300), new Array(300)];

let func = (n, c) => {
  if (n == 0) return stair[0];
  if (n == 1 && c == 1) return stair[1];
  let a, b;
  if (c == 0) a = mem[1][n - 1] != undefined ? mem[1][n - 1] : func(n - 1, 1);
  if (n >= 2) b = mem[0][n - 2] != undefined ? mem[0][n - 2] : func(n - 2, 0);
  let max = [a, b].sort((a, b) => b - a)[0] + stair[n];
  mem[c][n] = max;
  return max;
};

console.log(func(n - 1, 0));
