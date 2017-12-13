m_admin.controller('c_kurti_comm_form', function ($scope, $window,$http,$rootScope,$location) {

    $scope.mp_pattern = mp_pattern;
    $scope.mp_printPattern = mp_printPattern;
    $scope.mp_sleeve = mp_sleeve;
    $scope.mp_neck = mp_neck;
    $scope.mp_fabric = mp_fabric;
    $scope.mp_occasion = mp_occasion;

    $scope.submit = function(){
        console.log('name',$scope.name);
        console.log('pattern',$scope.pattern);
        console.log('print',$scope.print);
        console.log('sleeve',$scope.sleeve);
        console.log('neck',$scope.neck);
        console.log('product_desc',$scope.product_desc);
        console.log('fabric',$scope.fabric);
        console.log('occ',$scope.occ);
         //, name, article_sub_type, style_name, material, product_desc, , occasion_type, sleeve_type, pattern, 
         kurti_comm_entry = { "operation": "kurti_comm_entry",
         "name":$scope.name,
            "pattern":$scope.pattern,
            "print":JSON.stringify($scope.print),
             "fabric":$scope.fabric,
             "sleeve":$scope.sleeve,
             "neck":$scope.neck,
             "occasion":JSON.stringify($scope.occ),
             "product_desc":$scope.product_desc
              };
        $scope.kurti_comm_entry = JSON.stringify(kurti_comm_entry);
        $http({
                    method: "POST",
                    url: "./../service/php/reply.php",
                    data: $scope.kurti_comm_entry
                }).then(
                    function success(response) {

                        switch (response.data.code) {
                            case 200:
                            alert('Data Saved Successfully.');
                               console.log('Successfully saved data.');
                               $window.location.reload();
                                $location.path('/');                               
                                break;

                            case 2://pass & email do not match 
                                $scope.email_pass_not_found_err_flag = true;
                                //console.log($scope.lgn_pg_flag);
                                break;

                            case 400:
                                //$scope.already_in_use_flg = true;
                                break;


                            default:
                            console.log('default called');
                                    console.log('code' , response.data);
                        }//*** switch

                        
                    }
                    ,
                    function error(response) {
                        console.log('inside error fucntion');
                    }
                    );//
            
        
    } 
});