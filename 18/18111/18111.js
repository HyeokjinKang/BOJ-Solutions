let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n, m, b] = input[0].split(" ").map(Number);
let count = n * m;
let height = [];
let time = 0;

for (let i = 1; i <= n; i++) {
  let arr = input[i].split(" ").map(Number);
  height.push(...arr);
}

height.sort((a, b) => a - b);

while (height[0] != height[count - 1]) {
  let low = 0,
    high = 0,
    find = 0;
  while (height[find] == height[0]) {
    low++;
    find++;
  }
  find = 1;
  while (height[count - find] == height[count - 1]) {
    high++;
    find++;
  }
  if (low > b || high * 2 < low) {
    for (let i = 1; i <= high; i++) {
      height[count - i]--;
    }
    b += high;
    time += high * 2;
  } else {
    for (let i = 0; i < low; i++) {
      height[i]++;
    }
    b -= low;
    time += low;
  }
}

console.log(time, height[0]);
