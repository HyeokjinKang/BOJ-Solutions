const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let n = 0;
let a = 0;
let b = [];
let c = 0;
rl.on("line", function(line) {
  if(!a) {
    a = parseInt(line);
  } else {
    b = line.split('').map(i => parseInt(i));
    c = parseInt(line);
  }
  n++;
  if(n == 2) {
    for(i = 2; i >= 0; i--) {
      console.log(a*b[i]);
    }
    console.log(a*c);
    rl.close();
  }
}).on("close", function() {
  process.exit();
});
