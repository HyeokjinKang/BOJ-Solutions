let fs = require("fs");
let [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach((e) => {
  e = e.split(" ").map(Number);
  console.log(e[0] + e[1]);
});
