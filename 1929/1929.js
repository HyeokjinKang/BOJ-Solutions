const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", line => {
  let input = line.split(' ').map(Number);
  let primeArray = [];
  for(let i = 2; i * i <= input[1]; i++) {
    if(!primeArray[i]) {
      for(let j = i * i; j <= input[1]; j += i) {
        primeArray[j] = true;
      }
    }
  }
  for(let i = input[0]; i <= input[1]; i++) {
    if(!primeArray[i] && !(i <= 1)) {
      console.log(i);
    }
  }
});