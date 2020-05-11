const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [];

rl.on("line", line => {
  arr = line.split(' ');
}).on("close", () => {
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr[1]);
  process.exit();
});