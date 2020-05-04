const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
  const [A, B, C] = line.split(' ').map(i => parseInt(i));
  console.log((A+B)%C);
  console.log(((A%C) + (B%C))%C);
  console.log((A*B)%C);
  console.log(((A%C)*(B%C))%C);
  rl.close();
}).on("close", function() {
  process.exit();
});
