const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", line => {
  console.log(Math.pow(line, 2) * Math.PI);
  console.log(Math.pow(line * 2, 2) / 2);
});