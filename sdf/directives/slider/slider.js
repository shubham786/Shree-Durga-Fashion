rootModule.directive('slider', function () {
    return {
        templateUrl: './sdf/directives/slider/slider.php',
        controller:
        function (s_local_storage, s_http, $scope, $http, $window, $location, $rootScope, $interval) {
            $scope.sliderImgNo = 1;
            var totalImg = 6;
            var fade = true;
            var breakInterval = true;
            var imgChangeTimer;
            var imgOpacityTimer;
           
            
            imgChangeTimer =  $interval(function () {
                if(document.getElementById("hh") == null || document.getElementById("hh") == null){
                    $interval.cancel(imgChangeTimer);
                    $interval.cancel(imgOpacityTimer);
                    breakInterval = false;
                }else{
                $scope.slideRight();
                }
            }, 5000);
            imgOpacityTimer =  $interval(function () {
                if(document.getElementById("hh") == null || document.getElementById("hh") == null){
                    $interval.cancel(imgChangeTimer);
                    $interval.cancel(imgOpacityTimer);
                    breakInterval = false;
                }
                if (fade && breakInterval) {
                    document.getElementById("hh").style.transition = "opacity 5000ms ease";
                    document.getElementById("hh").className = "fademe";
                }
                if (!fade && breakInterval) {
                    document.getElementById("hh").style.transition = "opacity 5000ms ease";
                    document.getElementById("hh").className = "alive";
                }

                fade = !fade;
            },
                2500);


            $scope.slideRight = function () {
                document.getElementById("hh").className = "alive";
                //  document.getElementById("hh").style.transition = "opacity 5000ms ease";
                if ($scope.sliderImgNo == totalImg) {
                    $scope.sliderImgNo = 1;
                }
                else {
                    $scope.sliderImgNo++;
                }
            }

            $scope.slideLeft = function () {
                document.getElementById("hh").className = "alive";
                if ($scope.sliderImgNo == 1) {
                    $scope.sliderImgNo = 6;
                }
                else {
                    $scope.sliderImgNo--;
                }
            }



        }
    }
});