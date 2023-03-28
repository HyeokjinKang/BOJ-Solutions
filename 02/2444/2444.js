const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  line = Number(line);
  for (let i = 1; i < line * 2; i++) {
    const space = Math.abs(line - i);
    console.log(" ".repeat(space) + "*".repeat((line - space) * 2 - 1));
  }
});
