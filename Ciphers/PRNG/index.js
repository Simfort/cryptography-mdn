function PRNG(num, coding) {
    const { Buffer } = require('node:buffer')
    let str = ''
    for (let i = 0; i < num * 2; i++) {
        let RNG = String.fromCodePoint(Math.floor(Math.random() * 128))
        str += RNG
    }
    return Buffer.alloc(num, str).toString(coding)
}
console.log(PRNG(20, 'base64'))
