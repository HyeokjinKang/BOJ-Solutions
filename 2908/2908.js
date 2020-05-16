const rl = require("readline").createInterface(process.stdin);

rl.on("line", line => {
  line = line.split(' ');
  [line[0], line[1]] = [line[0][2] + line[0][1] + line[0][0], line[1][2] + line[1][1] + line[1][0]];
  line = line.map(Number);
  if(line[1] > line[0]) {
    console.log(line[1]);
  } else {
    console.log(line[0]);
  }
});
