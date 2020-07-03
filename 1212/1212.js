const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", line => {
  line = line.split('');
  let output = '', length = line.length;
  for(let i = 0; i < length; i++) {
    output += `${Math.floor(line[i] / 8) == 0 ? '' : Math.floor(line[i] / 8)}${Math.floor(line[i] % 8 / 4) == 0 ? (Math.floor(line[i] / 8) == 0 ? 0 : '') : Math.floor(line[i] % 8 / 4)}${Math.floor(line[i] % 4 / 2)}${line[i] % 4 % 2}`;
  }
  let i = 0;
  while(1) {
    if(i == output.length - 1 || output[i] != 0) {
      break;
    }
    i++;
  }
  console.log(output.slice(i));
});