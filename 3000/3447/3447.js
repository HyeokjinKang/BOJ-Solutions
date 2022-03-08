const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', line => {
    input.push(line);
  })
  .on('close', () => {
    for(let i = 0; i < input.length; i++) {
      while(1) {
        input[i] = input[i].replace(/BUG/g, '');
        if(input[i].indexOf('BUG') == -1) {
          break;
        }
      }
      console.log(input[i]);
    }
    process.exit();
});