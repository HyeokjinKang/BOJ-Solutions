const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let isFirstLine = true;
let answer = '';

rl.on("line", line => {
  line = line.split(' ').map(i => parseInt(i));
  if(!isFirstLine) {
    answer += `${line[0] + line[1]}\n`;
  } else {
    isFirstLine = false;
  }
}).on("close", () => {
  console.log(answer);
  process.exit();
});