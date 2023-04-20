let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach((e) => {
  e = e.split(" ").map(Number);
  console.log(Math.floor(e[1] / (e[0] + 1)));
});
