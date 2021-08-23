const rl = require("readline").createInterface(process.stdin, process.stdout);
let m = 0,
  n = 0;
let ans = ["WBWBWBWB", "BWBWBWBW"];
let input = [];

rl.on("line", (line) => {
  if (!m) return ([n, m] = line.split(" ").map(Number));
  input[input.length] = line;
  if (input.length == n) rl.close();
}).on("close", () => {
  let min1 = 10000;
  let min2 = 10000;
  for (let i = 0; i <= m - 8; i++) {
    for (let j = 0; j <= n - 8; j++) {
      let r1 = 0;
      let r2 = 0;
      for (let k = 0; k < 8; k++) {
        for (let l = 0; l < 8; l++) {
          if (input[j + l][i + k] != ans[Number(!(k % 2))][l]) r1++;
          if (input[j + l][i + k] != ans[k % 2][l]) r2++;
        }
      }
      if (min1 > r1) min1 = r1;
      if (min2 > r2) min2 = r2;
    }
  }
  console.log(min1 > min2 ? min2 : min1);
});
