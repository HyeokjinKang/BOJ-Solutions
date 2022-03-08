const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let max = -1;
let num = [];

rl.on("line", line => {
  if(max == -1) {
    max = parseInt(line.split(' ')[1]);
  } else {
    num = line.split(' ').map(i => parseInt(i));
  }
}).on("close", () => {
  let output = '';
  for(let i = 0; i < num.length; i++) {
    if(num[i] < max) {
      output += `${num[i]} `;
    }
  }
  console.log(output.substring(0, output.length - 1));
  process.exit();
});