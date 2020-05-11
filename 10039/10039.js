const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let score = [], i = 0;

rl.on("line", line => { 
  if(parseInt(line) < 40) {
    line = 40
  }
  score[i] = parseInt(line);
  i++;
}).on("close", () => {
  console.log((score[0] + score[1] + score[2] + score[3] + score[4]) / 5);
  process.exit();
});