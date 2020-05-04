const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", line => {
  let num = parseInt(line);
  if(num >= 90) {
    console.log('A');
  } else if(num >= 80) {
    console.log('B');
  } else if(num >= 70) {
    console.log('C');
  } else if(num >= 60) {
    console.log('D');
  } else {
    console.log('F');
  }
  rl.close();
}).on("close", () => {
  process.exit();
});