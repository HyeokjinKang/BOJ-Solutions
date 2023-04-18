let fs = require("fs");
const { join } = require("path");
let [n, str] = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < n; i++) {
  let same = 0;
  let diff = 0;
  for (let j = 0; j <= i; j++) {
    if (str[j] == str[n - i - 1 + j]) {
      same++;
    } else {
      diff++;
    }
  }
  if (diff == 1) return console.log("YES");
}

console.log("NO");
