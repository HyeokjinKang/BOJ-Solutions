let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString());

for (let i = input; i >= 1; i--) {
  console.log("*".repeat(i));
}
