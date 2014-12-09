function printInventory(inputs){
    var result='***<没钱赚商店>购物清单***\n'+
        print_List.put_seal_shopping(inputs)+
        '----------------------\n' +
        '总计：'+print_List.money_total(inputs)+'(元)\n' +
        '**********************';
    console.log(result)
}

