import { Buffer } from 'node:buffer'
import PRNG from '../PRNG/index.js'


type TokenObj = {

    [ciphertext: string]: {
        token: string
    }
}
//
/** 
    * ! This not constant memory
    * * This is example your memory,because your token saved in the your computer or base-memory.
**/
const arrTokens: TokenObj = {}
//
class AE {
    static encrypt(text: string, key: string): TokenObj {
        let ciphertext: string = ''
        for (let i = 0; i < text.length; i++) {
            ciphertext += String.fromCharCode(text.codePointAt(i)! ^ key.codePointAt(key.length % i)!)
        }
        const token = PRNG(8, 'binary')
        arrTokens[ciphertext] = {
            token: token
        }
        return {
            [ciphertext]: {
                token: token,
            }

        }
    }
    static decrypt(ciphertext: string, key: string, token: string) {
        if (!arrTokens[ciphertext]) {
            return false
        }
        let text = ''
        for (let i = 0; i < ciphertext.length; i++) {
            text += String.fromCharCode(ciphertext.codePointAt(i)! ^ key.codePointAt(key.length % i)!)
        }
        if (arrTokens[ciphertext].token == token) {
            return text
        }
    }
}
'f@zd)K'
'.\x03\n\n\x15`1orld'
console.log(AE.encrypt('Hello World', PRNG(125, 'utf-8')))
console.log(AE.decrypt('.\x03\n\n\x15`1orld', 'f@zd)K', 'eds'))
