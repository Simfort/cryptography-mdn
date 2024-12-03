import PRNG from "./PRNG/index.js";
import { Buffer } from "node:buffer";
export function BlockCipher(text, n) {
    let key = PRNG(128, "hex")
    const buffers = []
    for (let i = 0; i < text.length; i += n) {
        buffers.push(Buffer.alloc(n, text.slice(i, i + n)))
    }
    let bytes = ''
    for (let i = 0; i < buffers.length; i++) {
        key = key.slice(i)
        for (let j = 0; j < buffers[i].length; j++) {
            buffers[i][j] = buffers[i][j] ^ key.codePointAt(j)
            bytes += buffers[i][j]
        }
    }
    let cipherstr = ''
    for (let i = 0; i < bytes.length; i += 2) {
        cipherstr += String.fromCodePoint(bytes.slice(i, i + 2))
    }
    return cipherstr
}
console.log(BlockCipher('David', 64))