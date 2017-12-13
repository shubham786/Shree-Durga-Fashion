rootModule.controller('c_landing', function ($scope,$interval, $location, s_http, $http, $window, s_local_storage, $rootScope) {
    //Reshow the cart icon.
    $rootScope.cart_icon_flag = true;
    $scope.kurti_display;

    var login_dtl = { "operation": "landing_kurti_display" };
    var user_lgn_in_dtl_obj = JSON.stringify(login_dtl);
     s_http.s_http_fun(user_lgn_in_dtl_obj, function (resp) {
        console.log('resp.data.data', resp.data.data);
        $scope.kurti_display = resp.data.data;
    }); 

    
    



    $scope.detailed_prod = function (kd) {
        $('html,body').scrollTop(0);
        $location.url('detailed-product/' + kd);
        //$window.open('/index.php#!/detailed-product/' + kd);
    }

    $scope.toCategories = function(){
        
        $location.path('/categories');
    }
});