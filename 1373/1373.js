const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num = '';

rl.on("line", line => {
  line = line.split('');
  for(let i = line.length - 1; i >= 0; i--) {
    if(line[i - 2]) {
      num = JSON.stringify((1 * line[i]) + (2 * line[i - 1]) + (4 * line[i - 2])) + num;
      i = i - 2;
    } else if(line[i - 1]) {
      num = JSON.stringify((1 * line[i]) + (2 * line[i - 1])) + num;
      i = i - 1;
    } else {
      num = JSON.stringify(1 * line[i]) + num;
    }
  }
  console.log(num);
  rl.close();
}).on("close", () => {
  process.exit();
});