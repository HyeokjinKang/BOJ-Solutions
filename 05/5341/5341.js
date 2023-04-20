let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

input.forEach((e) => {
  if (e == 0) return;
  let output = 0;
  for (let i = 1; i <= e; i++) {
    output += i;
  }
  console.log(output);
});
