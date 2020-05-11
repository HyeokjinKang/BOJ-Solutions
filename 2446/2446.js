const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", line => {
  for(let i = 0; i < parseInt(line); i++) {
    let log = '';
    for(let j = 0; j < i; j++) {
      log += ' ';
    }
    for(let j = 0; j < (parseInt(line) * 2 - 1) - (parseInt(i * 2)); j++) {
      log += '*';
    }
    console.log(log);
  }
  for(let i = parseInt(line) - 2; i >= 0; i--) {
    let log = '';
    for(let j = 0; j < i; j++) {
      log += ' ';
    }
    for(let j = 0; j < (parseInt(line) * 2 - 1) - (parseInt(i * 2)); j++) {
      log += '*';
    }
    console.log(log);
  }
  rl.close();
}).on("close", () => {
  process.exit();
});