function ubahHuruf(kata) {
    var result = '';
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var newAlphabet = 'bcdefghijklmnopqrstuvwxyza'

    for(var i = 0; i < kata.length; i++) {
        for(var j = 0; j < alphabet.length; j++) {
            if(kata[i] === alphabet[j]) {
                result += newAlphabet[j];
            }
        }
    }

    return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu