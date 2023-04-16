let fs = require("fs");
let [a, b] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
let score = 0;

for (let i = 9; i >= 0; i--) {
  let pow = Math.pow(2, i);
  let aCalc = a - pow;
  let bCalc = b - pow;
  if (aCalc >= 0 && bCalc < 0) {
    a = aCalc;
    score += pow;
  } else if (bCalc >= 0 && aCalc < 0) {
    b = bCalc;
    score += pow;
  } else if (aCalc >= 0 && bCalc >= 0) {
    a = aCalc;
    b = bCalc;
  }
}

console.log(score);
