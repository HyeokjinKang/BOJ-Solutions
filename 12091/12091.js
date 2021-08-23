const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  console.log(["Vaporeon", "Jolteon", "Flareon"][++line % 3]);
});
