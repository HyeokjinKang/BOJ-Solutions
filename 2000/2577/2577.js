const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let a, b, c;

rl.on("line", line => {
  if(!a) {
    a = parseInt(line);
  } else if(!b) {
    b = parseInt(line);
  } else if(!c) {
    c = parseInt(line);
    rl.close();
  }
}).on("close", () => {
  let sum = [...((a * b * c).toString())];
  for(let i = 0; i < 10; i++) {
    let count = 0;
    for(let j = 0; j < sum.length; j++) {
      if(sum[j] == i.toString()) {
        count++;
      }
    }
    console.log(count);
  }
  process.exit();
});