    rootModule.controller('c_one', function ($scope, $http) {
        $scope.one='one';
        $scope.two='two';
      $scope.onSubmit = function () {
        console.log('form submit button is pressed');
      }//onSubmit***
    });
    $().ready(function(){
    $('#myform').validate({
        errorClass: "invalid",
   validClass: "valid",
        rules:{
            one:{
                required:true,
                equalTo:"#two"
            }
        },
        messages:{
            one:{
                required:'Please fill your name, bitch.',
                equalTo:'NOT EQUAL'
            }
        }
    });
    
    });
