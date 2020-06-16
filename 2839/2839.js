const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", line => {
    line = Number(line);
    let ans = -1, i = Math.floor(line / 5);
    while(i >= 0) {
      if((line - (5 * i)) % 3 == 0) {
        ans = i + (line - (5 * i)) / 3;
        break;
      }
      i--;
    }
    console.log(ans);
});