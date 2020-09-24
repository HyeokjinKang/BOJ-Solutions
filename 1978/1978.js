const rl = require("readline").createInterface(process.stdin, process.stdout);

let isFirst = true;
let judge = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];

rl.on("line", line => {
  if(isFirst) {
    isFirst = false;
    return;
  }
  let count = 0;
  let input = line.split(' ').map(Number);
  for(let i = 0; i < input.length; i++) {
    if(input[i] != 1) {
      let judgeCount = 0;
      let counted = false;
      for(let j = 0; j < judge.length; j++) {
        if(input[i] / judge[j] == 1) {
          count++;
          counted = true;
          break;
        } else if(input[i] % judge[j] == 0) {
          judgeCount++;
        }
      }
      if(judgeCount == 0 && !counted) {
        count++;
      }
    }
  }
  console.log(count);
});