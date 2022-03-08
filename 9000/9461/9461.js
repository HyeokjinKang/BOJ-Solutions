const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let max = 0;
let n = -1;
let input = [];

rl.on("line", line => {
  if(n == -1) {
    max = parseInt(line);
    n++;
  } else {
    input[n] = parseInt(line);
    n++;
    if(n == max) {
      for(let i = 0; i < max; i++) {
        let width = [];
        for(let j = 0; j < input[i]; j++) {
          if(width[j-3]) {
            width[j] = width[j-3] + width[j-2];
          } else {
            width[j] = 1;
          }
        }
        console.log(width[width.length - 1]);
      }
      rl.close();
    }
  }
}).on("close", () => {
  process.exit();
});