const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", line => {
  line = line.split(' ').map(i => parseInt(i));
  console.log(line[0] + line[1]);
}).on("close", () => {
  process.exit();
});