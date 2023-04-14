let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString());
let mem = new Array(1000);

let func = (n) => {
  if (n == 1) return 1;
  else if (n == 2) return 2;
  else {
    let result = ((mem[n - 1] != undefined ? mem[n - 1] : func(n - 1)) + (mem[n - 2] != undefined ? mem[n - 2] : func(n - 2))) % 10007;
    mem[n] = result;
    return result;
  }
};

console.log(func(input));
