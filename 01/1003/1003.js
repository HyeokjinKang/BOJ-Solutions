let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

let a = 0,
  b = 0;
let memo = new Array(41);
let amem = new Array(41);
let bmem = new Array(41);

const fibonacci = (n) => {
  if (n == 0) {
    a++;
    memo[n] = 0;
    amem[n] = 1;
    bmem[n] = 0;
    return 0;
  } else if (n == 1) {
    b++;
    amem[n] = 0;
    bmem[n] = 1;
    memo[n] = 1;
    return 1;
  } else {
    let left, right;
    if (memo[n - 1] != undefined) {
      left = memo[n - 1];
      a += amem[n - 1];
      b += bmem[n - 1];
    } else {
      left = fibonacci(n - 1);
    }
    if (memo[n - 2] != undefined) {
      right = memo[n - 2];
      a += amem[n - 2];
      b += bmem[n - 2];
    } else {
      right = fibonacci(n - 2);
    }
    memo[n] = left + right;
    amem[n] = amem[n - 1] + amem[n - 2];
    bmem[n] = bmem[n - 1] + bmem[n - 2];
    return left + right;
  }
};

let result = "";
for (let i = 1; i <= input[0]; i++) {
  a = 0;
  b = 0;
  fibonacci(input[i]);
  result += `${a} ${b}\n`;
}

console.log(result);
