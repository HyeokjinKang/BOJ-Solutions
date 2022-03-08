const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let isFirst = true;

rl.on("line", line => {
  if(isFirst) {
    isFirst = false;
  } else {
    line = line.split('').map(Number);
    let sum = 0;
    for(let i = 0; i < line.length; i++) {
      sum += line[i];
    }
    console.log(sum);
  }
});
