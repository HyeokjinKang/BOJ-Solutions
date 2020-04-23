const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let isFirstLine = true;
let a = [];
let b = [];

rl.on("line", line => {
  if(!isFirstLine) {
    a.push(parseInt(line.split(' ')[0]));
    b.push(parseInt(line.split(' ')[1]));
  } else {
    isFirstLine = false;
  }
}).on("close", () => {
  for(let i = 0; i < a.length; i++) {
    console.log(a[i] + b[i]);
  }
  process.exit();
});