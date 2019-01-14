function cariModus(arr) {
    var result = 0;
    var frequency = {};
    var maxFrequency = 0;
    var checkSame = true;

    for(var i = 1; i < arr.length; i++) {
        if(arr[0] !== arr[i]) {
            checkSame = false;
            break;
        }
    }

    if(checkSame === true) {
        return -1;
    }

    for(var j = 0; j < arr.length; j++) {
        frequency[arr[j]] = (frequency[arr[j]] || 0) + 1

        if(frequency[arr[j]] > maxFrequency) {
            maxFrequency = frequency[arr[j]];
            result = arr[j];
        }
    }

    if(maxFrequency === 1) {
        return -1;
    }
    
    for(var k = 0; k < arr.length; k++) {
        if(frequency[arr[k]] === maxFrequency) {
            result = arr[k];
            return result;
        }
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1