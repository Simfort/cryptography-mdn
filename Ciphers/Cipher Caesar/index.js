function CipherCaesar(text, swap, alphabet) {
    const alphabetPos = {}
    const alphabetLetter = {}
    for (let i = 0; i < alphabet.length; i++) {
        alphabetPos[i] = alphabet[i]
        alphabetLetter[alphabet[i]] = i
    }
    let str = ''
    for (let i = 0; i < text.length; i++) {
        let letter = alphabetLetter[text[i]]
        let sum = letter + swap
        while (sum > alphabet.length) {
            sum -= alphabet.length
        }
        str += alphabetPos[sum]
    }
    return str
}
const alphabet = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `y`, `z`]
console.log(CipherCaesar('aasdsdsaddaz', 113, alphabet))