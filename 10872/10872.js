const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", line => {
  line = Number(line);
  let sum = 1;
  for(let i = 2; i <= line; i++) {
    sum *= i;
  }
  console.log(sum);
});