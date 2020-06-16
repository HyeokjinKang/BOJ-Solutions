const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", n => {
    n = Number(n);
    let max = 1;
    let i = 1;
    while(1) {
      if(n <= max) {
        console.log(i);
        rl.close();
        break;
      }
      max += 6 * i;
      i++;
    }
});