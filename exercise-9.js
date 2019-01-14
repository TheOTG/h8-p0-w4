function checkAB(num) {
    for(var i = 0; i < num.length; i++) {
        var startA = false;
        var startB= false;

        if(num[i] === 'a') {
            startA = true;
        }
        if(num[i] === 'b') {
            startB = true;
        }

        if((startA || startB === true) && (num[i + 4] !== undefined)) {
            if(startA === true && num[i + 4] === 'b') {
                return true;
            }
            if(startB === true && num[i + 4] === 'a') {
                return true;
            }        
        }
    }

    return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false