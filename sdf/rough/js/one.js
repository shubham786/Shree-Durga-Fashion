
$http = angular.injector(["ng"]).get("$http");

var http = function (config) {
        $http(config).then(
            function success(r) {oye(r); },
            function fail(error) { console.log('failed called.') }
        )

}
function oye(r){console.log('function oye called');document.getElementById('one').innerHTML=r.data.data[2];console.log(r);};

var config = {
    method: "POST",
    url: "/sdf/service/php/reply.php",
    data: JSON.stringify({ "operation": "kurti_display", "email": 'aaa@aaa.aaa', "pass": 'aaa' })
};
var data;

var datafn = http(config);
console.log('--',datafn);
document.getElementById('one').innerHTML=false;



