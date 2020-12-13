const rl = require("readline").createInterface(process.stdin, process.stdout);

let isFirst = 1;
let primeArray = [2];
let judgeArray = [];

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

let half = Math.floor((primeArray.length - 1) / 2);

for(let i = 0; half + i < primeArray.length - 1; i++) {
  judgeArray.push(primeArray[half + i]);
  judgeArray.push(primeArray[half - i]);
}

console.log(judgeArray);

rl.on("line", line => {
  if(isFirst) isFirst--;
  else {
    let array = [];
    let used = new Set();
    for(let i = judgeArray.indexOf(line); i < judgeArray.length; i++) {
      if(line > judgeArray[i] && !used.has(judgeArray[i])) {
        for(let j = 0; j < judgeArray.length; j++) {
          if(judgeArray[i] + judgeArray[j] == line && !used.has(judgeArray[j])) {
            array[0] = judgeArray[i];
            array[1] = judgeArray[j];
            used.add(judgeArray[i]);
            used.add(judgeArray[j]);
          }
        }
      }
    }
    if(array[0] > array[1]) {
      console.log(`${array[1]} ${array[0]}`);
    } else {
      console.log(`${array[0]} ${array[1]}`);
    }
  }
});