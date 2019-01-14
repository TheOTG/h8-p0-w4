function ubahHuruf(kata) {
    var result = '';

    for(var i = 0; i < kata.length; i++) {
        switch(kata[i]) {
            case 'a':
                result += 'b';
                break;
            case 'b':
                result += 'c';
                break;
            case 'c':
                result += 'd';
                break;
            case 'd':
                result += 'e';
                break;
            case 'e':
                result += 'f';
                break;
            case 'f':
                result += 'g';
                break;
            case 'g':
                result += 'h';
                break;
            case 'h':
                result += 'i';
                break;
            case 'i':
                result += 'j';
                break;
            case 'j':
                result += 'k';
                break;
            case 'k':
                result += 'l';
                break;
            case 'l':
                result += 'm';
                break;
            case 'm':
                result += 'n';
                break;
            case 'n':
                result += 'o';
                break;
            case 'o':
                result += 'p';
                break;
            case 'p':
                result += 'q';
                break;
            case 'q':
                result += 'r';
                break;
            case 'r':
                result += 's';
                break;
            case 's':
                result += 't';
                break;
            case 't':
                result += 'u';
                break;
            case 'u':
                result += 'v';
                break;
            case 'v':
                result += 'w';
                break;
            case 'w':
                result += 'x';
                break;
            case 'y':
                result += 'z';
                break;
            case 'z':
                result += 'a';
                break;
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