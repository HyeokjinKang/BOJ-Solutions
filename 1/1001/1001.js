const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
  const [a, b] = line.split(' ').map(i => parseInt(i));
  console.log(a - b);
  rl.close();
}).on("close", function() {
  process.exit();
});
