const os = require('os');
const user = os.userInfo(); //Current user info
console.log(user);
console.log(`The system up time is ${os.uptime()} seconds.`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs);



// const names = require('./names.js');
// const sayHi = require('./utils');
// const data = require('./alternative-flavor');
// require('./mind-grenade');
// console.log(data);

// console.log(names);

// sayHi(names.john);