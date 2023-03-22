const rl = require("readline").createInterface(process.stdin, process.stdout);

let input = 0;
let arr = [];

rl.on("line", (line) => {
  if (input == 1) arr = line.split(" ").map(Number);
  else if (input == 2) console.log(arr.filter((e) => e == Number(line)).length);
  input++;
});
