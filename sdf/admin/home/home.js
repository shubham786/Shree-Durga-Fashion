m_admin.controller('c_home', function ($scope, $window, $http, $rootScope, $location, $route) {
    console.log('--===c_home===--');
    $scope.products_entry = function () {
        $location.path('/products-entry');
    }

    $scope.orders = function () {
        $location.path('/orders');
    }
    $scope.stock = function() {
        $location.path('/stock');
    }
});