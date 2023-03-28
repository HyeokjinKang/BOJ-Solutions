const rl = require("readline").createInterface(process.stdin, process.stdout);

let input = 0;

rl.on("line", (line) => {
  if (input != 0) console.log(line[0] + line[line.length - 1]);
  input++;
});
