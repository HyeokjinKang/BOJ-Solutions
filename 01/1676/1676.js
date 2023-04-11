let fs = require("fs");
let n = Number(fs.readFileSync("/dev/stdin").toString());

let count = 0;
n = n - (n % 5);
while (n >= 5) {
  let copy = n;
  while (copy % 5 == 0) {
    copy /= 5;
    count++;
  }
  n -= 5;
}

console.log(count);
