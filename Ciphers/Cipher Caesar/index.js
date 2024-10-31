function CipherCaesar(text, pos) {
    const alphabet = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `y`, `z`]
    let str = ''
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (text[i] == alphabet[j]) {
                str += alphabet[j + pos > alphabet.length ? (j + pos) - alphabet.length : j + pos]
            }
        }
    }
    return str
}
console.log(CipherCaesar('adaz', 3))