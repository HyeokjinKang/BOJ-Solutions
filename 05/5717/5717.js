let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach((e) => {
  if (e == "0 0") return;
  let [b, g] = e.split(" ").map(Number);
  console.log(b + g);
});
