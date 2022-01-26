const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '*': ' ',
};

function decode(expr) { 
    const splitExpr = [];
    const lettersEncrypted = [];
    const lettersDecrypted = [];

    for (let i = 0; i < expr.length; i += 10) {
        splitExpr.push(expr.slice(i, i + 10));
        lettersEncrypted.push(new Array());
    }

    splitExpr.forEach((part, ind) => {
        if (part.includes('*')) {
            lettersEncrypted[ind].push('*')
        } else {
            for (let i = 0; i < 10; i += 2) {
                const symbol = part.slice(i, i+2);
                if(symbol !== '00') lettersEncrypted[ind].push(symbol === '10' ? '.' : '-')
            }
        }
    })

    lettersEncrypted.forEach(letter => lettersDecrypted.push(MORSE_TABLE[letter.join('')]));

    return lettersDecrypted.join('');
}

module.exports = {
    decode
}