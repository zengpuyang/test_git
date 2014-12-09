//TODO: Please write code in this file.
function printInventory(inputs) {
    var zongji=0,shuchu='',free='',jiesheng= 0;
    for(var i=0;i<inputs.length;i++){
        inputs[i]+='-1';
        var arr=inputs[i].split('-',2);
        var h=_.findLastIndex(loadAllItems(), {
            'barcode': arr[0]
        });
        zongji+=(loadAllItems()[h]).price*arr[1];
        var count=1,c=0;
        if((_.first(inputs,i)).indexOf(inputs[i])!=-1){continue}
        for(var j=i+1;j<inputs.length;j++){
            if(arr[0]==inputs[j]){
                count+=1
            }
        }
        count+=arr[1]-1;
        var sjcount=count;
        if(count>=3 && loadPromotions.call()[0].barcodes.indexOf(arr[0])!=-1 ){
            c=parseInt(count/3);zongji-=c*loadAllItems()[h].price;sjcount=count-c;
            free+='名称：'+loadAllItems()[h].name+'，数量：'+c+loadAllItems()[h].unit+'\n';
            jiesheng+=c*loadAllItems()[h].price}
        shuchu+='名称：'+loadAllItems()[h].name+'，数量：'+count+loadAllItems()[h].unit+
            '，单价：'+loadAllItems()[h].price.toFixed(2)+'(元)，小计：'+(loadAllItems()[h].price*sjcount).toFixed(2)+'(元)\n';
    }
    console.log('***<没钱赚商店>购物清单***\n'+
        shuchu+
        '----------------------\n'+
        '挥泪赠送商品：\n'+
        free+
        '----------------------\n'+
        '总计：'+zongji.toFixed(2)+'(元)\n'+
        '节省：'+jiesheng.toFixed(2)+'(元)\n'+
        '**********************')
 }