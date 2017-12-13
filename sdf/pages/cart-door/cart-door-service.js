
var cartDoorService = {
    "price":function(idsdata,idsprice){
        //1 holds lcl_cart [ [] ]
        //2 holds [ [id,name,price] ...]
        var price = 0;
        for(i in idsdata){
            for(j in idsprice){
                if(idsdata[i][0] == idsprice[j].id){
                    price+=idsprice[j].price * idsdata[i][3];//price * qnty
                    break;
                }
            }
        }
        //console.log('price',price);
        return price;
    },
    "idsToDtlMapping":function(data,ids){
        // id_dtl_arr,lcl_cart_arr
        var prcssdArray = [];
        for(i in ids){
            for(j in data){
                if(ids[i][0] == data[j].id_kurti){
                    prcssdArray.push({'id':ids[i][0],'name':data[j].name,'price':data[j].prices[0]});
                }
            }

        }
        return prcssdArray;
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

    "clrSzeMap": function (data) {
        //[1,2,3,1,0] => [(product id),(color id),(size id),(quantity)] to [{"id":"1","color":"red","size":"s","qty":1},
        //{"id":"1","color":"red","size":"xxl","qty":1}]
        //color and size mapping in cart items
        for (i in data) {
            for (j in i) {
                data[i][1] = this.clrMap(data[i][1]);
                data[i][2] = this.szeMap(data[i][2]);
            }
        }
        return data;
    },
    "clrMap": function (clrId) {
        for (k in colorsMapping) {
            if (colorsMapping[k] == clrId) {
                return k;
            }
        }
    },
    "szeMap": function (szeId) {
        for (k in sizesMapping) {
            if (sizesMapping[k] == szeId) {
                return k;
            }
        }
    }

}