let fs = require("fs");
let [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

console.log("Gnomes:");
for (let i = 0; i < n; i++) {
  input[i] = input[i].split(" ").map(Number);
  let prev = input[i][0];
  let direction = 0;
  let result = 1;
  for (let j = 1; j < input[i].length; j++) {
    if (j == 1) direction = prev - input[i][j] > 0 ? -1 : 1;
    if (direction == 1 ? prev <= input[i][j] : prev >= input[i][j]) prev = input[i][j];
    else {
      result = 0;
      break;
    }
  }
  console.log(result ? "Ordered" : "Unordered");
}
