//var m_index = angular.module('m_index', ['ngRoute']);
/*
m_index.config(function($routeProvider) {
  $routeProvider
  
  .when("/red", {
    templateUrl : "red.htm"
  })
  .when("/green", {
    templateUrl : "green.htm"
  })
  .when("/kurti", {
    templateUrl : "/sdf/admin/products-entry/i+u+d/insert/insert.php"
    //C:\xampp\htdocs\sdf\admin\products-entry\i+u+d\insert
  });
});*/

m_admin.controller('c_kurti_comm', function ($scope,$rootScope, $http,$location) {
    //Variable 
    console.log('$rootScope.rs_kurti_comm_id',$rootScope.rs_kurti_comm_id);
    $rootScope.rs_kurti_comm_id = '';
console.log('---== ctrl kurti-comm-data==---');
        
                fetch_kurti_comm = { "operation": "fetch_kurti_comm" };
                $scope.fetch_kurti_comm = JSON.stringify(fetch_kurti_comm);
                $http({
                    method: "POST",
                    url: "./../service/php/reply.php",
                    data: $scope.fetch_kurti_comm
                }).then(
                    function success(response) {

                        switch (response.data.code) {
                            case 200:
                                break;
                            case 201:
                            $scope.kurti_comm_data = response.data.data;
                            console.log('kurti_comm object',response.data);
                            break;
                            case 2:
                                break;

                            case 400:
                                break;
                            default:
                            console.log('Did not receive any response in service, response.data is,' + response.data);
                        }
                        
                    }
                    ,
                    function error(response) {
                        console.log('inside error fucntion');
                    }
                    );//login functionality***


        $scope.set_kurti_comm_id = function(id_kurti_comm){
            $rootScope.rs_kurti_comm_id = id_kurti_comm;
        }
        $scope.go = function(){
            if($rootScope.rs_kurti_comm_id == ''){
                alert('Please Select an Id.');
                return false;
            }else{console.log('its not undefined',$rootScope.rs_kurti_comm_id);}
            
            $location.path('/kurti');
        }
        $scope.kurti_comm_form = function(){
            $location.path('/kurti-comm-form');
        }

});