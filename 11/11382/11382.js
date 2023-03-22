const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  line = line.split(" ").map(Number);
  let sum = line.reduce((a, b) => a + b, 0);
  console.log(sum);
});
