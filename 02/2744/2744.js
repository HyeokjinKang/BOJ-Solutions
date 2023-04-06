let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("");

for (let i = 0; i < input.length - 1; i++) {
  const char = input[i].charCodeAt(0);
  if (char >= 97) {
    input[i] = String.fromCharCode(char - 32);
  } else {
    input[i] = String.fromCharCode(char + 32);
  }
}

console.log(input.join(""));
