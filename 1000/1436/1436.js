const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (n) => {
  n = Number(n);
  for (let i = 666; ; i++) {
    if (i.toString().match(/666/g)) n--;
    if (!n) return console.log(i);
  }
});
