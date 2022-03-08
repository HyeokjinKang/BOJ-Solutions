const rl = require("readline").createInterface(process.stdin, process.stdout);

let isFirst = 1;

rl.on("line", line => {
  if(isFirst) {
    isFirst--;
    return;
  }
  let [x1, y1, r1, x2, y2, r2] = line.split(' ').map(Number);
  let d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  if(x1 == x2 && y1 == y2) {
    if(r1 != r2) {
      console.log(0);
    } else if(r1 == r2) {
      console.log(-1);
    }
    return;
  }
  if(d == r1 + r2) {
    console.log(1);
  } else if(d > r1 + r2) {
    console.log(0);
  } else if(d < r1 + r2) {
    if(((x1 + r1 > x2 && y1 + r1 > y2) && (x1 - r1 < x2 && y1 - r1 < y2)) || ((x2 + r2 > x1 && y2 + r2 > y2) && (x2 - r2 < x1 && y2 - r2 < y2))) {
      if(r1 == d + r2 || r2 == d + r1) {
        console.log(1);
      } else {
        if(r1 > d + r2 || r2 > d + r1) {
          console.log(0);
        } else {
          console.log(2);
        }
      }
    } else {
      console.log(2);
    }
  }
});