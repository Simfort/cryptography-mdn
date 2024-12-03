import PRNG from '../PRNG/index.js';
//
/**
    * ! This not constant memory
    * * This is example your memory,because your token saved in the your computer or base-memory.
**/
const arrTokens = {};
//
class AE {
    static encrypt(text, key) {
        let ciphertext = '';
        for (let i = 0; i < text.length; i++) {
            ciphertext += String.fromCharCode(text.codePointAt(i) ^ key.codePointAt(key.length % i));
        }
        const token = PRNG(8, 'binary');
        arrTokens[ciphertext] = {
            token: token
        };
        return {
            [ciphertext]: {
                token: token,
            }
        };
    }
    static decrypt(ciphertext, key, token) {
        if (!arrTokens[ciphertext]) {
            return false;
        }
        let text = '';
        for (let i = 0; i < ciphertext.length; i++) {
            text += String.fromCharCode(ciphertext.codePointAt(i) ^ key.codePointAt(key.length % i));
        }
        if (arrTokens[ciphertext].token == token) {
            return text;
        }
    }
}
'f@zd)K';
'.\x03\n\n\x15`1orld';
console.log(AE.encrypt('Hello World', PRNG(125, 'utf-8')));
console.log(AE.decrypt('.\x03\n\n\x15`1orld', 'f@zd)K', 'eds'));
