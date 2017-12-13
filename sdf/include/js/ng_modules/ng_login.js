var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    //  member variables 
    $scope.inputEmail = '';
    $scope.inputPass = '';
    $scope.inputConfirmPass = '';
    $scope.email = '';

    //if email already in use, show already in use msg
    $scope.already_in_use_flg = false;

    //pass and email do not match
    $scope.email_pass_not_found__err_flag = false;

    //button for login and sign up
    $scope.lgn_sgn_btn = true;

    //for login page
    $scope.lgn_pg_flag = false;

    //if email is not in proper format
    $scope.email_err_flag = false;

    //if password validation fail
    $scope.pass_err_flag = false;

    //if passwords mismatch
    $scope.pass_mismatch_err_flag = false;

    //forgot password text
    $scope.forgot_pass_flag = true;

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

    //Length for pass exceeded.
    $scope.pass_max_len_err_flag = false;    

    //Length for email exceeded.
    $scope.email_max_len_err_flag = false;


    //  member variables***
    function both_pass_match(pass1, pass2) {
        if (pass1 == pass2) {
            return true;
        }
        else {
            return false;
        }

    }
    function clear_err_msg() {
        //close all the error messages
        $scope.email_err_flag = false;
        $scope.pass_err_flag = false;
        $scope.pass_mismatch_err_flag = false;
        $scope.email_pass_not_found_err_flag = false;
        $scope.already_in_use_flag = false;
        $scope.email_max_len_err_flag = false;
        $scope.pass_max_len_err_flag = false;
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
        $scope.lgn_pg_flag = false;
    }





    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    $scope.email_blur = function () {
        //email provided is fails validation
        if (!(validateEmail($scope.inputEmail))) {
            $scope.email_err_flag = true;
            return false;
        }//email provided passes validation
        else {
            if( $scope.inputEmail.length >35 ){
                $scope.email_max_len_err_flag = true;
                return false;
            }
            //$clear previous flags if field is visited more than once
            $scope.email_err_flag = false;
            $scope.email_max_len_err_flag = false;
        }
    }

    $scope.pass_blur = function () {
        //email provided is fails validation
        if (   ($scope.inputPass.length < 3)   ) {
            $scope.pass_err_flag = true;
            $scope.pass_mismatch_err_flag = false;
            return false;
        }//email provided passes validation
        else if(   ($scope.inputPass.length >25)   ){
                $scope.pass_max_len_err_flag = true;
                return false;
        }
        else {
            if (($scope.inputPass != $scope.inputConfirmPass) && ($scope.operation_btn_txt.replace(/\s+/g, '').toLowerCase() == 'signup')) {
                $scope.pass_mismatch_err_flag = true;
                $scope.pass_err_flag = false;
                return false;
            }
            else if (($scope.inputPass == $scope.inputConfirmPass) && ($scope.operation_btn_txt.replace(/\s+/g, '').toLowerCase() == 'signup')) {
                $scope.pass_mismatch_err_flag = false;
            }
            //$clear previous flags if field is visited more than once
            $scope.pass_err_flag = false;
            $scope.pass_max_len_err_flag = false;
        }
    }

    $scope.confirm_pass_blur = function () {
        //email provided is fails validation
        if (($scope.inputPass != $scope.inputConfirmPass)) {
            if ($scope.pass_flag) {
                //do notin
                $scope.pass_mismatch_err_flag = true;
                return false;
            } else {

            }

        }//email provided passes validation
        else {
            $scope.pass_mismatch_err_flag = false;
        }
    }


    //----------function definitions***-----------




    $scope.onSubmit = function () {
        //console.log('--------inside onSubmit function---------');

        var loginBtn = $('#loginBtn').text().replace(/\s+/g, '').toLowerCase();

        //login funcitonality
        if (loginBtn == 'login') {
            //if entered credentials are valid, process them
            if ((validateEmail($scope.inputEmail)) && ($scope.inputPass.length >= 3)) {
                clear_err_msg();
                login_dtl = { "operation": "login", "email": $scope.inputEmail, "pass": $scope.inputPass };
                $scope.user_lgn_in_dtl_obj = JSON.stringify(login_dtl);
                $http({
                    method: "POST",
                    url: "include/php/reply.php",
                    data: $scope.user_lgn_in_dtl_obj
                }).then(
                    function success(response) {

                        switch (response.data.code) {
                            case 200://successful login
                                $scope.lgn_pg_flag = false;
                                $scope.lgn_sgn_btn = false;
                                break;

                            case 2://pass & email do not match 
                                $scope.email_pass_not_found_err_flag = true;
                                //console.log($scope.lgn_pg_flag);
                                break;

                            case 400:
                                //$scope.already_in_use_flg = true;
                                break;


                            default:
                        }

                        console.log('code' + response.data.code);
                    }
                    ,
                    function error(response) {
                        console.log('inside error fucntion');
                    }
                    );//login functionality***
            }
            //Entered credentials are not valid, so show appropriate error message.
            else {
                if (($scope.inputPass.length < 3) && !(validateEmail($scope.inputEmail))) {
                    $scope.pass_err_flag = true;
                    $scope.email_err_flag = true;
                    return false;
                }
                else if (!(validateEmail($scope.inputEmail))) {
                    $scope.pass_err_flag = false;
                    $scope.email_err_flag = true;
                    return false;
                }
                else {
                    $scope.pass_err_flag = true;
                    $scope.email_err_flag = false;
                    return false;
                }
            }// else***
        }
        //login funcitonality***

        //signup funcitonality
        if (loginBtn == 'signup') {
            //Check if credentials while signing up are valid.
            if ((validateEmail($scope.inputEmail)) && ($scope.inputPass.length >= 3) && both_pass_match($scope.inputPass, $scope.inputConfirmPass) && ($scope.inputPass.length <= 25) && ($scope.inputEmail.length <= 35)) {
                clear_err_msg();
                sign_up_dtl = { "operation": "signup", "email": $scope.inputEmail, "pass": $scope.inputPass, "confirmPass": $scope.inputConfirmPass };
                $scope.user_sign_up_dtl_obj = JSON.stringify(sign_up_dtl);
                $http({
                    method: "POST",
                    url: "include/php/reply.php",
                    data: $scope.user_sign_up_dtl_obj
                }).then(
                    function success(response) {

                        switch (response.data.code) {
                            case 0: //email already in use
                                //console.log('already in use');
                                $scope.already_in_use_flg = true;
                                break;

                            case 1: //successfully first time sign up
                                $scope.lgn_pg_flag = false;
                                $scope.lgn_sgn_btn = false;
                                console.log($scope.lgn_pg_flag);
                                break;

                            case 400:
                                //$scope.already_in_use_flg = true;
                                break;


                            default:
                        }

                        console.log('code' + response.data);
                    }
                    ,
                    function error(response) {
                        console.log('inside error fucntion');
                    }
                    );
            }//Entered credentials are not valid for sign up process, display appropriate error messages.
            else {
                if (!(validateEmail($scope.inputEmail)) && ($scope.inputPass.length >= 3 && (both_pass_match($scope.inputPass, $scope.inputConfirmPass)))) {
                    $scope.pass_err_flag = false;
                    $scope.email_err_flag = true;
                    $scope.pass_mismatch_err_flag = false;
                }
                else if (!(validateEmail($scope.inputEmail)) && ($scope.inputPass.length >= 3 && !(both_pass_match($scope.inputPass, $scope.inputConfirmPass)))) {
                    $scope.pass_err_flag = false;
                    $scope.email_err_flag = true;
                    $scope.pass_mismatch_err_flag = true;
                }
                else if (!(validateEmail($scope.inputEmail)) && ($scope.inputPass.length < 3)) {
                    $scope.pass_err_flag = true;
                    $scope.email_err_flag = true;
                    $scope.pass_mismatch_err_flag = false;
                    return false;
                }
                else if (!(validateEmail($scope.inputEmail)) && ($scope.inputPass.length < 3)) {
                    $scope.pass_err_flag = false;
                    $scope.email_err_flag = true;
                    return false;
                }
                else if (!(both_pass_match($scope.inputPass, $scope.inputConfirmPass)) && ($scope.inputPass.length < 3)) {
                    $scope.pass_err_flag = true;
                    $scope.pass_mismatch_err_flag = false;
                    $scope.email_err_flag = false;
                    return false;

                }
                else if (!(both_pass_match($scope.inputPass, $scope.inputConfirmPass)) && ($scope.inputPass.length >= 3)) {
                    $scope.pass_mismatch_err_flag = true;
                    $scope.pass_err_flag = false;
                    $scope.email_err_flag = false;
                    return false;

                }
                else {
                    $scope.pass_err_flag = true;
                    $scope.email_err_flag = false;
                    return false;
                }

            }
        }
        //signup funcitonality***

    }//onSubmit***

    $scope.lgn_in_sgn_up_btn = function () {
        clear_err_msg();
        $scope.lgn_pg_flag = true;
    }



});