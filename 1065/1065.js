const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

const arithmetic = n => {
  n = String(n);
  let gap = n[1] - n[0];
  let rst = true;
  for(let j = 2; j < n.length; j++) {
    if(gap != n[j] - n[j - 1]) {
      rst = false;
      break;
    }
  }
  return rst;
};

rl.on("line", line => {
  line = Number(line);
  let sum = 0;
  if(line < 100) {
    sum = line;
  } else {
    sum = 99;
    for(let i = 100; i <= line; i++) {
      if(arithmetic(i)) {
        sum++;
      }
    }
  }
  console.log(sum);
});
