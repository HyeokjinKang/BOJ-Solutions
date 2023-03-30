const rl = require("readline").createInterface(process.stdin, process.stdout);

let minX = 10000;
let maxX = -10000;
let minY = 10000;
let maxY = -10000;
let i = 0;

rl.on("line", (line) => {
  if (i == 0) return i++;
  line = line.split(" ").map(Number);
  if (line[0] < minX) minX = line[0];
  if (line[0] > maxX) maxX = line[0];
  if (line[1] < minY) minY = line[1];
  if (line[1] > maxY) maxY = line[1];
}).on("close", () => {
  minX += 20000;
  maxX += 20000;
  minY += 20000;
  maxY += 20000;
  console.log((maxX - minX) * (maxY - minY));
});
