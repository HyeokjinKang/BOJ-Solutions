let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n, m] = input[0].split(" ").map(Number);

let result = "";
let dict = new Map();
let reverseDict = new Map();
for (let i = 1; i <= n; i++) {
  dict.set(i, input[i]);
  reverseDict.set(input[i], i);
}
for (let i = n + 1; i <= n + m; i++) {
  if (isNaN(Number(input[i]))) {
    result += `${reverseDict.get(input[i])}\n`;
  } else {
    result += `${dict.get(Number(input[i]))}\n`;
  }
}

console.log(result);
