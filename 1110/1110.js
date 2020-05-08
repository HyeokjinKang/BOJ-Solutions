const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", line => {
  let cn = line, cnt = 0;
  while(1) {
    if(cn.length > 1) {
      cn = cn.split('').map(Number);
    } else {
      cn = [0, parseInt(cn)];
    }
    cn = cn[1].toString() + (cn[0] + cn[1]).toString().slice(-1);
    cnt++;
    if(parseInt(cn) == line) {
      break;
    }
  }
  console.log(cnt);
  rl.close();
}).on("close", () => {
  process.exit();
});