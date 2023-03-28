const rl = require("readline").createInterface(process.stdin, process.stdout);

let i = -1;

rl.on("line", (line) => {
  if (i == -1) i = Number(line);
  else console.log(i * Number(line));
});
