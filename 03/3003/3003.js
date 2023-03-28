const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  line = line.split(" ").map(Number);
  console.log(1 - line[0], 1 - line[1], 2 - line[2], 2 - line[3], 2 - line[4], 8 - line[5]);
});
