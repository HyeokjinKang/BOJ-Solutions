const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  const len = line.split(" ").map(Number);
  len.sort((a, b) => a - b);
  if (len[0] + len[1] > len[2]) console.log(len[0] + len[1] + len[2]);
  else if (len[0] == len[1] && len[1] == len[2]) console.log(len[0] * 3);
  else console.log((len[0] + len[1]) * 2 - 1);
});
