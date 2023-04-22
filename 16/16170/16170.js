const utc = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000);
console.log(utc.getFullYear());
console.log(`${utc.getMonth() + 1}`.padStart(2, 0));
console.log(utc.getDate());
