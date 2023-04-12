let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString());
let mem = new Array(1000000);

let func = (n) => {
  if (n == 1) {
    mem[1] = 1;
    return 1;
  }
  let a, b, c;
  if (n % 3 == 0) {
    a = mem[n / 3] != undefined ? mem[n / 3] : func(n / 3);
    mem[n / 3] = a;
  }
  if (n % 2 == 0) {
    b = mem[n / 2] != undefined ? mem[n / 2] : func(n / 2);
    mem[n / 2] = b;
  }
  if (a == undefined || b == undefined) {
    c = mem[n - 1] != undefined ? mem[n - 1] : func(n - 1);
    mem[n - 1] = c;
  }
  let low = [a, b, c].sort((a, b) => a - b)[0] + 1;
  mem[n] = low;
  return low;
};

console.log(func(input) - 1);
