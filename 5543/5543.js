const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let hamburger = [], drink = [], i = 0;

rl.on("line", line => {
  if(i < 3) {
    hamburger[i] = parseInt(line);
  } else {
    drink[i - 3] = parseInt(line) - 50;
  }
  i++;
}).on("close", () => {
  hamburger.sort((a, b) => {
    return a - b;
  });
  drink.sort((a, b) => {
    return a - b;
  });
  console.log(hamburger[0] + drink[0]);
  process.exit();
});