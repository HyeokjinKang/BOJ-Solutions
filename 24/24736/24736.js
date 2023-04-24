let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = "";
input.forEach((e) => {
  e = e.split(" ").map(Number);
  result += 6 * e[0] + 3 * e[1] + 2 * e[2] + 1 * e[3] + 2 * e[4] + " ";
});

console.log(result);
