const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let isFirst = true;

rl.on("line", line => {
  if(isFirst) {
    isFirst = false;
  } else {
    line = line.split(' ').map(Number);
    line.shift();
    const avg = line.reduce((a, b) => a + b) / line.length;
    let sum = 0;
    for(i = 0; i < line.length; i++) {
      if(line[i] > avg) {
        sum++;
      }
    }
    console.log((100 / (line.length / sum)).toFixed(3) + '%');
  }
});