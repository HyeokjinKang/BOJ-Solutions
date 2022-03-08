const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let cnt = 0;
let length = 0;
let data = [];
let rst = true;

rl.on("line", line => {
  if(cnt == 0) {
    length = parseInt(line.split(' ')[0]);
  } else if(cnt <= length) {
    data[cnt - 1] = line.split('');
  } else {
    let temp = [...line];
    for(let i = 0; i < temp.length; i++) {
      if(i % 2 == 0) {
        if(temp[i] != data[cnt - length - 1][i - parseInt(i / 2)]) {
          rst = false;
          break;
        }
      } else {
        if(temp[i] != data[cnt - length - 1][i - parseInt(i / 2) - 1]) {
          rst = false;
          break;
        }
      }
    }
  }
  cnt++;
}).on("close", () => {
  if(rst) console.log("Eyfa");
  else console.log("Not Eyfa");
});