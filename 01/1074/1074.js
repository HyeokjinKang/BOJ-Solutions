let fs = require("fs");
let [n, r, c] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

const trace = (n, r, c) => {
  if (n == 0) return 0;
  let [h, i] = [Math.floor(r / 2 ** (n - 1)), Math.floor(c / 2 ** (n - 1))];
  let j = 4 ** (n - 1);
  let k = j * (2 * h + i);
  let [l, m] = [2 ** (h * (n - 1)), 2 ** (i * (n - 1))];
  return k + trace(n - 1, l == 1 ? r : r - l, m == 1 ? c : c - m);
};

console.log(trace(n, r, c));
