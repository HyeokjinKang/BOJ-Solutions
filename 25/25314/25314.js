const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  line = Number(line) / 4;
  console.log("long ".repeat(line) + "int");
});
