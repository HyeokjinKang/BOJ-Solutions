const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let allDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let yearDate = 365;
let sum = 0;

rl.on("line", function(line) {
    const input = line + ':00';
    const date = new Date(input);
    const year = 1900 + date.getYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const time = (hour + (minute / 60)) / 24;
    if(year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
        yearDate = 366;
        allDate[1] = 29;
    }
    for(let i = 0; i < month; i++) {
        sum += allDate[i];
    }
    sum += day - 1;
    sum += time;
    console.log(sum / yearDate * 100);
    rl.close();
}).on("close", function() {
    process.exit();
});