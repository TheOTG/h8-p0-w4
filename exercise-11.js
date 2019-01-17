function shoppingTime(memberId, money) {

    if(memberId === '' || memberId === undefined) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }

    if(money < 50000) {
        return 'Mohon maaf, uang tidak cukup'
    }

    var change = money;
    var listItem = [{ item: 'Sepatu Stacattu', price: 1500000 }, { item: 'Baju Zoro', price: 500000 },
                        { item: 'Baju H&N', price: 250000 }, { item: 'Sweater Uniklooh', price: 175000 }, 
                        { item: 'Casing Handphone', price: 50000}];

    var result = {};
    var boughtItem = [];

    for(var i = 0; i < listItem.length; i++) {
        if(change >= listItem[i].price) {
            change -= listItem[i].price;
            boughtItem.push(listItem[i].item);
        }
    }

    result.memberId = memberId;
    result.money = money;
    result.listPurchased = boughtItem;
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