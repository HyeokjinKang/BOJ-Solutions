let fs = require("fs");
let [input, B] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

let sum = "";

while (input != 0) {
  let cur = input % B;
  if (cur >= 10) {
    sum += String.fromCharCode(cur + 55);
  } else {
    sum += `${cur}`;
  }
  input = Math.floor(input / B);
}

console.log(sum.split("").reverse().join(""));
