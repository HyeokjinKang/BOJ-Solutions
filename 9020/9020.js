const rl = require("readline").createInterface(process.stdin, process.stdout);

let isFirst = 1;
let primeArray = [2];

for(let i = 2; i <= 5477; i++) {
  let isPrime = 1;
  for(let j = 0; j < primeArray.length; j++) {
    if(i % primeArray[j] == 0) {
      isPrime--;
      break;
    }
  }
  if(isPrime) {
    primeArray.push(i);
  }
}

rl.on("line", line => {
  if(isFirst) isFirst--;
  else {
    let array = [];
    let half = line / 2;
    for(let i = 0; i < half; i++) {
      let isPrime = true;
      for(let j = 0; primeArray[j] <= half + i; j++) {
        if((half + i) % primeArray[j] == 0 && (half + i) != primeArray[j]) {
          isPrime = false;
          break;
        } else {
          array[0] = half + i;
        }
      }
      if(isPrime) {
        for(let j = 0; primeArray[j] <= half - i; j++) {
          if((half - i) % primeArray[j] == 0 && (half - i) != primeArray[j]) {
            isPrime = false;
            break;
          } else {
            array[1] = half - i;
          }
        }
        if(isPrime) {
          break;
        }
      } else {
        continue;
      }
    }
    if(array[0] > array[1]) {
      console.log(`${array[1]} ${array[0]}`);
    } else {
      console.log(`${array[0]} ${array[1]}`);
    }
  }
});