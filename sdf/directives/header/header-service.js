var headerService = {
    "price":function(idsdata,idsprice){//lclData,itemDetails
        var price = 0;
        for(i in idsdata){
            for(j in idsprice){
                if(idsdata[i][0] == idsprice[j].id){
                    price+=idsprice[j].price * idsdata[i][3];
                    break;
                }
            }
        }
        console.log('price',price);
        return price;
    },
    
    "cartIds": function (data) {
        var prcssdArray;
        for (i in data) {
            if (i == 0) {
                prcssdArray = data[i][0];
            } else {
                prcssdArray = prcssdArray + ',' + data[i][0];
            }
        }
        return prcssdArray;

    },
    "idsToDtlMapping":function(data,ids){
        var prcssdArray = [];
        for(i in ids){
            for(j in data){
                if(ids[i][0] == data[j].id_kurti){
                    prcssdArray.push({'id':ids[i][0],'name':data[j].name,'price':data[j].prices[0]});
                }
            }

        }
        console.log('dddddd',prcssdArray);
        return prcssdArray;
    }
}