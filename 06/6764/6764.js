let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let direction = input[1] - input[0] > 0 ? 1 : input[1] - input[0] == 0 ? 0 : -1;

for (let i = 2; i < input.length; i++) {
  let now = input[i] - input[i - 1] > 0 ? 1 : input[i] - input[i - 1] == 0 ? 0 : -1;
  if (now != direction) {
    console.log("No Fish");
    return;
  }
}

console.log(direction == 1 ? "Fish Rising" : direction == 0 ? "Fish At Constant Depth" : "Fish Diving");
