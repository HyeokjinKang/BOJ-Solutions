const rl = require("readline").createInterface(process.stdin, process.stdout);
let n = -1,
  max = -1;
rl.on("line", (line) => {
  if (n == -1) return ([n, max] = line.split(" ").map(Number));
  let arr = line
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  let maxVal = 0;
  for (let i = 0; i < n - 2; i++) {
    let first = arr[i];
    for (let j = i + 1; j < n - 1; j++) {
      let second = first + arr[j];
      for (let k = j + 1; k < n; k++) {
        let final = second + arr[k];
        if (final <= max && final > maxVal) {
          maxVal = final;
        }
      }
    }
  }
  console.log(maxVal);
});
