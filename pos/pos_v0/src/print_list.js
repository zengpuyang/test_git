function print_List(){

}
print_List.put_seal_shopping=function(inputs){
    var prime_out_put='';
    for(var i=0;i<inputs.length;i++){
        var min_pay=inputs[i].count*inputs[i].price;
        prime_out_put+='名称：'+inputs[i].name+'，数量：'+inputs[i].count+
            inputs[i].unit+'，单价：'+inputs[i].price.toFixed(2)+'(元)，小计：'+min_pay.toFixed (2)+'(元)\n';
        }
    return prime_out_put
};
print_List.money_total= function (inputs) {
    return _.reduce(_.map(inputs,function(item){return item.price*item.count}), function(memo, num){ return memo + num; }, 0).toFixed(2);
};
