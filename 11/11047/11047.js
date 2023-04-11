let fs = require("fs");
let coin = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n, k] = coin[0].split(" ").map(Number);

let count = 0;
for (let i = coin.length - 2; i >= 1; i--) {
  coin[i] = Number(coin[i]);
  while (k >= coin[i]) {
    k -= coin[i];
    count++;
  }
}

console.log(count);
