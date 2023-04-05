let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let array = input[1].split(" ").map(Number);

const binarySearch = (arr, find) => {
  let low = 0,
    mid = Math.floor(arr.length / 2),
    high = arr.length - 1;
  while (1) {
    mid = low + Math.floor((high - low) / 2);
    if (low > high) return 0;
    if (arr[mid] > find) {
      high = mid - 1;
    } else if (arr[mid] < find) {
      low = mid + 1;
    } else if (arr[mid] == find) {
      return 1;
    } else if (low == high && arr[0] != find) {
      return 0;
    }
  }
};

array.sort((a, b) => a - b);
let result = "";
input[3].split(" ").forEach((e) => {
  result += `${binarySearch(array, Number(e))}\n`;
});
process.stdout.write(result);
