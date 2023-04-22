const rl = require("readline").createInterface(process.stdin, process.stdout);
let init = 0;
rl.on("line", (line) => {
  if (init == 0) init++;
  else {
    line = line.split(" ").map(BigInt);
    if (line[0] * line[1] == line[2] * line[3]) console.log("Tie");
    else console.log(line[0] * line[1] > line[2] * line[3] ? "TelecomParisTech" : "Eurecom");
  }
});
