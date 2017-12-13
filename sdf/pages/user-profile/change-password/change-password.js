rootModule.controller('c_user_profile', function ($scope, s_http, $http, $timeout,$window, s_local_storage, $rootScope) {
    console.log('-=c_user_profile=-');
    //variables
    //global variables
    $rootScope.cart_icon_flag = true;//1
    //***global variables
    // Tells what to show either password change UI or user history.
    $scope.passOrHistoryFlg = true;
    //Flag for password updated successfully prompt.
    $scope.passUpdatedFlg = false;
    //Hides the faiure UI message.
    $scope.passUpdateFailFlg = false;
    $scope.existingPass;
    $scope.inputPass;
    $scope.inputConfirmPass;
    
    //***variables

    //states
    if($rootScope.user_id == null || $rootScope.user_id == undefined){
        //alert('NO user sessiong establishted.-'+$rootScope.user_id+'-------');
    }
    //***states

    //functions
   /*  $scope.passBtnClk = function () {
        $scope.passOrHistoryFlg = true;
        btnClr();
        resetFields();
        
    }; */


    /* $scope.historyBtnClk = function () {
        $scope.passOrHistoryFlg = false;
        btnClr();
        resetFields();
    } */

    
    $scope.updatePass = function(){
        $scope.oye = true;
        console.log('received id',s_local_storage.get_user_id());
        
        console.log('shubham',$scope.inputConfirmPass);
        pigeon = { "operation": "updatePass","id":s_local_storage.get_user_id(),"existingPass": $scope.existingPass,
         "pass":$scope.inputConfirmPass };
        pigeon = JSON.stringify(pigeon);
        
            s_http.s_http_fun(pigeon, function (resp) {
               console.log('$$$',resp);
               switch (resp.data.code) {
                   case 200:
                   resetFields();
                   $scope.passUpdatedFlg = true;
                   $timeout(function(){$scope.passUpdatedFlg = false;},3000);
                   break;
                   case 0:
                   $scope.passUpdateFailFlg = true;
                   $timeout(function(){$scope.passUpdateFailFlg = false;},3000);
                   
                   break;
                   default:
                   console.log('Something went fishy');

               }

            });
            
        
    }
    

    function resetFields(){
        $scope.passUpdatedFlg = false;

        $scope.existingPass = '';
        $scope.inputPass = '';
        $scope.inputConfirmPass = '';
    }

    function btnClr() {
        $scope.passOrHistoryFlg ?
            (
                $('#historyBtn').removeClass('btn-info'),
                $('#passBtn').addClass('btn-info')
            )
            : ($('#passBtn').removeClass('btn-info').addClass('btn-basic'),
                $('#historyBtn').removeClass('btn-basic').addClass('btn-info')
            );


    }

    //***functions
});//***controller