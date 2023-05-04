let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let scores = [];
input.forEach((e) => {
  let score = e.split(" ").map(Number);
  let sum = 0;
  score.forEach((n) => {
    sum += n;
  });
  scores.push(sum);
});

scores.sort((a, b) => b - a);
console.log(scores[0]);
