var userOrdersService = {
    "serviceMasterOrder": {},
    "idsArray": [],
    /*
    
    Purpose: to segregate data in months->dates->orders.
    Return: var masterOrders = {
            "months": mM,
            "dates": mD,
            "orders": mO
        };

    */
    "transformOrders": function (orders) {

        var mM = [];//master Months
        var mD = [];//master Dates
        var mO = [];//master Orders

        var lclD = [];//local date
        var lclSO = [];//local Super Order
        var lclO = [];//local Order
        for (var i in orders) {
            //forming id array
            for (var k in orders[i].orders) {
                this.idsArray.push(orders[i].orders[k][0]);
            }
            //forming id array
            //console.log('---------->>>>>>>>>',orders[i].orders,orders[i].tid);
            /* for(var m in orders[i].orders){
                if(orders[i].orders[m][6] == 4){
                    console.log('---------->>>>>>>>>',orders[i].orders);
                }} */

            if (i == 0) {
                mM.push(this.toMonth(new Date(orders[i].order_date).getMonth() + 1)
                    + " - " + new Date(orders[i].order_date).getFullYear());
                lclD.push(new Date(orders[i].order_date));
                lclO.push(this.toDateObj(orders[i]));

            } else {

                var crrO = orders[i];
                var lstO = orders[parseInt(i) - 1];
                var crrD = new Date(crrO.order_date);
                var lstD = new Date(lstO.order_date);
                var crrM = crrD.getMonth() + 1;
                var lstM = lstD.getMonth() + 1;
                var crrDy = crrD.getDate();//current day(1-31)
                var lstDy = lstD.getDate();//last day(1-31)
                if (crrM == lstM) {
                    if (crrDy == lstDy) {//days are equal
                        lclO.push(this.toDateObj(crrO));
                    }
                    else {//unequal days
                        // mD.push( lclD );
                        // lclD = [];
                        lclD.push(crrD);
                        lclSO.push(lclO);
                        lclO = [];
                        lclO.push(this.toDateObj(crrO));
                    }
                }
                else {//new month is different
                    mM.push(this.toMonth(crrM) + ' - ' + crrD.getFullYear());

                    mD.push(lclD);
                    lclD = [];
                    lclD.push(crrD);

                    lclSO.push(lclO);
                    mO.push(lclSO);
                    lclSO = [];
                    lclO = [];
                    lclO.push(this.toDateObj(crrO));
                }
            }



        }
        if (lclD.length > 0) {
            mD.push(lclD);
        }
        if (lclO.length > 0) {
            lclSO.push(lclO);
            mO.push(lclSO);
        }

        var masterOrders = {
            "months": mM,
            "dates": mD,
            "orders": mO
        };
        // console.log('al-habibi', masterOrders);
        this.serviceMasterOrder = masterOrders;
        return masterOrders;


    },
    "returnValeOrders": function (indvOrders) {
    },
    "toDateObj": function (order) {
        for (var i in order.ship_date) {
            order.ship_date[i] = new Date(order.ship_date[i]);
        }
        return order;

    },
    "toMonth": function (monthNo) {
        switch (monthNo) {
            case 1:
                return 'Jan';
                break;

            case 2:
                return 'Feb';
                break;

            case 3:
                return 'March';
                break;

            case 4:
                return 'April';
                break;

            case 5:
                return 'May';
                break;

            case 6:
                return 'June';
                break;

            case 7:
                return 'July';
                break;

            case 8:
                return 'August';
                break;

            case 9:
                return 'Sept'
                break;

            case 10:
                return 'Oct'
                break;

            case 11:
                return 'Nov';
                break;

            case 12:
                return 'Dec'
                break;

        }

    },
    "display": function () {
        console.log('from service', this.serviceMasterOrder);
    },
    "idsString": function (data) {
        var prcssdArray;
        for (i in data) {
            if (i == 0) {
                prcssdArray = data[0];
            } else {
                prcssdArray = prcssdArray + ',' + data[i];
            }
        }
        return prcssdArray;

    },
    "transformOrders2": function (orders) {


        var mM = [];//master Months
        var mD = [];//master Dates
        var mO = [];//master Orders

        var lclD = [];//local date
        var lclSO = [];//local Super Order
        var lclO = [];//local Order
        for (var i in orders) {
            for (var k in orders[i].orders) {
                this.idsArray.push(orders[i].orders[k][0]);
            }
            var init = 0;

            // console.log('---------->>>>>>>>>',orders[i].orders,orders[i].tid);
            if (this.filter(orders[i])) {
                // console.log('---------->>>>>>>>>',orders[i].orders);
                console.log('~~~~~~~~~~~~~');


                if (init == 0) {
                    mM.push(this.toMonth(new Date(orders[i].order_date).getMonth() + 1)
                        + " - " + new Date(orders[i].order_date).getFullYear());
                    lclD.push(new Date(orders[i].order_date));
                    lclO.push(this.toDateObj(orders[i]));

                } else {

                    var crrO = orders[i];
                    var lstO = orders[parseInt(i) - 1];
                    var crrD = new Date(crrO.order_date);
                    var lstD = new Date(lstO.order_date);
                    var crrM = crrD.getMonth() + 1;
                    var lstM = lstD.getMonth() + 1;
                    var crrDy = crrD.getDate();//current day(1-31)
                    var lstDy = lstD.getDate();//last day(1-31)
                    if (crrM == lstM) {
                        if (crrDy == lstDy) {//days are equal
                            lclO.push(this.toDateObj(crrO));
                        }
                        else {//unequal days
                            // mD.push( lclD );
                            // lclD = [];
                            lclD.push(crrD);
                            lclSO.push(lclO);
                            lclO = [];
                            lclO.push(this.toDateObj(crrO));
                        }
                    }
                    else {//new month is different
                        mM.push(this.toMonth(crrM) + ' - ' + crrD.getFullYear());

                        mD.push(lclD);
                        lclD = [];
                        lclD.push(crrD);

                        lclSO.push(lclO);
                        mO.push(lclSO);
                        lclSO = [];
                        lclO = [];
                        lclO.push(this.toDateObj(crrO));
                    }
                }
                init = 1;
            }


        }
        if (lclD.length > 0) {
            mD.push(lclD);
        }
        if (lclO.length > 0) {
            lclSO.push(lclO);
            mO.push(lclSO);
        }

        var masterOrders = {
            "months": mM,
            "dates": mD,
            "orders": mO
        };
        console.log('al-habibi', masterOrders);
        this.serviceMasterOrder = masterOrders;
        return masterOrders;


    },
    "filter": function (indvOrder) {
        //  console.log(1,indvOrder.orders);
        loop1:
        for (var i in indvOrder.orders) {
            // console.log(3,indvOrder.orders[i],indvOrder.tid);

            for (var j in indvOrder.orders[i]) {
                console.log(7, indvOrder.orders[i][6], indvOrder.tid);
                if (indvOrder.orders[i][6] == 4) {
                    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$');
                    return true;
                }

            }

        }

    }



}
