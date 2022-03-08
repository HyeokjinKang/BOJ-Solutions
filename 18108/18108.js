const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  console.log(`${Number(line) - 543}`);
});
