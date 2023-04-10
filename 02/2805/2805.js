let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let [...tree] = input[1].split(" ").map(Number);
tree.sort((a, b) => a - b);

let [min, max, mid, ans] = [1, tree[n - 1], 0, 0];
while (1) {
  if (min > max) break;
  mid = min + Math.floor((max - min) / 2);
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += tree[i] - mid > 0 ? tree[i] - mid : 0;
  }
  if (count < m) {
    max = mid;
  } else {
    if (count >= m && ans < mid) ans = mid;
    if (min != mid) min = mid;
    else if (min == max) break;
    else min++;
  }
  if (min == mid && mid == max) break;
}

console.log(ans);
