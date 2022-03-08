const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", line => {
  line = parseInt(line);
  for(let i = 1; i <= line; i++) {
    let output = '';
    for(let j = 0; j < i; j++) {
      output += '*';
    }
    console.log(output);
  }
  rl.close();
}).on("close", () => {
  process.exit();
});