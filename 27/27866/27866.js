const rl = require("readline").createInterface(process.stdin, process.stdout);

let input = 0;
let string = "";

rl.on("line", (line) => {
  if (input == 0) string = line;
  else console.log(string[Number(line) - 1]);
  input++;
});
