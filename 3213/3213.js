const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n = -1;
let pizza = 0;
let oneFour = 0;
let oneTwo = 0;
let threeFour = 0;

rl.on("line", line => {
  if(n == -1) {
    n = parseInt(line);
  } else {
    if(line == "1/2") {
      oneTwo++;
    } else if(line == "1/4") {
      oneFour++;
    } else {
      threeFour++;
    }
    n--;
    if(n == 0) {
      for(let i = threeFour; i > 0; i--) {
        if(threeFour) {
          if(oneFour > 0) {
            oneFour--;
            threeFour--;
            pizza++;
          }
        }
      }
      pizza += parseInt(oneTwo / 2);
      oneTwo = oneTwo % 2;
      if(oneTwo) {
        if(oneFour > 1) {
          oneTwo--;
          oneFour -= 2;
          pizza++;
        } else if(oneFour > 0) {
          oneTwo--;
          oneFour++;
        }
      }
      console.log(threeFour + Math.ceil(oneFour / 4) + Math.ceil(oneTwo / 2) + pizza);
      rl.close();
    }
  }
}).on("close", () => {
  process.exit();
});