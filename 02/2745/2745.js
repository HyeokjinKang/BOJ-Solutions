let fs = require("fs");
let [input, B] = fs.readFileSync("/dev/stdin").toString().split(" ");
B = Number(B);

let sum = 0;
for (let i = 0; i < input.length; i++) {
  let char = 0;
  if (isNaN(Number(input[i]))) {
    char = input.charCodeAt(i) - 55;
  } else {
    char = Number(input[i]);
  }
  sum += char * Math.pow(B, input.length - i - 1);
}

console.log(sum);
