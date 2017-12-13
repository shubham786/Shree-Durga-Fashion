var ordersService = {
    "finalMasterOrder": {},
    "processedOrder": [],
    "noOfUnits": 0,
    "noOfOrders": 0,
    "monthTotal": [],
    "dayTotal": [],
    "price":0,

    "register": function (ordersArray) {
        this.processedOrder = ordersArray;
        return ordersService;
    },
    /*
        Purpose: to segregate data in months->dates->orders.
        Return: var masterOrders = {
                "months": mM,
                "dates": mD,
                "orders": mO
            };

    */
    "output": function () {
        return {
            "finalMasterOrder": this.finalMasterOrder,
            "noOfUnits": this.noOfUnits,
            "noOfOrders": this.noOfOrders,
            "price":this.price
        };
    },
    "resetCounts": function () {
        this.noOfUnits = 0;
        this.noOfOrders = 0;
        this.price = 0;
        return ordersService;

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



    "transformOrders": function (orders) {
        var mM = [];//master Months
        var mD = [];//master Dates
        var mO = [];//master Orders
        var mP = [];//master Price
        var lclD = [];//local date
        var lclSO = [];//local Super Order
        var lclO = [];//local Order
        var init = 0;
        var orders = this.processedOrder;

        for (var i in orders) {
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
        this.finalMasterOrder = masterOrders;
        return ordersService;
    },

    "paymentDone": function (id) {
        //only returns object based on  payment_status
        if (id != -1) {//for reset status
            var arrOrders = this.processedOrder;
            var newArr = [];
            for (var k in arrOrders) {
                var flg = true;
                for (var i in arrOrders[k].payment_status) {
                    //console.log('-$$$$$-',arrOrders[k].payment_status);
                    //this.userPaymentDoneCountRows++;
                    if (arrOrders[k].payment_status[i] == id) {
                        // console.log('ddd', arrOrders[k]);
                        if (flg) {
                            newArr.push(arrOrders[k]);
                            // console.log('$$',newArr[0]);
                            //  console.log('inner', (newArr.length));

                            // flg = false;
                        }
                        flg = false;
                    }
                }
            }

            this.processedOrder = newArr;
        }
        return ordersService;
    },
    "dateFromSort": function (frmDate) {
        if (frmDate != -1) {

            var arrOrders = this.processedOrder;
            var newArr = [];


            var lstYear = frmDate.getFullYear();
            var lstMonth = frmDate.getMonth();
            var lstDay = frmDate.getDate();
            console.log('from called');

            for (var k in arrOrders) {
                var crrDate = new Date(arrOrders[k].order_date);
                var crrYear = crrDate.getFullYear();
                var crrMonth = crrDate.getMonth();
                var crrDay = crrDate.getDate();
                if (crrYear >= lstYear && crrMonth >= lstMonth && crrDay >= lstDay) {
                    newArr.push(arrOrders[k]);
                }
            }
            this.processedOrder = newArr;
        }
        return ordersService;

    },
    "dateToSort": function (frmDate) {
        if (frmDate != -1) {

            var arrOrders = this.processedOrder;
            var newArr = [];


            var lstYear = frmDate.getFullYear();
            var lstMonth = frmDate.getMonth();
            var lstDay = frmDate.getDate();

            for (var k in arrOrders) {
                var crrDate = new Date(arrOrders[k].order_date);
                var crrYear = crrDate.getFullYear();
                var crrMonth = crrDate.getMonth();
                var crrDay = crrDate.getDate();
                if (crrYear <= lstYear && crrMonth <= lstMonth && crrDay <= lstDay) {
                    newArr.push(arrOrders[k]);
                }
            }
            this.processedOrder = newArr;
        }
        return ordersService;

    },

    "statusSort": function (id) {
        //only returns object based on  deli_status
        if (id != -1) {
            var arrOrders = this.processedOrder;
            var newArr = [];
            for (var k in arrOrders) {
                var flg = true;
                for (var i in arrOrders[k].deli_status) {
                    //console.log('-$$$$$-',arrOrders[k].payment_status);
                    //this.userPaymentDoneCountRows++;
                    if (arrOrders[k].deli_status[i] == id) {
                        // console.log('ddd', arrOrders[k]);
                        if (flg) {
                            newArr.push(arrOrders[k]);
                        }
                        flg = false;
                    }
                }
            }
            this.processedOrder = newArr;
        }

        return ordersService;

    },
    "paymentStatusSort": function (status, payment) {
        //only returns object based on  payment_status + deli_status
        var arrOrders = this.processedOrder;
        var newArr = [];
        for (var k in arrOrders) {
            var flg = true;
            for (var i in arrOrders[k].deli_status) {
                //console.log('-$$$$$-',arrOrders[k].payment_status);
                //this.userPaymentDoneCountRows++;
                if (arrOrders[k].deli_status[i] == status &&
                    arrOrders[k].payment_status[i] == payment
                ) {
                    // console.log('ddd', arrOrders[k]);
                    if (flg) {
                        newArr.push(arrOrders[k]);
                    }
                    flg = false;
                }
            }
        }
        this.processedOrder = newArr;

        return ordersService;

    },
    "counts": function (payment, status) {
        //only returns object based on  payment_status
        var arrOrders = this.processedOrder;
        for (var k in arrOrders) {
            var flg = true;
            for (var i in arrOrders[k].payment_status) {
                if ((payment == -1) && (status == -1)) {
                    if (flg) {
                        this.noOfOrders++;
                    }
                    this.price += ( arrOrders[k].orders[i][5] * arrOrders[k].orders[i][3] );
                 //   console.log('price',arrOrders[k].orders[i][5]);
                    flg = false;
                  //  this.noOfUnits++;
                  this.noOfUnits+= parseInt( arrOrders[k].orders[i][3] );
                   
                }
                else if ((payment != -1) && (status == -1)) {
                    if (arrOrders[k].payment_status[i] == payment) {
                        if (flg) {
                            this.noOfOrders++;
                        }
                        //this.price += arrOrders[k].orders[i][5];
                        this.price += ( arrOrders[k].orders[i][5] * arrOrders[k].orders[i][3] );
                        flg = false;
                        //this.noOfUnits++;
                        this.noOfUnits+= parseInt( arrOrders[k].orders[i][3] );
                    }
                }
                else if ((payment == -1) && (status != -1)) {
                    if (arrOrders[k].deli_status[i] == status) {
                        if (flg) {
                            this.noOfOrders++;
                        }
                        //this.price += arrOrders[k].orders[i][5];
                        this.price += ( arrOrders[k].orders[i][5] * arrOrders[k].orders[i][3] );
                        flg = false;
                       // this.noOfUnits++;
                       this.noOfUnits+= parseInt( arrOrders[k].orders[i][3] );
                    }

                }
                else if ((payment != -1) && (status != -1)){
                    if (arrOrders[k].deli_status[i] == status &&
                        arrOrders[k].payment_status[i] == payment                    
                    ) {
                        if (flg) {
                            this.noOfOrders++;
                        }
                       // this.price += arrOrders[k].orders[i][5];
                       this.price += ( arrOrders[k].orders[i][5] * arrOrders[k].orders[i][3] );
                        flg = false;
                        //this.noOfUnits++;
                        this.noOfUnits+= parseInt( arrOrders[k].orders[i][3] );
                    }

                                                            
                }

            }
        }
        return ordersService;
    }






}//***root
