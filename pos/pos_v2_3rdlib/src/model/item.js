function Item(barcode, name, unit, price) {
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price || 0.00;
}
Item.find_item=function(item_code){
    var code=_.findLastIndex(loadAllItems(), {
        'barcode': item_code
    });
    return loadAllItems()[code]
};
Item.group_input=function(inputs_){
    var group_Items= _.toArray(_.groupBy(inputs_,function(code){
        return code
    }));
    _.map(group_Items,function(codes){
        if(codes[0].length==10){
            codes[0]=[codes[0],codes.length]
        }
        else{
            codes[0]=[codes[0].substr(0,10),codes[0].substr(11)*codes.length]
        }
    });
    return group_Items
};
Item.prototype.pay_item_out = function(input){
    var out_put='',prime_cost=0,payCost=0;
    for(var num=0;num<input.length;num++) {
        var item_count=input[num][0][1],Code=input[num][0][0];
        var nowItem=Item.find_item(Code),minPay=(item_count-parseInt((item_count)/3))*nowItem.price;
        prime_cost+=nowItem.price*item_count;
        payCost+=minPay;
        out_put+='名称：'+nowItem.name+'，数量：'+item_count+nowItem.unit+'，单价：'+
            nowItem.price.toFixed(2)+'(元)，小计：'+minPay.toFixed(2)+'(元)\n';
    }
    this.prime_out_put=out_put;
    this.need_paycost=payCost.toFixed(2);
    this.save_money=(prime_cost-payCost).toFixed(2)
};
Item.if_free=function(item_CountCode) {
    var free_item='';
    for(var num=0;num<item_CountCode.length;num++){
        var item_count=item_CountCode[num][0][1],Code=item_CountCode[num][0][0];
        if(item_count>=3 && loadPromotions.call()[0].barcodes.indexOf(Code)!=-1 ){
            var nowItem=Item.find_item(Code);
            free_item+='名称：'+nowItem.name+'，数量：'+parseInt(item_count/3)+nowItem.unit+'\n';
        }
    }
    return free_item
};