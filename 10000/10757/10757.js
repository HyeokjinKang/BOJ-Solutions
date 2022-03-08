const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", line => {
  line = line.split(' ').map(BigInt);
  console.log(`${line[0] + line[1]}`.split('n')[0]);
});