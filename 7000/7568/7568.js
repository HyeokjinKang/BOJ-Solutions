const rl = require("readline").createInterface(process.stdin, process.stdout);
let n = 0;
let p = [];

rl.on("line", (line) => {
  if (!n) return (n = Number(line));
  p[p.length] = line.split(" ").map(Number);
  if (p.length == n) rl.close();
}).on("close", () => {
  let result = "";
  for (let i = 0; i < n; i++) {
    let rank = n;
    for (let j = 0; j < n; j++) {
      if (j == i) continue;
      if (p[i][0] >= p[j][0] || p[i][1] >= p[j][1]) rank--;
    }
    result += `${rank} `;
  }
  console.log(result);
});
