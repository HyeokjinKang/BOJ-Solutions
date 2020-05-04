const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
  line = line.split('').map(i => i.charCodeAt(0));
  for(i = 1; i <= 26; i++) {
    console.log(String.fromCharCode(line).map(j => j + i));
  }
  rl.close();
}).on("close", function() {
  process.exit();
});
