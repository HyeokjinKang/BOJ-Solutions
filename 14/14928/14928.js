let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let result = 0;
for (let i = 0; i < input.length; i++) {
  result = (result * 10 + Number(input[i])) % 20000303;
}

console.log(result);
