function urutkanAbjad(str) {
    var result = str.split('');

    // manual sort ascending
    for(var i = 0; i < result.length; i++) {
        for(var j = i; j < result.length; j++) {
            var temp = '';
            if(result[j] < result[i]) {
                temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }

    return result.join('');
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'