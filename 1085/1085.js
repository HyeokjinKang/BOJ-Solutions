const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", line => {
  let [x, y, w, h] = line.split(' ').map(Number);
  let arr = [x, y, h - y, w - x];
  arr.sort((a, b) => { return a - b });
  console.log(arr[0]);
});