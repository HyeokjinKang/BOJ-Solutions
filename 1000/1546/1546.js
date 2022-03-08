const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let f = 0;

rl.on("line", line => {
  if(f != 0) {
    line = line.split(' ').map(Number);
    let max = 0, sum = 0;
    for(let i = 0; i < line.length; i++) {
      if(line[i] > max) {
        max = line[i];
      }
    }
    for(let i = 0; i < line.length; i++) {
      sum += line[i] / max * 100;
    }
    console.log(sum / line.length);
  } else {
    f = 1;
  }
});