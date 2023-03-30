//브루트포스하라고 만든 문제같은데 가감법으로 구현했습니다

const rl = require("readline").createInterface(process.stdin, process.stdout);

let a, b, c, d, e, f, x, y;

rl.on("line", (line) => {
  [a, b, c, d, e, f] = line.split(" ").map(Number);
  x = (c * e - f * b) / (a * e - d * b);
  y = (c - a * x) / b;
  console.log(x, y);
});
