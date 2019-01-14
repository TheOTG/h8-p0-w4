function shoppingTime(memberId, money) {

    if(memberId === '' || memberId === undefined) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }

    if(money < 50000) {
        return 'Mohon maaf, uang tidak cukup'
    }

    var change = money;
    var listItem = [];
    var result = {};

    if(change >= 1500000) {
        change -= 1500000;
        listItem.push('Sepatu Stacattu');
    }
    if(change >= 500000) {
        change -= 500000;
        listItem.push('Baju Zoro');
    }
    if(change >= 250000) {
        change -= 250000;
        listItem.push('Baju H&N');
    }
    if(change >= 175000) {
        change -= 175000;
        listItem.push('Sweater Uniklooh');
    }
    if(change >= 50000) {
        change -= 50000;
        listItem.push('Casing Handphone');
    }

    result.memberId = memberId;
    result.money = money;
    result.listPurchased = listItem;
    result.changeMoney = change;

    return result;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//[ 'Sepatu Stacattu',
//'Baju Zoro',
//'Baju H&N',
//'Sweater Uniklooh',
//'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//[ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja