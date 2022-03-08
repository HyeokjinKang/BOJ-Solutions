const rl = require("readline").createInterface(process.stdin, process.stdout);
let m = 1;
let arr = new Set();

rl.on("line", (i) => {
  if (m) return m--;
  arr.add(i);
}).on("close", () => {
  arr = Array.from(arr);
  arr.sort();
  arr.sort((a, b) => a.length - b.length);
  for (let e of arr) {
    console.log(e);
  }
});
