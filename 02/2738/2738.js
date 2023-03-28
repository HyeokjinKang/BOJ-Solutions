const rl = require("readline").createInterface(process.stdin, process.stdout);

let input = 0;
let size = [0, 0];
let a = [];
let b = [];

rl.on("line", (line) => {
  if (input === 0) {
    size = line.split(" ").map(Number);
    a = new Array(size[0]);
    b = new Array(size[0]);
  } else {
    if (input <= size[0]) {
      a[input - 1] = line.split(" ").map(Number);
    } else {
      b[input - size[0] - 1] = line.split(" ").map(Number);
    }
  }
  input++;
}).on("close", () => {
  let c = new Array(size[0]);
  for (let i = 0; i < size[0]; i++) {
    c[i] = new Array(size[1]);
    for (let j = 0; j < size[1]; j++) {
      c[i][j] = a[i][j] + b[i][j];
    }
    console.log(c[i].join(" "));
  }
});
