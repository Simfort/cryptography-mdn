const { Buffer } = require('node:buffer')
console.log(Buffer.alloc(10, 'z2345').toString('hex'))