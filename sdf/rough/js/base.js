
$http = angular.injector(["ng"]).get("$http");
var config = {
    method: "POST",
    url: "/sdf/service/php/reply.php",
    data: JSON.stringify({ "operation": "login", "email": 'aaa@aaa.aaa', "pass": 'aaa' })
};
 var data =function(config){
     $http(config).then(
        function success(r) { return r;   },
        function fail(error) { console.log('failed called.') }
        );
    }


