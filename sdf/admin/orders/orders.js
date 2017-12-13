
m_admin.controller('c_orders', function (s_http, $timeout, $scope, $window, $http, $rootScope, $location, $route) {
    console.log('--===c_orders===--');
    //variables
    $scope.orders;
    //$scope.myDate = function (date) { /*console.log('-).',date);console.log('+',new Date(date));*/return (new Date('00 0 0000')); }
    $scope.status = [{ "id": 0, "value": 'Ordered' },
    { "id": 1, "value": 'Shipped' },
    { "id": 2, "value": 'Replace Product' },
    { "id": 3, "value": 'Cancelled' },
    { "id": 4, "value": 'Money Back' }
        , { "id": 5, "value": 'Delivered' }
        , { "id": 6, "value": 'Money Back Done' }
        , { "id": 7, "value": 'Replacement Done' }
        , { "id": 8, "value": 'Out of Stock' }
    ];
    $scope.statusValuesArrInSort = [{ "id": 0, "value": 'Ordered' }, { "id": 1, "value": 'Shipped' },
    { "id": 2, "value": 'Replace Product' }, { "id": 3, "value": 'Cancelled' }, { "id": 4, "value": 'Money Back' }
        , { "id": 5, "value": 'Delivered' }
        , { "id": 6, "value": 'Money Back Done' }
        , { "id": 7, "value": 'Replacement Done' }
        , { "id": 8, "value": 'Out of Stock' }
        , { "id": -1, "value": 'Default' }
    ];

    $scope.paymentStatusValues = [{ "id": 0, "value": 'No' }, { "id": 1, "value": 'Yes' }];
    $scope.paymentDoneArrInSort = [{ "id": 0, "value": 'No' }, { "id": 1, "value": 'Yes' }, { "id": -1, "value": 'Default' }];


    $scope.change = {};
    $scope.change.id;
    $scope.change.params = { deliveryStatus: false, paymentStatus: false, shippingDate: false, trackid: false };
    $scope.del_me = 'Ordered';
    $scope.deli_status = new Array();
    $scope.payment_status = new Array();
    $scope.shipping_date = new Array();
    $scope.track_id = new Array();
    $scope.al_habibi = 3;
    $scope.bogusFlg = false;
    bogusEntrySavedSuccessFlg = false;
    $scope.dbOpSuccess = false;
    $scope.dbOpFail = false;
    $scope.commentsSectinFlg = false;
    var ordersBackUp;//Holds all the orders table array of objects.
    $scope.masterOrdersCopy = {};// Holds the unchagned values used while saving the record.
    $scope.kurtiIdQtyCopy = [];




    //state

    setPaymentStatusParams();
    setStatusParams();
    setDateFrmParams();
    setDateToParams();
    var opr_str = { "operation": "orders" };
    opr_str = JSON.stringify(opr_str);
    s_http.s_http_fun(opr_str, function (resp) {
        //$scope.constOrders = resp.data.data;

        ordersBackUp = resp.data.data;
        var dynamic = ordersService.register(ordersBackUp).resetCounts().dateFromSort($scope.frm_date_dataCopy).
            dateToSort($scope.to_date_dataCopy).
            statusSort($scope.statusValue).paymentDone($scope.paymentDoneValue).
            counts($scope.paymentDoneValue, $scope.statusValue).
            transformOrders().
            output();
        var tmp = dynamic.finalMasterOrder;
        $scope.masterOrders = tmp;
        angular.copy(tmp, $scope.masterOrdersCopy);

        $scope.noOfUnits = dynamic.noOfUnits;
        $scope.noOfOrders = dynamic.noOfOrders;
        $scope.price = dynamic.price;
        //ordersService.register(resp.data.data).transformOrders();


    });
    //***state
    //functions



    $scope.resetChangeParams = function () {
        $scope.change.params.deliveryStatus = false;
        $scope.change.params.paymentStatus = false;
        $scope.change.params.shippingDate = false;
        $scope.change.params.trackid = false;
    }
    $scope.change.called = function (id, param) {
        console.log('bhai id', id);
        if (id != $scope.change.id) {
            $scope.change.id = id;
            $scope.resetChangeParams();
        }
        if (param == 'deliveryStatus') { $scope.change.params.deliveryStatus = true; }
        if (param == 'paymentStatus') { $scope.change.params.paymentStatus = true; }
        if (param == 'shippingDate') { $scope.change.params.shippingDate = true; }
        if (param == 'trackid') { $scope.change.params.trackid = true; }
        console.log('delstatus', $scope.change.params.deliveryStatus);
        console.log('paymentstatus', $scope.change.params.paymentStatus);
        console.log('ship date', $scope.change.params.shippingDate);
        console.log('trackid', $scope.change.params.trackid);

    }
    $scope.frm_date = function (frm_date_data) {
        $scope.frm_date_data = frm_date_data;
        console.log('from date changed');
        console.log(frm_date_data);
    }
    $scope.to_date = function (to_date) {
        $scope.to_date_data = to_date;
        console.log('to_date', to_date);
    }
    $scope.shubham = function () {
    }
    $scope.save = function (mIndex, dIndex, index, id_orders) {
        console.log('id of orders table', id_orders);
        /* console.log('mIndex', mIndex);
        console.log('dIndex', dIndex);
        console.log('index', index); */
        /* console.log('deli status', $scope.masterOrders.orders[mIndex][dIndex][index].deli_status);
        console.log('payment status', $scope.masterOrders.orders[mIndex][dIndex][index].payment_status);
        console.log('ship date', $scope.masterOrders.orders[mIndex][dIndex][index].ship_date);
        console.log('ship date', $scope.masterOrders.orders[mIndex][dIndex][index].track_id); */
        /* 
                console.log('``statues``');
                
                field = id + 'trackid';
                //field = 'one';
                console.log(id);
                console.log('deli_status', $scope.deli_status[id]);
                console.log('payment_status', $scope.payment_status[id]);
                console.log('track_id', $scope.track_id[id]);
                console.log('shipping_date', $scope.shipping_date[id]);
         */
        //query = 'orders_table_form.' + field + '.$dirty';
        //console.log($scope.orders_table_form[field].$dirty);
        //$scope.orders_table_form[field].$setPristine();
        //console.log( $(field).removeClass( "ng-dirty" ) );
        console.log('deli status changed', $scope.masterOrders.orders[mIndex][dIndex][index].deli_status);
        console.log('deli status backup', $scope.masterOrdersCopy.orders[mIndex][dIndex][index].deli_status);
        var oldDeliStatus = $scope.masterOrdersCopy.orders[mIndex][dIndex][index].deli_status;
        var newDeliStatus = $scope.masterOrders.orders[mIndex][dIndex][index].deli_status;

        var oldPaymentStatus = $scope.masterOrdersCopy.orders[mIndex][dIndex][index].payment_status;
        var newPaymentStatus = $scope.masterOrders.orders[mIndex][dIndex][index].payment_status;

        var oldShipDate = $scope.masterOrdersCopy.orders[mIndex][dIndex][index].ship_date;
        var newShipDate = $scope.masterOrders.orders[mIndex][dIndex][index].ship_date;

        var oldTrackId = $scope.masterOrdersCopy.orders[mIndex][dIndex][index].track_id;
        var newTrackId = $scope.masterOrders.orders[mIndex][dIndex][index].track_id;

        var oldOrders = $scope.masterOrdersCopy.orders[mIndex][dIndex][index].orders;
        var newOrders = $scope.masterOrders.orders[mIndex][dIndex][index].orders;

        var idsOutOfStockArr = [];
        var id = [];
        // var size = [];
        // var qty = [];
        var idString;
        for (var i in newOrders) {
            id.push(newOrders[i][0]);
            // size.push(newOrders[i][2]);
            //qty.push(newOrders[i][3]);
        }
        var idCopy = $.unique(id);
        for (var i in idCopy) {
            if (i == newOrders.length) {
                idString += idCopy[i];
            }
            else if (i == 0) {
                idString = idCopy[i];
            }
            else {
                idString += "," + idCopy[i];
            }
        }
        console.log('idString', idString);

        /* var payment_status = $scope.masterOrders.orders[mIndex][dIndex][index].payment_status;
        var ship_date = $scope.masterOrders.orders[mIndex][dIndex][index].ship_date;
        var track_id = $scope.masterOrders.orders[mIndex][dIndex][index].track_id; */
        opr_str = {
            "operation": "b4_saveing_orders_changes",
            "id_orders": id_orders,
            "idString": idString
            /* "deli_status": JSON.stringify(deli_status),
            "payment_status": JSON.stringify(payment_status),
            "track_id": JSON.stringify(track_id),
            "ship_date": JSON.stringify(ship_date) */

        };

        opr_str = JSON.stringify(opr_str);
        s_http.s_http_fun(opr_str, function (resp) {

            console.log('-----------data-------', (resp.data.data));
            var kurtiIdQty = resp.data.data.kurti.replace('"[', "[");
            //array of obj, {id,sizes[],qnty[]}
            var kurtiIdQty = JSON.parse(resp.data.data.kurti.replace(']"', "]"));
            angular.copy(kurtiIdQty, $scope.kurtiIdQtyCopy);

            var orders = resp.data.data.orders.replace(']"', "]");
            //array of deli_status
            var orders = JSON.parse(resp.data.data.orders.replace(']"', "]"));
            console.log('fresh orders',orders);

            console.log('$scope.kurtiIdQtyCopy-->>', $scope.kurtiIdQtyCopy);
           /*  if (isEqual(orders[0].deli_status, oldDeliStatus) == false) {
                alert('they are not ezual REFERSH PAGE');
                return false;
            } */
            /* function isEqual(arr1, arr2) {
                console.log('-->', arr1);
                console.log('-->', arr2);
                for (var i in arr1) {
                    if (arr1[i] != arr2[i]) {
                        return false;
                        break;
                    }
                }
                return true;
            } */
            var errorMsg = '';
            for (var i in newDeliStatus) {
                
                if(oldDeliStatus[i] != orders[0].deli_status[i]){
                    //user has update deliStatus(cancel,replace,moneyback).
                    alert('PLEASE REMEMBER ORDER ID WHICH U ARE UPDATING.\nUser has updated data,therfore,fetching latest data.\n(this warning should popup very rarely)');
                    
                    newDeliStatus[i] = orders[0].deli_status[i];
                    newPaymentStatus[i] = oldPaymentStatus[i];
                    newShipDate[i] = oldShipDate[i];
                    newTrackId[i] = oldTrackId[i];
                    

                }
                else if (oldDeliStatus[i] == 0 && newDeliStatus[i] == 1) {
                    // console.log(1);
                    //0:ordered
                    //1:shipped
                    //id,size,qty
                    for (var j in kurtiIdQty) {
                        var outOfStockFlg = true;
                        if (kurtiIdQty[j].id_kurti == newOrders[i][0]) {//id
                            for (var k in kurtiIdQty[j].sizes) {
                                
                                if (kurtiIdQty[j].sizes[k] == newOrders[i][2]) {//size
                                    console.log('newOrders[i][3]', newOrders[i][3]);
                                    console.log('kurtiIdQty[j].qty[k]', kurtiIdQty[j].qty[k]);
                                    if (newOrders[i][3] <= kurtiIdQty[j].qty[k]) {
                                        console.log(6);
                                        kurtiIdQty[j].qty[k] = kurtiIdQty[j].qty[k] - newOrders[i][3];
                                    }
                                    else {
                                        newDeliStatus[i] = oldDeliStatus[i];
                                        newPaymentStatus[i] = oldPaymentStatus[i];
                                        newShipDate[i] = oldShipDate[i];
                                        newTrackId[i] = oldTrackId[i];
                                        errorMsg += "Ordered Quantity for Product Id " + i +
                                            " is " + newOrders[i][3] + " which is less that available quantity i.e. " + kurtiIdQty[j].qty[k] + '\n';
                                    }
                                }

                                if(kurtiIdQty[j].qty[k] >= 1){
                                    outOfStockFlg = false;
                                }
                            }
                            if(outOfStockFlg){
                                    idsOutOfStockArr.push(kurtiIdQty[j].id_kurti);
                            }
                        }

                    }

                    //reduce qutntity;
                }
                else if (oldDeliStatus[i] != 0) {
                    if (newDeliStatus[i] == 0) {
                        newDeliStatus[i] = oldDeliStatus[i];
                        newPaymentStatus[i] = oldPaymentStatus[i];
                        newShipDate[i] = oldShipDate[i];
                        newTrackId[i] = oldTrackId[i];
                        alert('Status can not be "ORDERED" again.');
                       // return false;
                    }
                }



            }
            if (errorMsg != '') {
                alert(errorMsg);
            }
            //idsOutOfStockArr = [3,4,5,6];
            console.log('--===>>>===>>>- ids out of stock', idsOutOfStockArr);
            

            opr_str = {
                "operation": "save_orders_changes",
                "id_orders": id_orders,
                "deli_status": JSON.stringify(newDeliStatus),
                "payment_status": JSON.stringify(newPaymentStatus),
                "track_id": JSON.stringify(newTrackId),
                "ship_date": JSON.stringify(newShipDate),
                "kurtiIdQty": kurtiIdQty,
                "idsOutOfStockArr":idsOutOfStockArr
            };

            opr_str = JSON.stringify(opr_str);
            s_http.s_http_fun(opr_str, function (resp) {
                console.log(resp.data);
            });


            successDbOp();



        });

    }

    function isEqual(arr1, arr2) {
        console.log('-->', arr1);
        console.log('-->', arr2);
        for (var i in arr1) {
            if (arr1[i] != arr2[i]) {
                return false;
                break;
            }
        }
        return true;
    }
    function isUndefined(value) {
        if (value == null || value == undefined) {
            return true;
        }
        return false;

    }


    $scope.sortBy = function (value) {
        //id tells if this change is from payment status or delivery status aka status
        setDateFrmParams();
        setDateToParams();

        if (($scope.paymentDoneValue != -1) && ($scope.statusValue != -1)) {
            console.log('---BOTH---');
            var dynamic = ordersService.register(ordersBackUp).resetCounts().dateFromSort($scope.frm_date_dataCopy).
                dateToSort($scope.to_date_dataCopy).
                paymentStatusSort($scope.statusValue, $scope.paymentDoneValue).
                counts($scope.paymentDoneValue, $scope.statusValue).
                transformOrders().
                output();
            $scope.masterOrders = dynamic.finalMasterOrder;
            $scope.noOfUnits = dynamic.noOfUnits;
            $scope.noOfOrders = dynamic.noOfOrders;
            $scope.price = dynamic.price;

        } else {
            console.log('---SINGLE---');
            var dynamic = ordersService.register(ordersBackUp).resetCounts().dateFromSort($scope.frm_date_dataCopy).
                dateToSort($scope.to_date_dataCopy).
                statusSort($scope.statusValue).paymentDone($scope.paymentDoneValue).
                counts($scope.paymentDoneValue, $scope.statusValue).
                transformOrders().
                output();
            $scope.masterOrders = dynamic.finalMasterOrder;
            $scope.noOfUnits = dynamic.noOfUnits;
            $scope.noOfOrders = dynamic.noOfOrders;
            $scope.price = dynamic.price;

        }



        /*  if (id == 0 && isUndefined($scope.statusValue)) {
 
             //$scope.paymentDoneArr = [{ "id": 0, "value": 'Yes' }, { "id": 1, "value": 'No' }, { "id": 2, "value": 'Reset' }];
             if (value == 2) {
                 var dynamic = ordersService.register(ordersBackUp).resetCounts().
                     transformOrders().
                     output();
                 $scope.masterOrders = dynamic.finalMasterOrder;
                 $scope.userPaymenCountRows = dynamic.userPaymentCountRows;
                 $scope.userPaymentCountItems = dynamic.userPaymentCountItems;
                 console.log('prices are ', dynamic.mP);
 
             }
             else {
                 var dynamic = ordersService.register(ordersBackUp).resetCounts().
                     paymentDone(value).
                     transformOrders().
                     output();
                 $scope.masterOrders = dynamic.finalMasterOrder;
                 $scope.userPaymenCountRows = dynamic.userPaymentCountRows;
                 $scope.userPaymentCountItems = dynamic.userPaymentCountItems;
                 console.log('prices are ', dynamic.mP);
             }
 
 
 
         }
         else if (id == 1 && isUndefined($scope.paymentDoneValue)) {
             console.log('######----', ($scope.paymentDoneValue));
             console.log('######----', isUndefined($scope.paymentDoneValue));
             if (value == 8) {//Reset
                 var dynamic = ordersService.register(ordersBackUp).resetCounts().
                     transformOrders().
                     output();
                 console.log('dynamic', dynamic);
                 $scope.masterOrders = dynamic.finalMasterOrder;
 
                 $scope.userStatusCountRows = dynamic.userStatusCountRows;
                 $scope.userStatusCountItems = dynamic.userStatusCountItems;
 
             }
             else {
                 var dynamic = ordersService.register(ordersBackUp).resetCounts().
                     statusSort(value).
                     transformOrders().
                     output();
                 console.log('dynamic', dynamic);
                 $scope.masterOrders = dynamic.finalMasterOrder;
 
                 $scope.userStatusCountRows = dynamic.userStatusCountRows;
                 $scope.userStatusCountItems = dynamic.userStatusCountItems;
             }
         }
         else {
             console.log('222');
             //both filters are working(payment + status)
 
             var statusValue = $scope.statusValue;
             var paymentValue = $scope.paymentDoneValue;
             if (paymentValue == 2 && statusValue == 8) {
                 var dynamic = ordersService.register(ordersBackUp).resetCounts().
 
                     transformOrders().
                     output();
                 $scope.masterOrders = dynamic.finalMasterOrder;
                 $scope.userPaymenCountRows = dynamic.userPaymentCountRows;
                 $scope.userPaymentCountItems = dynamic.userPaymentCountItems;
                 $scope.userStatusCountRows = dynamic.userStatusCountRows;
                 $scope.userStatusCountItems = dynamic.userStatusCountItems;
             }
             else if (statusValue == 8) {
 
                 console.log('88888888888');
                 var dynamic = ordersService.register(ordersBackUp).resetCounts().
                     paymentDone(paymentValue).
                     transformOrders().
                     output();
                 $scope.masterOrders = dynamic.finalMasterOrder;
                 $scope.userPaymenCountRows = dynamic.userPaymentCountRows;
                 $scope.userPaymentCountItems = dynamic.userPaymentCountItems;
                 $scope.userStatusCountRows = dynamic.userStatusCountRows;
                 $scope.userStatusCountItems = dynamic.userStatusCountItems;
             }
             else if (paymentValue == 2) {
                 console.log('######');
                 var dynamic = ordersService.register(ordersBackUp).resetCounts().
                     statusSort(statusValue).
                     transformOrders().
                     output();
                 $scope.masterOrders = dynamic.finalMasterOrder;
                 $scope.userPaymenCountRows = dynamic.userPaymentCountRows;
                 $scope.userPaymentCountItems = dynamic.userPaymentCountItems;
                 $scope.userStatusCountRows = dynamic.userStatusCountRows;
                 $scope.userStatusCountItems = dynamic.userStatusCountItems;
             }
 
             else {
                 console.log('DDDDDDDDDDDDDDDDDDd');
                 var dynamic = ordersService.register(ordersBackUp).resetCounts().
                     paymentStatusSort(statusValue, paymentValue).
                     transformOrders().
                     output();
                 $scope.masterOrders = dynamic.finalMasterOrder;
                 $scope.userPaymenCountRows = dynamic.userPaymentCountRows;
                 $scope.userPaymentCountItems = dynamic.userPaymentCountItems;
                 $scope.userStatusCountRows = dynamic.userStatusCountRows;
                 $scope.userStatusCountItems = dynamic.userStatusCountItems;
             }
 
         } */
    }



    function setPaymentStatusParams() {
        //$scope.paymentDoneArrInSort = [{ "id": 0, "value": 'No' }, { "id": 1, "value": 'Yes' }, { "id": 2, "value": 'Reset' }];
        if (isUndefined($scope.paymentDoneValue)) {
            $scope.paymentDoneValue = -1;
        }
    }

    function setStatusParams() {
        if (isUndefined($scope.statusValue)) {
            $scope.statusValue = -1;
        }
    }

    function setDateFrmParams() {
        if (isUndefined($scope.frm_date_data)) {
            $scope.frm_date_dataCopy = -1;
        }
        else {
            $scope.frm_date_dataCopy = $scope.frm_date_data;
        }
    }

    function setDateToParams() {
        if (isUndefined($scope.to_date_data)) {
            $scope.to_date_dataCopy = -1;
        }
        else {
            $scope.to_date_dataCopy = $scope.to_date_data;
        }
    }

    $scope.sun = function (type, index, index2) {
        //console.log('ddd',type,index);
        if (type == 'months') {
            console.log('months');
            $('#monthBody' + index).slideToggle("slow");
            var id = '[id^=' + 'dateBody' + index + ']';
            console.log('months');
            $(id).slideUp("slow");
        }
        if (type == 'dates') {
            console.log('dates'); $('#dateBody' + index + index2).slideToggle("slow");
        }

    }
    $scope.ttlAmt = function (itemsArray) {
        //to calculate total price for individual orders and show them.
        var lclPrice = 0;
        for (var i in itemsArray) {
            lclPrice = lclPrice + itemsArray[i][5];
        }
        return lclPrice;
    }
    $scope.showBogusScreen = function (x) {
        $scope.bogusFlg = true;
        $scope.bogusTableId = x;
    }
    $scope.yes = function (date) {
        console.log(date.getFullYear());
        if (date.getMonth() + 1 <= 9) {
            return false;
        }
        return true;
    }
    $scope.hideBogusScreen = function () {
        //hides bogus entry flag
        $scope.bogusFlg = false;
    }
    $scope.registerBogus = function () {
        var opr_str = { "operation": "bogusEntry", "id_orders": $scope.bogusTableId };
        opr_str = JSON.stringify(opr_str);
        s_http.s_http_fun(opr_str, function (resp) {
            console.log('33', resp.data.code)
            switch (resp.data.code) {
                case 200:
                    $scope.bogusFlg = false;
                    successDbOp();
                    break;
                case 0:
                    $scope.dbOpFail = true;
                    break;
                default:
                    console.log('somthing terribly went wrong');
            }
        });
    }
    function successDbOp() {
        $scope.dbOpSuccess = true;

    }
    $scope.hideDbSuccessPromptMsgFlg = function () {
        $scope.dbOpSuccess = false;
    }
    $scope.hideDbFailPromptMsgFlg = function () {
        $scope.dbOpFail = false;
    }
    $scope.showComments = function (mIndex, dIndex, oIndex) {
        $scope.commentsSectinFlg = true;
        $scope.mIndex = mIndex;
        $scope.dIndex = dIndex;
        $scope.oIndex = oIndex;

        $scope.id_orders = $scope.masterOrders.orders[mIndex][dIndex][oIndex].id_orders;
        $scope.comments = $scope.masterOrders.orders[mIndex][dIndex][oIndex].comments;
    }
    $scope.hideCommentsScreen = function () {
        $scope.commentsSectinFlg = false;
    }
    $scope.saveComments = function (id_orders) {
        var opr_str = { "operation": "saveComments", "comments": $scope.comments, "id_orders": $scope.id_orders };
        opr_str = JSON.stringify(opr_str);
        s_http.s_http_fun(opr_str, function (resp) {
            switch (resp.data.code) {
                case 4:
                case 200:
                    $scope.commentsSectinFlg = false;
                    $scope.masterOrders.orders[$scope.mIndex][$scope.dIndex][$scope.oIndex].comments = $scope.comments;
                    successDbOp();
                    break;
                case 0:
                    $scope.commentsSectinFlg = true;
                    break;
                default:
                    console.log('somthing terribly went wrong');
            }
        });

    }
    //***functions

    //$('#panelBodyId0').slideToggle('slow');
    // $("#hope").on('click','#oye0',function() { console.log('clicked');$('#hoe0').slideToggle("slow")});
});//*** root.

