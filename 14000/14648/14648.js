const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let length = -1;
let query = -1;
let numbers = [];

rl.on("line", line => {
  if(length == -1) {
    [length, query] = line.split(' ').map(i => parseInt(i));
  } else if(numbers == '') {
    numbers = line.split(' ').map(i => parseInt(i));
  } else {
    line = line.split(' ').map(i => parseInt(i));
    if(line[0] == 1) {
      let sum = 0;
      for(let i = line[1]; i <= line[2]; i++) {
        sum += numbers[i - 1];
      }
      console.log(sum);
      [numbers[line[1] - 1], numbers[line[2] - 1]] = [numbers[line[2] - 1], numbers[line[1] - 1]];
    } else {
      let sum = 0;
      for(let i = line[1]; i <= line[2]; i++) {
        sum += numbers[i - 1];
      }
      for(let i = line[3]; i <= line[4]; i++) {
        sum -= numbers[i - 1];
      }
      console.log(sum);
    }
    query--;
    if(query <= 0) {
      rl.close();
    }
  }
}).on("close", () => {
  process.exit();
});