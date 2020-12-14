const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", line => {
  let print = '';
  for(let i = 0; i < Number(line); i++) {
    print += '*';
  }
  for(let i = 0; i < Number(line); i++) {
    console.log(print);
  }
});