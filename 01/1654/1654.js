let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [k, n] = input[0].split(" ").map(Number);
let [...line] = input.splice(1, input.length - 2).map(Number);
line.sort((a, b) => a - b);

let [min, max, mid, ans] = [1, line[k - 1], 0, 0];
while (1) {
  if (min > max) break;
  mid = min + Math.floor((max - min) / 2);
  let count = 0;
  for (let i = 0; i < k; i++) {
    count += Math.floor(line[i] / mid);
  }
  if (count < n) {
    max = mid;
  } else {
    if (count >= n && ans < mid) ans = mid;
    if (min != mid) min = mid;
    else if (min == max) break;
    else min++;
  }
  if (min == mid && mid == max) break;
}

console.log(ans);
