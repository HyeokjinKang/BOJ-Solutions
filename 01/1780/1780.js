let fs = require("fs");
let [n, ...input] = fs.readFileSync("/dev/stdin").toString().split("\n");
n = Number(n);
input.forEach((e, i) => {
  input[i] = e.split(" ").map(Number);
});
input.splice(input.length - 1, 1);

let result = [0, 0, 0];

const chk = (arr) => {
  let num = arr[0][0];
  let invalid = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (num != arr[i][j]) {
        invalid = true;
        break;
      }
    }
    if (invalid) break;
  }
  if (!invalid) result[num + 1] += 1;
  else {
    let step = arr.length / 3;
    for (let i = 0; i < arr.length; i += step) {
      for (let j = 0; j < arr.length; j += step) {
        let newArr = [];
        for (let k = 0; k < step; k++) {
          newArr.push(arr[i + k].slice(j, j + step));
        }
        chk(newArr);
      }
    }
  }
};

chk(input);
console.log(result.join("\n"));
