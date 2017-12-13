
rootModule.controller('c_url', function (s_http, s_local_storage, $rootScope, $scope, $location, $http, $routeParams) {
    console.log('--===c_url===--');
    $rootScope.header_flg = false;
    $scope.pass;
    $scope.uiFlg = true;
    $scope.sccssFlg=false;
    $scope.failFlg=false;
    $scope.forgorPassFlg = false;

    var broken_url = $location.absUrl();
    var opNLetter =  urlService.trnsformUrl(broken_url);
    operation = opNLetter[0];
    letter = opNLetter[1];
   
    console.log('letter',letter);
    console.log('operation',operation);

    if(operation == 0){
        console.log('do operatin for 0');
        var x = JSON.stringify({ "operation": "verification", "letter": letter });
         s_http.s_http_fun(x,function(r){
             switch (r.data.code) {
                case 200:
                   alert('Successfully Verified.');
                    break;
                case 0:
                    alert('Something went wrong please contact admin.');
                break; 
                default:
                 console.log('verification failed in defulat');
             }
            
        });
    }
    else if(operation ==1){
        $scope.forgorPassFlg = true;    
    }
    else{
        alert('Operation Not allowed.');
    }
    $scope.submit = function () {
        var x = JSON.stringify({ "operation": "forgot-password", "letter": letter,"pass":$scope.conPass });
        s_http.s_http_fun(x,function(r){
            switch (r.data.code) {
               case 200:
                  alert('Password Changed Successfully.');
                  break;
                case 0:
                alert('Something went fishy.');
                break;
                case 2:
                alert('Link expired');
                break;
                default:
                alert('Something went fishy, default of forgot-password.');
            }});
        }
    


  


});