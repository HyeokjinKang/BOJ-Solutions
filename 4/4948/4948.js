const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", line => {
  let input = Number(line);
  let primeArray = [];
  if(input == 0) {
    process.exit();
  }
  for(let i = 2; i * i <= input * 2; i++) {
    if(!primeArray[i]) {
      for(let j = i * i; j <= input * 2; j += i) {
        primeArray[j] = true;
      }
    }
  }
  let count = 0;
  for(let i = input + 1; i <= input * 2; i++) {
    if(!primeArray[i] && !(i <= 1)) {
      count++;
    }
  }
  console.log(count);
});