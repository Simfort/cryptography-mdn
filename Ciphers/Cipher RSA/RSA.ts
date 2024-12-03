function getRandomSimpleNum(radius: number) {
    let num = 0
    while (num % 2 == 0) {
        num = Math.floor(Math.random() * radius)
    }
    return num
}
function gcd(x: number, y: number, s1 = 1, s2 = 0, t1 = 0, t2 = 1): any {
    let q = Math.floor(x / y),
        s1copy = s1,
        t1copy = t1;
    return (x % y === 0) ? y : gcd(y, x % y, s1 = s2, s2 = s1copy - q * s2, t1 = t2, t2 = t1copy - q * t2);
}
function RSAkeys(p: number, q: number) {
    const N = p * q
    const elN = (p - 1) * (q - 1)
    const e = getRandomSimpleNum(elN)
    const d = gcd(elN, e)
    return {
        open: [e, N],
        close: [d, N]
    }
}

const p = 6
const q = 10
const N = p * q
const Elyr = (p - 1) * (q - 1)
const e = 35
// { open: [57, 820], close: [19, 820] }
console.log(RSAkeys(41, 20))
// 21
console.log(4.82000073683468e+49 % 820)