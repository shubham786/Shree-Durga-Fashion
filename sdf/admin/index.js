

var m_admin = angular.module('m_admin', ['ngRoute']);

m_admin.filter('gender',function(){
  console.log('filter called 1');
  return function(gender){
      console.log(gender);
      console.log('filter called 2');
      return gender;
  };
});

m_admin.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "home/home.php",
    controller: "c_home"
  })
  .when("/products-entry", {
    templateUrl : "products-entry/i+u+d/kurti-comm/index.php",
    controller: "c_kurti_comm"
  })
  .when("/kurti", {//shows kurti form, used within /products-entry
    templateUrl : "products-entry/i+u+d/insert/insert.php",
    controller: "myCtrl"
  })
  .when("/kurti-comm-form", {//shows kurti common form, used within /products-entry
    templateUrl : "products-entry/i+u+d/kurti-comm/form/kurti-comm-form.php",
    controller: "c_kurti_comm_form"
  })
  .when("/orders", {//shows orders
    templateUrl : "orders/orders.php",
    controller: "c_orders"
  })
  .when("/stock", {//shows orders
    templateUrl : "stock/stock.php",
    controller: "c_stock"
  })
  
});

m_admin.service('s_http', function ($http) {
  this.s_http_fun = function (operation_data, callback) {

      $http({
          method: "POST",
          url: "./../service/php/reply.php",
          data: operation_data
      }).then(
          function success(response) {

              switch (response.data.code) {
                  case 201:
                  console.log('201 called');
                      callback(response);
                      break;
                  case 200:
                      callback(response);
                      break;

                  default: console.log(response.data);
              }

          }
          ,
          function error(response) {
              console.log(response);
              console.log('ERROR IN ELSE PART OF SERVICE.');
          }
          );

  }
});


m_admin.controller('c_admin', function ($scope,$rootScope,$location) {
  console.log('---==ctrl products entry==---');
  //root scope variables for inter-controller communication.
    $rootScope.rs_kurti_comm_id;
    
  
});


