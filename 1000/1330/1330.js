const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num = [];

rl.on("line", line => {
  num = line.split(' ').map(i => parseInt(i));
  if(num[0] > num[1]) {
    console.log('>');
  } else if(num[0] < num[1]) {
    console.log('<');
  } else {
    console.log('==');
  }
  rl.close();
}).on("close", () => {
  process.exit();
});