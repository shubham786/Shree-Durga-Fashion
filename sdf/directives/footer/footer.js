rootModule.directive('footer', function () {
    return {
        templateUrl: './sdf/directives/footer/footer.php',
        controller:
        function (s_local_storage,s_http, $scope, $http, $window, $location, $rootScope) {
          /*  <div class='col-xs-6 csr_ptr' ng-click='sdf()'>SDF</div>
            <div class='col-xs-6 csr_ptr' ng-click='tNc()'>Terms & Conditions</div>
            <div class='col-xs-6 csr_ptr' ng-click='sNd()'>Shipping & Delivery Policy</div>
            <div class='col-xs-6 csr_ptr' ng-click='pp()'>Privacy Policy</div>
            <div class='col-xs-6 csr_ptr' ng-click='dp()'>Disclaimer Policy</div>
            <div class='col-xs-6 csr_ptr' ng-click='cNr()'>Cancellation & Refund</div>*/
            $scope.sdf = function(){
                $location.path('/static/shree-durga-fashion');
            }

            $scope.tNc = function(){
                $location.path('/static/terms-conditions');
            }

            $scope.sNd = function(){
                $location.path('/static/shipping-delivery-policy');
            }

            $scope.pp = function(){
                $location.path('/static/privacy-policy');
            }

            $scope.dp = function(){
                $location.path('/static/disclaimer');
            }

            $scope.cNr = function(){
                $location.path('/static/cancellation-refund-policy');
            }

            $scope.home = function(){
                $location.path('/');
            }
        
                        
        }
    }
});


