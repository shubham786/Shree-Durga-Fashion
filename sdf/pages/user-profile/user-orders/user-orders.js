rootModule.controller('c_user_orders', function ($scope,$location, s_http, $http, $timeout,$window, s_local_storage, $rootScope) {
    console.log('-=c_orders=-');
    //variables
    $scope.userOrderHistoryTimePeriod = {"1":"last 30 days","6":"past 6 months"};
    $scope.pastXMnths = '1';
    $scope.fetchPastOrderSelectFlg = true;
    $scope.delRepMoneybackFlg = false;
    $scope.areYouSureDelScreenFlg = false;
    $scope.areYouSureReplaceScreenFlg = false;
    $scope.areYouSureMoneyBckScreenFlg = false;
    var initializeOneMonthFlg = true;
    $scope.noOrdersFlg = false;
    $scope.thanksFeedBack = false;
    $scope.failedToUpdate = false;
    $scope.customErrsScreenFlg = false;
    var tid;
    var mIndex;
    var dIndex;
    var oIndex;
    var index;
    //***variables

    //states
    fetchUserData(1);
    
    //***states

    //functions
    $scope.getKurtiName = function(id_kurti){
        //to return kurti name for corresponding ids.
        for( var i in $scope.kurtiDetails){
            if($scope.kurtiDetails[i].id_kurti == id_kurti){
                return $scope.kurtiDetails[i].name;
                break;
            }
        }
        return "Can't fetch kurti name";
    }

    $scope.getTotalAmt = function(ordersArray){
        var tPrice = 0;
        for(i in ordersArray){
            tPrice +=ordersArray[i][5];
        }
        return tPrice;

    }
    
    $scope.userDataForPast = function(months){
        console.log('show data for',$scope.pastXMnths,'Months');
        fetchUserData($scope.pastXMnths);
    }

    $scope.clkOpenOrders = function(){
        $scope.fetchPastOrderSelectFlg = false;
        $scope.delRepMoneybackFlg = true;
        $scope.userMasterOrder = $scope.oneMonthOrders ;
    }
    $scope.clkOrders = function(){
        reset();
    }
    $scope.delete = function(mIndex1,dIndex1,oIndex1,index1,tid1,currStatus){
        console.log('currStatus',currStatus);
        if(currStatus == 3){//delete
            throwError('Product has already been Cancelled.');
            return false;
        }
        else if(currStatus == 4){//money-back
            throwError('Product can not be Cancelled as, it is being asked for money back.');
            return false;
        }

        else if(currStatus == 2){//replace
            throwError('Product can not be Cancelled as, it is being asked for replacement.');
            
            return false;
        }
        

       
        $scope.areYouSureDelScreenFlg = true;
        tid = tid1;
        mIndex = mIndex1;
         dIndex = dIndex1;
         oIndex = oIndex1;
         index = index1;
        console.log('this is orders',$scope.userMasterOrder.orders[mIndex][dIndex][oIndex].deli_status);
        //console.log('mIndex=',mIndex,'dIndex=',dIndex,'oIndex=',oIndex,'id_orders',tid,'--');
       // console.log($scope.userMasterOrder.orders[mIndex][dIndex][oIndex].orders[index][6],'b4');
       // $scope.userMasterOrder.orders[mIndex][dIndex][oIndex].orders[index][6] = 3;
        //console.log('aftr',$scope.userMasterOrder.orders[mIndex][dIndex][oIndex].orders[index][6]);
       // console.log('aftr',$scope.userMasterOrder.orders[mIndex][dIndex][oIndex].orders);
        
    } 
    $scope.deleteOrderItem = function(){
        
       
        console.log('------------',mIndex,dIndex,oIndex,tid);
        $scope.userMasterOrder.orders[mIndex][dIndex][oIndex].deli_status[index] = 3;
        console.log('this is orders',$scope.userMasterOrder.orders[mIndex][dIndex][oIndex].deli_status);

        var pigeon = { "operation": "updateForReturns","tid":tid,
        "deli_status":JSON.stringify($scope.userMasterOrder.orders[mIndex][dIndex][oIndex].deli_status)      };
        pigeon = JSON.stringify(pigeon);
        console.log('pigeon is',pigeon);

         s_http.s_http_fun(pigeon, function (resp) {
            console.log('---',resp.data);
            switch (resp.data.code) {
                
                case 200: 
                $scope.areYouSureDelScreenFlg = false;
                thanks();
                 break;
             }
             }); 
             
        
    }
    function thanks(){
        //represets successfully updation of values in db.
        $scope.thanksFeedBack = true;
        $timeout(function(){$scope.thanksFeedBack = false;},2000);
    }

    function throwError(errMsg){
        document.getElementById('idCustomErrors').innerHTML = errMsg;
        $scope.customErrsScreenFlg = true;
        
    }
    $scope.hideCustomErrorScreen = function(){
        $scope.customErrsScreenFlg = false;
    }
    $scope.replace = function(mIndex1,dIndex1,oIndex1,index1,tid1,currStatus){
        console.log('currStatus',currStatus);
        if(currStatus == 3){//delete
            throwError('Product can not be replaced as, it has been Cancelled.');
            return false;
        }
        else if(currStatus == 4){//money-back
            throwError('Product can not be replaced as, it is being asked for money back.');
            return false;
        }

        else if(currStatus == 2){//replace
            throwError('Product has already been asked for replacement.');
            
            return false;
        }
        tid = tid1;
        mIndex = mIndex1;
         dIndex = dIndex1;
         oIndex = oIndex1;
         index = index1;
         console.log('this is orders',$scope.userMasterOrder.orders[mIndex][dIndex][oIndex].deli_status);
        $scope.areYouSureReplaceScreenFlg = true;
    }

    $scope.replaceOrderItem = function(){
       
        
        console.log('this is orders',$scope.userMasterOrder.orders[mIndex][dIndex][oIndex].deli_status);
        $scope.userMasterOrder.orders[mIndex][dIndex][oIndex].deli_status[index] = 2;

        var pigeon = { "operation": "updateForReturns","tid":tid,
        "deli_status":JSON.stringify($scope.userMasterOrder.orders[mIndex][dIndex][oIndex].deli_status) };
        pigeon = JSON.stringify(pigeon);
        console.log('pigeon is',pigeon);

        s_http.s_http_fun(pigeon, function (resp) {
            console.log('---',resp);
            switch (resp.data.code) {
                
                case 200: 
                $scope.areYouSureReplaceScreenFlg = false;
                thanks();
                 break;
             }
             });
             
        
    }

    $scope.monyBck = function(mIndex1,dIndex1,oIndex1,index1,tid1,currStatus){
        console.log('status',currStatus);
        if(currStatus == 3){//delete
            throwError('Product is not eligible for money-back as, it has been Cancelled.');
            return false;
        }
        else if(currStatus == 4){//money-back
            throwError('Product has already been asked for money back.');
            return false;
        }

        else if(currStatus == 2){//replace
            throwError('Product is not eligible for money-back as, it is being asked for replacement.');
            
            return false;
        }
        tid = tid1;
        mIndex = mIndex1;
         dIndex = dIndex1;
         oIndex = oIndex1;
         index = index1;
        $scope.areYouSureMoneyBckScreenFlg = true;
    }
    $scope.delStatusMap = function(delStatusId){
       /*  $scope.status = [{ "id": 0, "value": 'Ordered' },
        { "id": 1, "value": 'Shipped' },
        { "id": 2, "value": 'Replace Product' },
        { "id": 3, "value": 'Cancelled' },
        { "id": 4, "value": 'Money Back' }
            , { "id": 5, "value": 'Delivered' }
            , { "id": 6, "value": 'Money Back Done' }
            , { "id": 7, "value": 'Replacement Done' }
            , { "id": 8, "value": 'Out of Stock' }
        ]; */
        if(delStatusId == 0) return 'Order Received';
        else if(delStatusId == 1) return 'Order Shipped';
        else if(delStatusId == 2) return 'Under Replacement'
        else if(delStatusId == 3) return 'Cancelled';
        else if(delStatusId == 4) return 'Under Money Back';
        else if(delStatusId == 5) return 'Delivered';
        else if(delStatusId == 6) return 'Money Back Successful';
        else if(delStatusId == 7) return 'Replacement Successful';
        else if(delStatusId == 8) return 'Out of Stock';
    }

    $scope.monBckOrderItem = function(){
       
        console.log('------------',mIndex,dIndex,oIndex,tid);
        console.log('this is orders',$scope.userMasterOrder.orders[mIndex][dIndex][oIndex]);
        $scope.userMasterOrder.orders[mIndex][dIndex][oIndex].deli_status[index] = 4;

        var pigeon = { "operation": "updateForReturns","tid":tid,
        "deli_status":JSON.stringify($scope.userMasterOrder.orders[mIndex][dIndex][oIndex].deli_status) };
        pigeon = JSON.stringify(pigeon);
        console.log('pigeon is',pigeon);

        s_http.s_http_fun(pigeon, function (resp) {
            console.log('---',resp);
            switch (resp.data.code) {
                
                case 200: 
                $scope.areYouSureMoneyBckScreenFlg = false;
                 thanks();
                 break;
             }
             });
             
        
    }

    
    
    $scope.hideDelete = function(){
        $scope.areYouSureDelScreenFlg = false;
    }
    $scope.hideReplace = function(){
        
        $scope.areYouSureReplaceScreenFlg = false;
    };
    $scope.hideMonBck = function(){
        $scope.areYouSureMoneyBckScreenFlg = false;
    }

    $scope.showOrderItem = function(returnCode){
        /* if(returnCode == 3){
            return false;
        }else{ */
            return true;
        //}

    }
    $scope.toggleUI = function(dteOrItem,dIndex,oIndex){
        //oIndex = mIndex(in case of date),oIndex(in case of month)
        //console.log('date/month',dteOrItem);
        //console.log('#dateBody+mIndex+dIndex','#dateBody'+mIndex+dIndex);
        
        //dteOrItem shows if the click event happend on date heading or item heading
        if(dteOrItem == 'date'){
        $('#dateBody'+oIndex+dIndex).slideToggle('slow');
        }
        else if( dteOrItem == 'item'){
            $('#itemBody'+dIndex+oIndex).slideToggle('slow');

        }
    }

    function fetchUserData(months){
        //takes no of months as param to fetch user order history for this no of months from presetdate.
        var pigeon = { "operation": "userAllOrders","id_cus":s_local_storage.get_user_id(),"months":months};
        pigeon = JSON.stringify(pigeon);
        
            s_http.s_http_fun(pigeon, function (resp) {
               switch (resp.data.code) {
                   case 201: 
                   console.log('-->>',resp.data.data);
                   $scope.userMasterOrder = '';
                   $scope.userMasterOrder = userOrdersService.transformOrders(resp.data.data);
                //    UI for no orders so far
                   if($scope.userMasterOrder.orders.length == 0){
                    $scope.noOrdersFlg = true;
                    break;
                }
                $scope.noOrdersFlg = false;
                //    ***UI for no orders so far
                  // userOrdersService.transformOrders2(resp.data.data);
                    //    setting one month users history
                   if(initializeOneMonthFlg){
                       $scope.oneMonthOrders = $scope.userMasterOrder;
                   }
                   initializeOneMonthFlg = false;
                    //    ***setting one month users history

                    //fetching name,quantites of kurtis in context.

                   var uniqueIds = $.unique(userOrdersService.idsArray);
                   pigeon = { "operation": "kurtiIdNameStock","idString":userOrdersService.idsString(uniqueIds)};
                   pigeon = JSON.stringify(pigeon);
                   s_http.s_http_fun(pigeon, function (resp) {
                       
                    switch (resp.data.code) {
                        case 201:
                        $scope.kurtiDetails = resp.data.data;
                       // console.log('---------->>>',$scope.kurtiDetails);
                        break;
                        default:alert('Something went wrong1');
                    }
                });
                   
                   break;

                   default:alert('Something went wrong2');
               }
               //fetching name,quantites of kurtis in context.
               
                //userOrdersService.display() ;
            });
                   
    
    }
    var moreDtlFlg = false;
    $scope.moreDetails = function(mIndex,dIndex,oIndex,idk){
        if(moreDtlFlg){
            $('#dwnArrowDtl'+mIndex+dIndex+oIndex+idk).removeClass('hidden-xs');
        }

        else if(!moreDtlFlg){
            $('#dwnArrowDtl'+mIndex+dIndex+oIndex+idk).addClass('hidden-xs');
        }
            
    moreDtlFlg = !moreDtlFlg;        
        

    }

    $scope.detailedProduct = function(id){
        $location.path('detailed-product/' + id);   
    }
    function reset(){
        $scope.pastXMnths = '1';
        $scope.fetchPastOrderSelectFlg = true;
        $scope.delRepMoneybackFlg = false;

    }

    //***functions
});//***c_orders