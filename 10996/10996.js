const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", line => {
  for(let i = 0; i < parseInt(line) * 2; i++) {
    let log = '';
    if(i % 2 == 0) {
      log = '*';
      for(let j = 2; j < parseInt(line); j += 2) {
        log += ' *';
      }
    } else {
      for(let j = 1; j < parseInt(line); j += 2) {
        log += ' *';
      }
    }
    console.log(log);
  }
  rl.close();
}).on("close", () => {
  process.exit();
});