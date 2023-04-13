let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);
let mem = new Array(11);

let func = (n) => {
  if (n == 1) return 1;
  else if (n == 2) return 2;
  else if (n == 3) return 4;
  let count = 0;
  for (let i = 3; i >= 1; i--) {
    if (mem[n - i] != undefined) count += mem[n - i];
    else count += func(n - i);
  }
  mem[n] = count;
  return count;
};

let result = "";
for (let i = 1; i <= input[0]; i++) {
  result += `${func(input[i])}\n`;
}

console.log(result);
