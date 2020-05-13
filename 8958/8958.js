const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let isFirst = true;

rl.on("line", line => {
  if(isFirst) {
    isFirst = false;
  } else {
    line = [...line];
    let combo = 1;
    let score = 0;
    for(let i = 0; i < line.length; i++) {
      if(line[i] == 'O') {
        score += combo;
        combo++;
      } else {
        combo = 1;
      }
    }
    console.log(score);
  }
});