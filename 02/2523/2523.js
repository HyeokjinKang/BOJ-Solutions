const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", line => {
  for(let i = 1; i < parseInt(line); i++) {
    let log = '';
    for(let j = 0; j < i; j++) {
      log += '*';
    }
    console.log(log);
  }
  for(let i = parseInt(line); i > 0; i--) {
    let log = '';
    for(let j = 0; j < i; j++) {
      log += '*';
    }
    console.log(log);
  }
  rl.close();
}).on("close", () => {
  process.exit();
});