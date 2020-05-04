const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", line => {
  let n = parseInt(line);
  for(i = 1; i <= 9; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
  rl.close();
}).on("close", () => {
  process.exit();
});