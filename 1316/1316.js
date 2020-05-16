const rl = require("readline").createInterface(process.stdin, process.stdout);

let isFirst = true;
let count = 0;

rl.on("line", line => {
  if(isFirst) {
    isFirst = false;
  } else {
    line = line.split('');
    const used = new Set();
    let valid = true;
    for(let i = 0; i < line.length; i++) {
      if(used.has(line[i]) && line[i - 1] != line[i]) {
        valid = false;
      } else {
        used.add(line[i]);
      }
    }
    if(valid) count++;
  }
}).on("close", () => {
  console.log(count);
});
