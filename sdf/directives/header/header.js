rootModule.directive('header', function () {
    return {
        templateUrl: './sdf/directives/header/header.php',
        controller:
        function (s_local_storage,s_http, $scope, $http, $window, $location, $rootScope) {
            // New Add ons
            
            console.log('-=header.js=-')
            $scope.tPrice = headerService.price(s_local_storage.get_lcl_cart(),$scope.cart_items_dtl);
            var  cart_qty = JSON.parse(localStorage.getItem('id_clr_size_qty_array_obj'));
            $scope.lclCart = cart_qty;
            stringIds = headerService.cartIds(cart_qty);
            console.log('---lclCart header.js-----',$scope.lclCart );
            //To assign cartItemDetails and price.
            function state(){
                cart_qty = JSON.parse(localStorage.getItem('id_clr_size_qty_array_obj'));
                stringIds = headerService.cartIds(cart_qty);
                console.log('state function called');
            var x = JSON.stringify({ "operation": "id_array_dtl", "ids_string": stringIds })
            console.log('111111111', s_http.s_http_fun(x,function(r){
                
                $scope.cartItemDtl = headerService.idsToDtlMapping(r.data.data,s_local_storage.get_lcl_cart());
                console.log('00000000000',s_local_storage.get_lcl_cart(),$scope.cart_items_dtl);
                $scope.tPrice = headerService.price(s_local_storage.get_lcl_cart(),$scope.cartItemDtl);
            }));
        }

            
            document.getElementById("cart_qty").innerHTML = (cart_qty == null || cart_qty == '') ? '' : cart_qty.length;
            $scope.cartDoorClk = function () {
                //Because of this it won't come to cart-door page.
                $("#org_window_id").slideUp();
                $location.path('/cart-door');
            }
            $scope.logout = function () {
                $scope.lgn_sgn_btn = true;
                s_local_storage.clean();
                $location.path('/');
                $rootScope.user_id = null;
                document.getElementById('cart_qty').innerHTML = '';
            }
            //button for login and sign up
            $scope.lgn_sgn_btn = true;
            if (s_local_storage.get_email() != null) {
                $scope.lgn_sgn_btn = false;
                $scope.header_login_btn = s_local_storage.get_email();
            }
            //*** New Add ons

            //Login functionality
            //  member variables 
            $scope.inputEmail = '';
            $scope.inputPass = '';
            $scope.inputConfirmPass = '';
            $scope.email = '';
            //Shows logged in user mail id(dropdown).
            $scope.header_login_btn;

 
            
            $scope.userProfile = function(id){
                if(id==0){
                $location.path('/user-profile/change-password');
                }
                else if(id==1){
                    $location.path('/user-profile/user-orders');
                }
            }
            

            //if email already in use, show already in use msg
            $scope.already_in_use_flg = false;
            //To show, mail has been sent to registered email id, when forgt password functionality is used.
            $scope.mailSent = false;

            //pass and email do not match
            $scope.email_pass_not_found__err_flag = false;

            //for login page
            $rootScope.lgn_pg_flag = false;

            //forgot password text
            $scope.forgot_pass_flag = true;

            //flg for inputEmail.
            $scope.emailFlg = true;

            //back to login text
            $scope.bck_to_lgn_flag = false;

            //new user sign up flag text
            $scope.new_usr_sgn_up_flag = true;

            //confirm pass input field
            $scope.confirm_pass_flag = false;

            //button to logIn,SignUp,ForgotPassword
            $scope.operation_btn_txt = 'Log In';

            //string that oscillates between 'new user?sign up' and 'back to login'.
            $scope.new_usr_sgn_up_txt = 'New User? Sign Up';

            //pass flag
            $scope.pass_flag = true;
            //flg for submit btn.
            $scope.submitBtn = true;
            //to hide the error messages, and input components when required.
             function hide(){
                 console.log('hide called');
                $scope.emailFlg = false;
                $scope.pass_flag = false;
                $scope.confirm_pass_flag = false;
                $scope.submitBtn = false;
                $scope.already_in_use_flg = false;
                $scope.email_err_flag = false;
                $scope.pass_err_flag = false;
                $scope.pass_mismatch_err_flag = false;
                $scope.email_pass_not_found_err_flag = false;
                $scope.already_in_use_flag = false;
            }

            function clear_err_msg() {
                //close all the error messages
                $scope.email_err_flag = false;
                $scope.pass_err_flag = false;
                $scope.pass_mismatch_err_flag = false;
                $scope.email_pass_not_found_err_flag = false;
                $scope.already_in_use_flag = false;
                $scope.mailSent = false;
                $scope.pass_flag = true;
                $scope.confirm_pass_flag = false;
                $scope.bck_to_lgn_flag = false;
                $scope.forgot_pass_flag = true;
                $scope.new_usr_sgn_up_flag = true;
                $scope.intrntFlg = false;
                $scope.operation_btn_txt = 'Log In';
                $scope.inputEmail='';
                $scope.inputPass='';
                $scope.inputConfirmPass='';

                $scope.emailFlg = true;
                $scope.submitBtn = true;
                $scope.already_in_use_flg = false;
            }

            //----------function definitions-----------
            $scope.forgot_pass_clk = function () {
                clear_err_msg();
                $scope.pass_flag = false;
                $scope.operation_btn_txt = 'Submit';
                $scope.forgot_pass_flag = false;
                $scope.bck_to_lgn_flag = true;
                $scope.new_usr_sgn_up_flag = false;
            }

            $scope.sgn_up_clk = function () {
                clear_err_msg();
                $scope.confirm_pass_flag = true;
                $scope.forgot_pass_flag = false;
                $scope.operation_btn_txt = 'Sign Up';
                $scope.bck_to_lgn_flag = true;
                $scope.new_usr_sgn_up_flag = false;
            }

            $scope.bck_to_lgn_clk = function () {
                clear_err_msg();
                $scope.confirm_pass_flag = false;
                $scope.pass_flag = true;
                $scope.operation_btn_txt = 'Log In';
                $scope.forgot_pass_flag = true;
                $scope.new_usr_sgn_up_flag = true;
                $scope.bck_to_lgn_flag = false;
            }

            $scope.close_lgn_pge = function () {
                $rootScope.lgn_pg_flag = false;
                $('body').css('overflow-y','auto');
            }

            $scope.lgn_in_sgn_up_btn = function () {
                /* $(document).keydown(function(objEvent) {
                    if (objEvent.keyCode == 9) {  //tab pressed
                        objEvent.preventDefault(); // stops its action
                    }
                }); */
                clear_err_msg();
                $rootScope.lgn_pg_flag = true;
                $('body').css('overflow-y','hidden');
            }

            //----------function definitions***-----------
            $scope.price_update = function (item, dx) {
                console.log('price_update');
                console.log('item',item[0]);
                for (i = 0; i < $scope.cartItemDtl.length; i++) {
                    console.log(1);
                    if ($scope.cartItemDtl[i].id== item[0]) {
                        console.log(2);
                        $scope.tPrice += dx * ($scope.cartItemDtl[i].price);
                        console.log('$scope.tPrice',$scope.tPrice);
                        return;
                    }
                }
                
            }
            $scope.add_qty = function (item) {
                console.log('add_qty');
                $scope.price_update(item, 1);
                document.getElementById('tPrice').innerHTML = $scope.tPrice;
                item[3] += 1;//[3] = qty
                s_local_storage.change_qty(item, 1);
            }
        
            $scope.rmv_qty = function (item) {
                if (item[3] == 1) { return; }
                $scope.price_update(item, -1);
                document.getElementById('tPrice').innerHTML = $scope.tPrice;
        
                item[3] -= 1;//[3] = qty
                s_local_storage.change_qty(item, -1);
            }

            $scope.onSubmit = function () {
                //console.log('--------inside onSubmit function---------');

                var loginBtn = $('#loginBtn').text().replace(/\s+/g, '').toLowerCase();
            }
           
            //***Login functionality
            $("#cart_window_id").click(function () {
                cart_qty = JSON.parse(localStorage.getItem('id_clr_size_qty_array_obj'));
                if(cart_qty==null){
                    return;
                }
                //if on mobile device no need to show cart-window, go to cart-door
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                    $location.path('/cart-door');
                    return;
                   }
                   //***if on mobile device no need to show cart-window, go to cart-door

               
                state();
                $scope.lclCart = cart_qty;
                console.log('latest lclItemDtl from header.js',cart_qty);
                
                stringIds = headerService.cartIds(cart_qty);
                var x = JSON.stringify({ "operation": "id_array_dtl", "ids_string":stringIds })
                console.log('111111111', s_http.s_http_fun(x,function(r){
                   $scope.cartItemDtl = headerService.idsToDtlMapping(r.data.data,s_local_storage.get_lcl_cart());
                   console.log('9999999999999',$scope.cartItemDtl,s_local_storage.get_lcl_cart());
               })); 
                $("#org_window_id").slideToggle();
            });
            $("#cart_window_id").focusout(function () {
                console.log('focus out');
            });
            $scope.continue = function(){
                $("#org_window_id").slideToggle();
            }
            $("#org_window_id").mouseleave(function () {
                setTimeout(function(){ $("#org_window_id").slideUp(); }, 450);
            } );
            $scope.cart_window_flag = false;
            $scope.cart_window = function () {
                console.log('cart_window clicked');
            }
            $scope.home = function(){
                $location.path('/');
            }
            $scope.tmtDetailedProd = function(id){
                $location.path('/detailed-product/'+id);
            }
            $scope.del= function(){
                console.log('-------DEL--------');
                    $scope.loginFormSuccess();
            }
            /*
            $scope.loginFormSuccess = function(){
                $scope.loginForm();
            } */
            $scope.loginFormSuccess = function () {
                console.log('-------LOGINFORM--------');
                if ($scope.operation_btn_txt.toLowerCase() == 'log in') {
                    login_dtl = { "operation": "login", "email": $scope.inputEmail, "pass": $scope.inputPass };
                    $scope.user_lgn_in_dtl_obj = JSON.stringify(login_dtl);
                    $http({
                        method: "POST",
                        url: "./sdf/service/php/reply.php",
                        data: $scope.user_lgn_in_dtl_obj
                    }).then(
                        function success(response) {

                            switch (response.data.code) {
                                case 201://successful login
                                console.log('user id is,',response.data.data);
                                s_local_storage.set_user_id(response.data.data);
                                    $scope.lgn_sgn_btn = false;//hide login/sign up btn
                                    s_local_storage.set_email($scope.inputEmail);
                                    $scope.header_login_btn = s_local_storage.get_email();
                                    $rootScope.lgn_pg_flag = false;//hide login window
                                    $('body').css('overflow-y','auto');
                                    break;

                                case 1://admin login
                                window.open("./sdf/admin/index.php");
                                //window.open("http://localhost/sdf/admin/index.php#!/");
                                break;

                                case 2://pass & email do not match 
                                    $scope.email_pass_not_found_err_flag = true;
                                    break;

                                default:
                                console.log('Default of login.');
                            }

                            console.log('service full response', response.data);
                        }
                        ,
                        function error(response) {
                            console.log('inside error fucntion');
                        }
                        );//login functionality***

                }
                if ($scope.operation_btn_txt.toLowerCase() == 'sign up') {
                    console.log('-=Sign Up called=-');
                    sign_up_dtl = { "operation": "signup", "email": $scope.inputEmail, "pass": $scope.inputPass, "confirmPass": $scope.inputConfirmPass };
                    $scope.user_sign_up_dtl_obj = JSON.stringify(sign_up_dtl);
                   
                    $http({
                        method: "POST",
                        url: "./sdf/service/php/reply.php",
                        data: $scope.user_sign_up_dtl_obj
                    }).then(
                        function success(response) {

                            
                            switch (response.data.code) {
                                case 0: //email already in use
                                    $scope.already_in_use_flg = true;
                                    break;

                                case 1:
                                console.log('userid',response.data.data,'email',$scope.inputEmail);
                                s_local_storage.set_user_id(response.data.data);
                                $scope.lgn_sgn_btn = false;//hide login/sign up btn
                                s_local_storage.set_email($scope.inputEmail);
                                $scope.header_login_btn = s_local_storage.get_email();
                                $rootScope.lgn_pg_flag = false;//hide login page window
                                $('body').css('overflow-y','auto');
                                
                                //successfully first time sign up
                                        //Mailing
                                    /*     $scope.loaderFlg = true;
                                        sign_up_dtl = { "operation": "0", "email": $scope.inputEmail };
                                        $scope.user_sign_up_dtl_obj = JSON.stringify(sign_up_dtl);
                                        $http({
                                            method: "POST",
                                            url: "./sdf/PHPMailer/vendor/index.php",
                                            data: $scope.user_sign_up_dtl_obj
                                        }).then(
                                            function success(response) {
                                                    hide();                                                
                                                if(JSON.parse(( response.data.split('ss_just_for_breaking_pt'))[1] ).code == 0 ){
                                                    console.log('response in undefined');
                                                    $scope.intrntFlg = true;
                                                    $scope.loaderFlg = false;
                                                    return;
                                                } 
                                                
                                                

                                                switch (JSON.parse(response.data.split('ss_just_for_breaking_pt')[1]).code) {
                                                    case 200:
                                                    $scope.loaderFlg = false;
                                                        console.log('email sent successfully shubham sengar');
                                                        $scope.mailSent = true;

                                                        break;
                    
                                                    default:
                                                    $scope.loaderFlg = false;
                                                        console.log('default called for forgot password', JSON.parse(response.data.split('ss_just_for_breaking_pt')[1]).code);
                                                }
                    
                                            }
                                            ,
                                            function error(response) {
                                                console.log('Inside error fucntion of submit.');
                                            }
                                            );
                                     */
                                    break;

                                default:console.log('Default called for sign up.');
                            }

                            console.log('code', response.data);
                        }
                        ,
                        function error(response) {
                            console.log('inside error fucntion');
                        }
                        );

                }
                //forgot password 
                if ($scope.operation_btn_txt.toLowerCase() == 'submit') {
                    console.log('-=Forgot Password Called=-');
                    console.log('submit called');
                    $scope.loaderFlg = true;
                    sign_up_dtl = { "operation": "1", "email": $scope.inputEmail };
                    $scope.user_sign_up_dtl_obj = JSON.stringify(sign_up_dtl);
                    $http({
                        method: "POST",
                        url: "./sdf/PHPMailer/vendor/index.php",
                        data: $scope.user_sign_up_dtl_obj
                    }).then(
                        function success(response) {
                            console.log('~~~~~~~~',(( response) ));
                            if(JSON.parse(( response.data.split('ss_just_for_breaking_pt'))[1]).code == 0 ){
                                console.log('no internet connectino');
                                $scope.intrntFlg = true;
                                $scope.loaderFlg = false;
                                return;
                            }
                            $scope.intrntFlg = false;
                            switch (JSON.parse(response.data.split('ss_just_for_breaking_pt')[1]).code) {
                                case 200:
                                $scope.loaderFlg = false;
                                    $scope.emailFlg = false;
                                    //To show status.
                                    $scope.mailSent = true;
                                    $scope.submitBtn = false;
                                    
                                    break;

                                default:
                                    console.log('default called for forgot password',
                                     JSON.parse(response.data.split('ss_just_for_breaking_pt')[1]).code);
                            }

                        }
                        ,
                        function error(response) {
                            console.log('Inside error fucntion of submit.');
                        }
                        );

                }


            }
        }
    }
});