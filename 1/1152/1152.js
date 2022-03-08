const rl = require("readline").createInterface(process.stdin);

rl.on("line", line => {
  let minus = 0;
  line = line.split(' ');
  if(line[0] == '') {
    minus++;
  }
  if(line[line.length - 1] == '') {
    minus++;
  }
  console.log(line.length - minus);
});
