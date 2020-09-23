const rl = require("readline").createInterface(process.stdin, process.stdout);

let isFirst = true;

rl.on("line", line => {
  if(isFirst) {
    isFirst = false;
    return;
  }
  let input = line.split(' ').map(Number);
  let val = input[1] - input[0];
  if(input[0] == 0 && input[1] == 0) {
    console.log(0);
    return;
  }
  let tmp = 1;
  let count = 0;
  for(let i = 1;;i++) {
    for(let j = 0; j <= 1; j++) {
      tmp += i;
      count++;
      if(val < tmp) {
        console.log(count);
        return;
      }
    }
  }
});