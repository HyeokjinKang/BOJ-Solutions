let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

input.forEach((e) => {
  if (e == 0) return;
  console.log((Math.round((1 + e + e ** 2 + e ** 3 + e ** 4) * 100) / 100).toFixed(2));
});
