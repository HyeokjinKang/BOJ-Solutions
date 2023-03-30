const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  if (line == "0 0 0") return;
  const len = line.split(" ").map(Number);
  len.sort((a, b) => a - b);
  if (len[0] + len[1] <= len[2]) return console.log("Invalid");
  if (len[0] == len[1] && len[1] == len[2]) return console.log("Equilateral");
  if (len[0] == len[1] || len[1] == len[2]) return console.log("Isosceles");
  console.log("Scalene");
});
