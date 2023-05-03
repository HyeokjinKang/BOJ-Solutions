let fs = require("fs");
let [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach((e) => {
  console.log(e.toLowerCase());
});
