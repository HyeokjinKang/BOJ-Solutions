let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("");
let output = "";
input.forEach((e) => {
  output = e + output;
});
console.log(output);
