const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", line => {
  let n = parseInt(line);
  let sum = 0;
  for(i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
  rl.close();
}).on("close", () => {
  process.exit();
});