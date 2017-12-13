//var app = angular.module('myApp', []);
m_admin.controller('myCtrl', function ($scope, $window,$http,$rootScope,$location,$route) {
    console.log('---==ctrl kurti insert==---');
    //----------Member Variables----------
    $scope.colors = ['as shown','mulitcolor','green', 'red', 'blue', 'orange','pink'];
    var colorsMapping = {
        'as shown': 0,
        'mulitcolor': 1,
        'green': 2,
        'red': 3,
        'blue': 4,
        'orange': 5,
        'pink': 6
    };
    $scope.sizes = ['s', 'm', 'l', 'xl', 'xxl', 'xxxl', '36', '38', '40', '42', '44', '46', '48', '50', '52', '54'];
    var sizesMapping = {
        's': 0,
        'm': 1,
        'l': 2,
        'xl': 3,
        'xxl': 4,
        'xxxl': 5,
        '36': 6,
        '38': 7,
        '40': 8,
        '42': 9,
        '44': 10,
        '46': 11,
        '48': 12,
        '50': 13,
        '52': 14,
        '54': 15
    };
    $scope.colors_len;
    $scope.sizes_len;
    $scope.fnl_colors = new Array();
    $scope.fnl_sizes;
    $scope.fnl_prices;
    $scope.fnl_qty;
    $scope.operation;


    $scope.first_screen_flag = true;
    $scope.price_flag = false;
    $scope.size_flag = false;
    $scope.upload_images_ui_flag = false;

    //----------***Member Variables----------

    //----------Member Functions--------
    $scope.colors_clk = function () {
          if ($rootScope.rs_kurti_comm_id == undefined) {
            alert('Please Select Id from previous page.');
            return false;
        }
        if ($scope.colors_mdl == undefined) {
            alert('Please Select Colors:');
            return false;
        }
        $scope.price_flag = true;
        // $window.alert($scope.colors_mdl.length);
        //console.log('colors model without json',$scope.colors_mdl);
        //console.log('colors model with json',JSON.stringify($scope.colors_mdl));
        //console.log(typeof(JSON.stringify($scope.colors_mdl)));
        //Generation of input fieds dynamically, for Prices.

       // $scope.fnl_colors = JSON.stringify($scope.colors_mdl);
        $scope.colors_len = [1].length;
        console.log('colors length',$scope.colors_len);
        //$scope.colors_len = $scope.colors_mdl.length;
        //Remove already appended childs.
        $( "#prices" ).empty();
        for (i = 1; i <= 1; i++) {
            //for (i = 1; i <= $scope.colors_mdl.length; i++) {
            var input = document.createElement("input");
            var line_brk = document.createElement("br");
            input.type = "number";
            input.className = "form-control";
            input.id = 'price'+i;
            input.placeholder = 'Price for' + i;
            $("#prices").append(input);
            $("#prices").append(line_brk);
        }//***Generation of input fieds dynamically, for Prices.
        console.log('colors_mdl',$scope.colors_mdl);
        var x = [];
        x.push($scope.colors_mdl);
        $scope.fnl_colors = x;
        console.log('$scope.fnl_colors',$scope.fnl_colors);
        
        $scope.fnl_colors = JSON.stringify($scope.fnl_colors);
    }

    $scope.prices_clk = function(){
        prices =[];
        for(i=1;i<=$scope.colors_len;i++){
            if(document.getElementById('price'+i).value ==  ''){
                alert ('Please Provide all prices.');
                return false;
            }//parseFloat is used because "document.getElementById('price'+i).value" returns string,and string in array 
            //is prefixed and suffixed by double quotes, which we don't want due to db space efficiency.
            prices[i-1] = parseFloat( document.getElementById('price'+i).value );
        }
        console.log('prices',prices);
        $scope.fnl_prices = JSON.stringify(prices);
        console.log('fnl_prices',$scope.fnl_prices);
        $scope.size_flag = true;
    }

    $scope.sizes_clk = function () {

        if ($scope.sizes_mdl == undefined) {
            alert('Please Select Sizes.');
            return false;
        }
       
        
        console.log('sizes mdl',$scope.sizes_mdl);
        $scope.sizes_len = $scope.sizes_mdl.length;
        
        $scope.fnl_sizes = $scope.sizes_mdl.map(function(ele,index){ return ele});
        
        $scope.fnl_sizes = JSON.stringify($scope.fnl_sizes);
        console.log('updated sizes are',$scope.fnl_sizes)
        

        $scope.first_screen_flag = false;
        n = $scope.colors_len;
        m = $scope.sizes_len;
        id = 1;
        for (i = 1; i <= ($scope.colors_len); i++) {
            for (j = 1; j <= ($scope.sizes_len); j++) {

                var input = document.createElement("input");
                var line_brk = document.createElement("br");
                label = $scope.colors_mdl[i - 1] + ',' + $scope.sizes_mdl[j - 1];
                var x = document.createTextNode(label);
                //x.text = $scope.colors_mdl[i];


                input.type = "number";
                input.className = "form-control";
                input.id = 'qty' + id;
                input.placeholder = 'Qty' + id; // set the CSS class
                qty.appendChild(x);
                qty.appendChild(input); // put it into the DOM
                qty.appendChild(line_brk);
                id++;

            }

        }


    }

    $scope.final_clk = function () {
        qty = []; 
        for(i = 1; i <= ($scope.colors_len*$scope.sizes_len); i++ ){
            if(document.getElementById('qty'+i).value == ''){
                alert('Please Provide all the prices.');
                return false;
            }//parseFloat is used because "document.getElementById('price'+i).value" returns string,and string in array 
            //is prefixed and suffixed by double quotes, which we don't want due to db space efficiency.
            qty[i-1] = parseFloat( document.getElementById('qty'+i).value );
        }
        qty = JSON.stringify(qty);

        // Finally Writing Values to db
        
        products_entry = { "operation": "products_entry","kurti_comm_id":$rootScope.rs_kurti_comm_id, 
        "colors": $scope.fnl_colors, "prices": $scope.fnl_prices, "sizes":$scope.fnl_sizes,"qty":qty };
        $scope.products_entry = JSON.stringify(products_entry);
            $http({
                    method: "POST",
                    url: "./../service/php/reply.php",
                    data: $scope.products_entry
                }).then(
                    function success(response) {

                        switch (response.data.code) {
                            case 200:
                            alert('Data Saved Successfully.');
                               console.log('Successfully saved data.');
                               $scope.upload_images_ui_flag = true;
                               document.getElementById("final_btn").disabled = true;
                              // $window.location.reload();
                                //$location.path('/');                               
                                break;

                            case 2:
                            case 4:
                                alert('Data updated successfully');
                                break;
                            case 3:
                            document.getElementById("final_btn").disabled = true;
                            alert('Something went wrong');


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
        //*** Finally Writing Values to db
    




});

