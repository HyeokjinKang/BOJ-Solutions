const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", line => {
  let arr = line.split(' ').map(Number);
  if(arr[0] != 0 && arr[1] != 0 && arr[2] != 0) {
    arr.sort((a, b) => { return a - b });
    if(Math.pow(arr[2], 2) == Math.pow(arr[0], 2) + Math.pow(arr[1], 2)) {
      console.log('right');
    } else {
      console.log('wrong');
    }
  }
});