const rl = require("readline").createInterface(process.stdin, process.stdout);
let input = [0];
let arr = [];
let aeiou = ["a", "e", "i", "o", "u"];

rl.on("line", (i) => {
  if (!input[0]) return (input = i.split(" ").map(Number));
  arr = i.split(" ");
}).on("close", () => {
  arr.sort();
  let index = [];
  let arraySize = input[0];
  let value = 0;
  while (arraySize--) index.push(value++);
  while (1) {
    for (let i = 0; i < input[0]; i++) {
      if (aeiou.indexOf(arr[index[i]]) != -1) {
        let word = "";
        for (let j = 0; j < input[0]; j++) {
          word += arr[index[j]];
        }
        console.log(word);
        for (let j = input[1] - 1; j >= 0; j--) {
          console.log(index, i, j);
          index[j]++;
          if (index[j] == input[1]) {
            if (index[0] == input[1]) {
              return;
            }
            index[j] = index[j - 1] + 2;
            continue;
          }
          break;
        }
      }
    }
  }
});
