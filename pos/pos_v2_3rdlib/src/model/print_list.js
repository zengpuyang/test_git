function PrintList(){

}
PrintList.put_seal_shopping=function(inputs){
    var item = new Item();
    var now_item=Item.group_input(inputs);
    item.pay_item_out(now_item);
    var free_item_list = Item.if_free(now_item);

    console.log('***<没钱赚商店>购物清单***\n'+
        '打印时间：'+moment().format('YYYY[年]MM[月]DD[日] HH:mm:ss')+'\n'+
        '----------------------\n' +
        item.prime_out_put+
        '----------------------\n'+
        '挥泪赠送商品：\n'+
        free_item_list+
        '----------------------\n'+
        '总计：'+item.need_paycost+'(元)\n'+
        '节省：'+item.save_money+'(元)\n'+
        '**********************')
};