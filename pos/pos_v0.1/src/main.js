//TODO: Please write code in this file.
function printInventory(inputs) { var zongji= 0,shuchu='';
    for(var i=0;i<inputs.length;i++){
        zongji+=inputs[i].price;
        var count=1,c=0;
        for(var k=0;k<i;k++){if(inputs[i].barcode==inputs[k].barcode){c=1}}
        if(c==1){continue}
        for(var j=i+1;j<inputs.length;j++){if(inputs[i].barcode==inputs[j].barcode){count+=1}}
        shuchu+='名称：'+inputs[i].name+'，数量：'+count+inputs[i].unit+
            '，单价：'+inputs[i].price.toFixed(2)+'(元)，小计：'+(inputs[i].price*count).toFixed(2)+'(元)\n';
    }
    console.log('***<没钱赚商店>购物清单***\n'+
        shuchu+
        '----------------------\n' +
        '总计：'+zongji.toFixed(2)+'(元)\n' +
        '**********************')
 }