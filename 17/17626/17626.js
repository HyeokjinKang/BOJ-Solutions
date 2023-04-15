let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString());
let mem = new Array(50000);

let func = (n, c) => {
  if (n <= 3) return n;
  let sqrt = Math.sqrt(n);
  if (sqrt % 1 == 0) {
    mem[n] = 1;
    return 1;
  }
  let min = 5;
  for (let i = parseInt(sqrt); i >= 1; i--) {
    let t = n - Math.pow(i, 2);
    if (mem[t] != undefined) {
      if (mem[t] < min) min = mem[t];
    } else {
      if (t <= 3) {
        if (mem[t] < min) min = mem[t];
      } else {
        let calc = func(t, c + 1);
        if (calc < min && calc != undefined) min = calc;
      }
    }
  }
  if (min != 5) {
    mem[n] = min + 1;
    return min + 1;
  } else {
    return undefined;
  }
};

console.log(func(input, 1));
