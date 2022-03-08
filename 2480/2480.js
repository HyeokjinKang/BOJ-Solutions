const rl = require("readline").createInterface(process.stdin, process.stdout);

let num,
  count = 0;

rl.on("line", (arr) => {
  arr = arr.split(" ").map(Number);
  arr.sort();
  if (arr[0] == arr[1]) {
    num = arr[0];
    if (arr[0] == arr[2]) {
      count = 3;
    } else {
      count = 2;
    }
  } else if (arr[1] == arr[2]) {
    num = arr[1];
    count = 2;
  } else {
    num = arr[2];
    count = 1;
  }
  if (count == 1) console.log(num * 100);
  else if (count == 2) console.log(1000 + num * 100);
  else if (count == 3) console.log(10000 + num * 1000);
});
