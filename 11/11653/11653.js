const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", e => {
  e = Number(e);
  let primeArray = [];
  for(let i = 2; i * i <= e; i++) {
    if(!primeArray[i]) {
      for(let j = i * i; j <= e; j += i) {
        primeArray[j] = true;
      }
    }
  }
  let isLogged = 0;
  for(let i = 2; i <= primeArray.length; i++) {
    if(!primeArray[i]) {
      if(!(e % i)) {
        isLogged++;
        e = e / i;
        console.log(i);
        i--;
      }
    }
  }
  if(!isLogged && e != 1) {
    console.log(e);
  }
});