const fs = require("fs");
const userString = fs.readFileSync("./db/users.json").toString();
const usersArray = JSON.parse(userString);
console.log(usersArray);
//console.log(typeof userString);
//console.log(typeof usersArray);
//console.log(usersArray instanceof Array);
const user3 = { id: 3, name: "jude", agr: 19, password: "zzz" };
usersArray.push(user3);
const string = JSON.stringify(usersArray);
fs.writeFileSync("./db/users.json", string);