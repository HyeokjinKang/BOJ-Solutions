let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach((e) => {
  if (e == "0 0") return;
  e = e.split(" ").map(Number);
  console.log(e[0] > e[1] ? "Yes" : "No");
});
