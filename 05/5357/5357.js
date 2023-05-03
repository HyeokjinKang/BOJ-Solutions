let fs = require("fs");
let [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < n; i++) {
  let prev = input[i][0];
  let result = input[i][0];
  for (let j = 1; j < input[i].length; j++) {
    if (prev != input[i][j]) {
      result += input[i][j];
      prev = input[i][j];
    }
  }
  console.log(result);
}
