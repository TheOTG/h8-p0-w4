function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    if(arrPenumpang.length === 0) {
        return [];
    }

    var result = [];

    for(var i = 0; i < arrPenumpang.length; i++) {
        var tagihan = {};
        var count = 0;
        var temp = false;

        tagihan.penumpang = arrPenumpang[i][0];
        tagihan.naikDari = arrPenumpang[i][1];
        tagihan.tujuan = arrPenumpang[i][2];

        for(var j = 0; j < rute.length; j++) {
            if(rute[j] === tagihan.naikDari) {
                temp = true;
            }
            if(rute[j] === tagihan.tujuan) {
                break;
            }
            if(temp === true) {
                count++;
            }
        }

        tagihan.bayar = 2000 * count;
        result.push(tagihan);
    }

    return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]