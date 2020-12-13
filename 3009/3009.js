const rl = require("readline").createInterface(process.stdin, process.stdout);

let count = 0;
let x = [];
let y = [];

rl.on("line", line => {
  x.push(Number(line.split(' ')[0]));
  y.push(Number(line.split(' ')[1]));
  count++;
  if(count == 3) {
    x.sort();
    y.sort();
    let print = '';
    if(x[0] == x[1]) {
      print += `${x[2]} `;
    } else {
      print += `${x[0]} `;
    }
    if(y[0] == y[1]) {
      print += `${y[2]}`;
    } else {
      print += `${y[0]}`;
    }
    console.log(print);
  }
});