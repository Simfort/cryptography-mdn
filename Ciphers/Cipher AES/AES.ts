import PRNG from "../PRNG/index.js"

class AES {
    static encrypt(block: string, key: string) {
        let cipherblock: string = ''
        for (let i = 0; i < block.length; i++) {
            cipherblock += String.fromCharCode(block.codePointAt(i)! ^ key.codePointAt(key.length % i)!)

        }
        return cipherblock
    }
    static decrypt(cipherblock: string, key: string) {
        let block: string = ''
        for (let i = 0; i < cipherblock.length; i++) {
            block += String.fromCharCode(cipherblock.codePointAt(i)! ^ key.codePointAt(key.length % i)!)
        }

        return block
    }
}


const text = ['adsdy', 'dasd', 'eeff']
const key = PRNG(8, 'utf-8')
const ciphers = []
const decryptArr = []
for (let i = 0; i < text.length; i++) {
    ciphers.push(AES.encrypt(text[i], key))
}
console.log(ciphers)
for (let i = 0; i < ciphers.length; i++) {
    decryptArr.push(AES.decrypt(ciphers[i], key))
}
console.log(decryptArr)