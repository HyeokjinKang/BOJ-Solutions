const rl = require("readline").createInterface(process.stdin);

const sec = [0,2,3,4,5,6,7,8,9,10];

rl.on("line", line => {
  line = line.split('');
  let sum = 0;
  for(let i = 0; i < line.length; i++) {
    if(line[i] == 'Z') {
      sum += 10;
    } else if(line[i].charCodeAt() >= 83) {
      sum += sec[parseInt((line[i].charCodeAt() - 63) / 3)] + 1;
    } else {
      sum += sec[parseInt((line[i].charCodeAt() - 62) / 3)] + 1;
    }
  }
  console.log(sum);
});
