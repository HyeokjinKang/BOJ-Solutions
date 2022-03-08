const rl = require("readline").createInterface(process.stdin);

let result = '';
let max = 0;

rl.on("line", line => {
  line = line.split('').map(i => i.toLowerCase());
  const used = new Set();
  for(let i = 0; i < line.length; i++) {
    if(!used.has(line[i])) {
      used.add(line[i]);
      let count = 0;
      for(let j = 0; j < line.length; j++) {
        if(line[i] == line[j]) {
          count++;
        }
      }
      if(count > max) {
        max = count;
        result = line[i].toUpperCase();
      } else if(count == max) {
        result = '?';
      }
    }
  }
  console.log(result);
});
