//Counting Sort

const rl = require("readline").createInterface(process.stdin, process.stdout);
let m = 1;
let cnt = new Array(10001);

rl.on("line", (n) => {
  if (m) return m--;
  n = Number(n);
  cnt[n] == undefined ? (cnt[n] = 1) : cnt[n]++;
}).on("close", () => {
  for (let i = 1; i < cnt.length; i++) {
    for (let j = 0; j < cnt[i]; j++) {
      console.log(i);
    }
  }
});
