const rl = require("readline").createInterface(process.stdin, process.stdout);
let n = 0;
let arr = [];

rl.on("line", (line) => {
  if (!n) return (n = Number(line));
  arr[arr.length] = Number(line);
}).on("close", () => {
  while (1) {
    let c = 0;
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        c++;
        let k = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = k;
      } else continue;
    }
    if (c == 0) break;
  }
  arr.forEach((n) => console.log(n));
});
