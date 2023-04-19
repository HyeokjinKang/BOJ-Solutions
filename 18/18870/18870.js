let fs = require("fs");
let [n, cordinates] = fs.readFileSync("/dev/stdin").toString().split("\n");
cordinates = cordinates.split(" ").map(Number);
let arr = Array.from(new Set(cordinates)).sort((a, b) => a - b);

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
      return mid;
    } else if (low == high && arr[0] != find) {
      return -1;
    }
  }
};

for (let i = 0; i < cordinates.length; i++) {
  cordinates[i] = binarySearch(arr, cordinates[i]);
}

console.log(cordinates.join(" "));
