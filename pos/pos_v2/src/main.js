//TODO: Please write code in this file.
function printInventory(inputs) {
    var zongji=0,shuchu='',free='',jiesheng= 0;
    for(var i=0;i<inputs.length;i++){
        inputs[i]+='-1';
        var arr=inputs[i].split('-',2);
        for(var h=0;h<loadAllItems().length;h++){
            if(loadAllItems()[h].barcode==arr[0]){
                break
            }
        }
        zongji+=(loadAllItems()[h]).price*arr[1];
        var count=1,c=0;
        for(var k=0;k<i;k++){
            if(inputs[i]==inputs[k]){
                c=1
            }
        }
        if(c==1){continue}
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
    var date = function (num) {
        return num < 10 ? '0' + num : num;
    };
    console.log('***<没钱赚商店>购物清单***\n'+
        '打印时间：'+date((new Date).getFullYear())+ '年' +
        date((new Date).getMonth() + 1)+ '月' +
        date((new Date).getDate()) + '日 ' +
        date((new Date).getHours())+ ':' +
        date((new Date).getMinutes())+ ':' +
        date((new Date).getSeconds())+'\n'+
        '----------------------\n' +
        shuchu+
        '----------------------\n'+
        '挥泪赠送商品：\n'+
        free+
        '----------------------\n'+
        '总计：'+zongji.toFixed(2)+'(元)\n'+
        '节省：'+jiesheng.toFixed(2)+'(元)\n'+
        '**********************')
}
