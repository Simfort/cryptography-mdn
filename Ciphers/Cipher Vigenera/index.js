function CipherVigenera(text, key, letter) {
    const alphabet = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `y`, `z`]
    let pos = new Array(key.length)
    let posLetter
    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] == letter) {
            posLetter = i
        }
    }
    for (let i = 0; i < key.length; i++) {
        for (let j = 0; i < alphabet.length; j++) {
            if (key[i] === alphabet[j]) {
                if (j < posLetter) {
                    pos.push(j - posLetter)
                } else {
                    pos.push(posLetter - j)
                }
            }
        }
    }

}