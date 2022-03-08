const rl = require("readline").createInterface(process.stdin);

let isFirst = true;

rl.on("line", line => {
  if(isFirst == true) {
    isFirst = false;
  } else {
    line = line.split(' ');
    let output = '';
    for(let i = 0; i < line[1].length; i++) {
      for(let j = 0; j < Number(line[0]); j++) {
        output += line[1][i];
      }
    }
    console.log(output);
  }
});
