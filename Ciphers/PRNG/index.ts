import { Buffer } from 'node:buffer'

export default function PRNG(num: number, coding: BufferEncoding) {
    let str = ''
    for (let i = 0; i < num * 2; i++) {
        let RNG = String.fromCodePoint(Math.floor(Math.random() * 128))
        str += RNG
    }
    return Buffer.alloc(num, str).toString(coding)
}

