// Operating System module 
//helps information for OS
// .. for applying conditions in different OS

const os = require('os');
// console.log(os);
// console.log(os.arch()) ; // *64
console.log(os.freemem()/(1024*1024*1024)); // free ram storage in bytes
console.log(os.totalmem()/(1024*1024*1024)); // total memory

console.log(os.hostname());  // pc name

console.warn(os.platform()); // windows

console.log(os.userInfo()); // username information 