let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let school = {
  NLCS: "North London Collegiate School",
  BHA: "Branksome Hall Asia",
  KIS: "Korea International School",
  SJA: "St. Johnsbury Academy",
};

console.log(school[input]);
