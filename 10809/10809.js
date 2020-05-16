const rl = require("readline").createInterface(process.stdin);

rl.on("line", line => {
  let output = '';
  for(let i = 97; i <= 122; i++) {
    output += line.indexOf(String.fromCharCode(i)) + ' ';
  }
  console.log(output.slice(0, output.length - 1));
});
