const rl = require("readline").createInterface(process.stdin);

const alphabets = new Set(['c=', 'c-', 'd-', 'lj', 'nj', 's=']);

rl.on("line", line => {
  line = line.split('');
  let minus = 0;
  for(let i = 0; i < line.length - 1; i++) {
    if(line[i] + line[i + 1] + line[i + 2] == 'dz=') {
      minus += 2;
    } else if(line[i] + line[i + 1] == 'z=' && line[i - 1] + line[i] + line[i + 1] != 'dz=') {
      minus ++;
    } else if(alphabets.has(line[i] + line[i + 1])) {
      minus++;
    }
  }
  console.log(line.length - minus);
});
