const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  if (line == "0 0") return;
  line = line.split(" ").map(Number);
  if (line[0] % line[1] == 0) console.log("multiple");
  else if (line[1] % line[0] == 0) console.log("factor");
  else console.log("neither");
});
