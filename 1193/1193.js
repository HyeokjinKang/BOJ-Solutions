const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", line => {
  line = Number(line);
  let x = 1, y = 1, sum = 2, isChanged = false, isRight = false;
  for(let i = 1; i < line; i++) {
    if(y == 1 && !isChanged) {
      x++;
      isRight = false;
      isChanged = true;
    } else if(x == 1 && !isChanged) {
      y++;
      isRight = true;
      isChanged = true;
    } else if(isRight) {
      x++;
      y--;
      isChanged = false;
    } else {
      x--;
      y++;
      isChanged = false;
    }
  }
  console.log(`${y}/${x}`);
  rl.close();
});