let fs = require("fs");
let [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.sort((a, b) => {
  a = a.split(" ");
  b = b.split(" ");
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

let lastEnd = -1;
let count = 0;
for (let i = 0; i < input.length; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  if (lastEnd <= start) {
    count++;
    lastEnd = end;
  }
}

console.log(count);
