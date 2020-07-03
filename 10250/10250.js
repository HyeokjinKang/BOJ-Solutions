const rl = require("readline").createInterface(process.stdin, process.stdout);

let isFirst = true;

rl.on("line", line => {
  if(isFirst) {
    isFirst = false;
  } else {
    line = line.split(' ').map(Number);
    let first = String(line[2] % line[0]);
    let second = String(Math.ceil(line[2] / line[0])).padStart(2, '0');
    if(first == 0) {
      first = String(line[0]);
    }
    console.log(first + second);
  }
});