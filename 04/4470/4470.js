let fs = require("fs");
let [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < n; i++) {
  console.log(`${i + 1}. ${input[i]}`);
}
