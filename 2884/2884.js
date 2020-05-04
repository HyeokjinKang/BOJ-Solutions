const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", line => {
  let [h, m] = line.split(' ').map(i => parseInt(i));
  m -= 45;
  if(m < 0) {
    h -= 1;
    m += 60;
  }
  if(h < 0) {
    h += 24;
  }
  console.log(h, m);
  rl.close();
}).on("close", () => {
  process.exit();
});