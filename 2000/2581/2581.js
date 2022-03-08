const rl = require("readline").createInterface(process.stdin, process.stdout);

let judge = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
let input = [];

rl.on("line", line => {
  if(!input[0]) {
    input[0] = Number(line);
  } else {
    let sum = 0;
    let min = -1;
    input[1] = line.split(' ').map(Number);
    for(let i = input[0]; i <= input[1]; i++) {
      if(i != 1) {
        let judgeCount = 0;
        let counted = false;
        for(let j = 0; j < judge.length; j++) {
          if(i / judge[j] == 1) {
            counted = true;
            break;
          } else if(i % judge[j] == 0) {
            judgeCount++;
            break;
          }
        }
        if(judgeCount == 0 || counted) {
          if(min == -1) {
            min = i;
          }
          sum += i;
        }
      }
    }
    if(min != -1) {
      console.log(sum);
    }
    console.log(min);
  }
});