m_admin.controller('c_stock', function (s_http, $timeout, $scope, $window, $http, $rootScope, $location, $route) {
    console.log('--===c_stock===--');
    //variables
    //***variables

    //states
    var opr_str = { "operation": "kurti" };
    opr_str = JSON.stringify(opr_str);
    s_http.s_http_fun(opr_str, function (resp) {
        $scope.kurtiData = resp.data.data;
        console.log('===>>>',$scope.kurtiData);
    });
    //***states

    //functions
    //***functions

    
});