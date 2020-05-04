const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let pw = [];
let isFirstInput = true;

rl.on("line", line => {
  if(!isFirstInput) {
    pw.push(line);
  } else {
    isFirstInput = false;
  }
}).on("close", () => {
  for(let i = 0; i < pw.length; i++) {
    if(pw.indexOf(pw[i].split("").reverse().join("")) != -1) {
      console.log(`${pw[i].length} ${pw[i].split("")[parseInt(pw[i].length / 2)]}`);
      break;
    }
  }
  process.exit();
});
