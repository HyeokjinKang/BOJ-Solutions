const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let f = 0;

rl.on("line", line => {
  if(f != 0) {
    let arr = line.split(' ').map(Number);
    let min = 1000001, max = -1000001;
    for(i = 0; i < f; i++) {
      if(min > arr[i]) min = arr[i];
      if(max < arr[i]) max = arr[i];
    }
    console.log(min, max);
    rl.close();
  } else {
    f = parseInt(line);
  }
}).on("close", () => {
  process.exit();
});