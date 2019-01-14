function digitPerkalianMinimum(angka) {
    var temp = "";
    var tempArray = [];
    var result = 0;

    for(var i = 1; i <= angka; i++) {
        if(angka % i === 0) {
            tempArray.push(temp + angka / i + i);
        }
    }

    result = tempArray[0].length;

    for(var j = 1; j < tempArray.length; j++) {
        if(tempArray[j].length < tempArray[j - 1].length) {
            result = tempArray[j].length;
        }
    }

    return result;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2