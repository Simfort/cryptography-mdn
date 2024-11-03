function CipherOneNote(input, key) {
    let output = "";
    for (i = 0; i < input.length; i++) {
        let inp = input.charCodeAt(i);
        let k = key.charCodeAt(i);
        console.log(k, inp ^ k)
        output += String.fromCharCode(inp ^ k);
    }
    return output
}
console.log(CipherOneNote('sdsds', 'snake'))