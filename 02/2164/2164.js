let fs = require("fs");

let n = Number(fs.readFileSync("/dev/stdin").toString());
let d = n;
let m = 1;

while (d > 1) {
  d /= 2;
  m *= 2;
}
process.stdout.write((2 * (n - m / 2)).toString());
