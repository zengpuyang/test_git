//TODO: Please write code in this file.
function printInventory(inputs) {
    var zongji= 0,shuchu='';
    console.log(inputs[1]);
    for(var i=0;i<inputs.length;i++){
        for(var h= 0;h<loadAllItems().length;h++){
            if(inputs[i]==loadAllItems()[h].barcode){
                break
            }
        }
        zongji+=loadAllItems()[h].price;
        var count=1,c=0;
        for(var k=0;k<i;k++){
            if(inputs[i]==inputs[k]){
                c=1
            }
        }
        if(c==1){continue}
        for(var j=i+1;j<inputs.length;j++){
            if(inputs[i]==inputs[j]){
                count+=1
            }
        }
        shuchu+='名称：'+loadAllItems()[h].name+'，数量：'+count+loadAllItems()[h].unit+
            '，单价：'+loadAllItems()[h].price.toFixed(2)+'(元)，小计：'+(loadAllItems()[h].price*count).toFixed(2)+'(元)\n';
    }
    console.log('***<没钱赚商店>购物清单***\n'+
        shuchu+
        '----------------------\n' +
        '总计：'+zongji.toFixed(2)+'(元)\n' +
        '**********************')
 }