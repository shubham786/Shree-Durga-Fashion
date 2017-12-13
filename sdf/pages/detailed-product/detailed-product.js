rootModule.controller('c_detailed_product', function (s_http, s_local_storage, $rootScope, $scope, $location, $http, $routeParams) {
    console.log('--===c_ Detailed Product===--');
    //Variables
    $scope.add_to_cart_btn = 'Add to Cart';
    //To show which image is default on md screen out of many.
    $scope.current_img_id = 1;
    //To show either bag sprite or -> sprite on add to cart button.
    $scope.bagOrCartFlg = true;
    //Error Flag to propmt user has not selected size.
    $scope.size_err_flg = false;
    //Holds all the details of single selected id.
    $scope.single_detailed_kurti;
    $scope.id = $routeParams.param1;
    //--
    $scope.qty = 1;
    //To show cart icon, even when user returns from nxt page to this previous page, in routing context.
    $scope.selectedSizes = [];
    $rootScope.cart_icon_flag = true;
    //flag to show if the product has zero qty in all sizes.
    $scope.noQty = true;
    $scope.size;
    $scope.color;
    $scope.imgZoomerFlg = false;
    $scope.dtl_kurti_display = $rootScope.kurti_display;
    var updated_kurti_display = [];
    //***Variables

    //State 
    $scope.lclCart = s_local_storage.get_lcl_cart();
    console.log('lcl_cart', $scope.lclCart);

    login_dtl = { "operation": "single_detailed_kurti", "id_kurti": $routeParams.param1 };
    $scope.user_lgn_in_dtl_obj = JSON.stringify(login_dtl);
    s_http.s_http_fun($scope.user_lgn_in_dtl_obj, function (resp) {
        $scope.single_detailed_kurti = resp.data.data;
        $scope.dtl_kurti_display = $scope.kurti_display_prune($rootScope.kurti_display, $scope.single_detailed_kurti[0]);
        console.log('****', $scope.dtl_kurti_display);

        var kd = $rootScope.kurti_display;
        var sdk = $scope.single_detailed_kurti[0];
        console.log('kd=,', kd);
        console.log('sdk=,', sdk);

        for (var i in kd) {
            console.log('i=', i);
            if (kd[i].id_kurti != sdk.id_kurti) {
                if (kd[i].pattern == sdk.pattern) {
                    updated_kurti_display.push(kd[i]);
                }
            }

            /*  else{
                 for(var j in kd[i].print_pattern){
                     var exitJloop = false;
                     for(var k in sdk.print_pattern){
                         if(kd[i].print_pattern[j] == sdk.print_pattern[k]){
                             updated_kurti_display.push(kd[i]);
                             exitJloop = true;
                             break;
                         }
                     }
                     if(exitJloop){
                         break;
                     }
                 }
 
             } */
        }
        $scope.dtl_kurti_display = updated_kurti_display;
        //to find no of sm images.
        isNoQty($scope.single_detailed_kurti);
        login_dtl = { "operation": "noOfImages", "id": $routeParams.param1, "color": resp.data.data[0].colors[0] };
        $scope.user_lgn_in_dtl_obj = JSON.stringify(login_dtl);
        s_http.s_http_fun($scope.user_lgn_in_dtl_obj, function (resp) {
            $scope.noOfImages = new Array(resp.data.data);
        });
    });

    //***State

    //Functions

    $scope.kurti_display_prune = function (a, b) {


        return updated_kurti_display;
    }
    function isNoQty(idDetailArr) {
        //to check is all the sizes have zero quantity, if so, show appropriate message.
        for (var i in idDetailArr[0].qty) {
            if (idDetailArr[0].qty[i] > 0) {
                $scope.noQty = false;
                break;
            }
        }

    }
    $scope.isIdSelected = dtlPrdSrvc.isIdSelected(s_local_storage.get_lcl_cart(), $routeParams.param1);
    if ($scope.isIdSelected) {
        $scope.selectedSizes = dtlPrdSrvc.selectedSizes(s_local_storage.get_lcl_cart(), $routeParams.param1);
        console.log('selected sizes are,', $scope.selectedSizes);
    }
    //in use
    $scope.del = function (img_id) {
        for (i in $scope.lclCart) {
            if ($scope.id == $scope.lclCart[i][0] && size == $scope.lclCart[i][2]) {
                return true;
            }
        }
        return false;
    }
    $scope.rightImg = function () {
        $scope.current_img_id += 1;
        console.log('-->', $scope.noOfImages.length);

        if ($scope.noOfImages.length == $scope.current_img_id) {
            $scope.current_img_id = 1;
        }

    }
    $scope.leftImg = function () {

        if ($scope.current_img_id == 1) {
            $scope.current_img_id = $scope.noOfImages.length;
        }
        $scope.current_img_id -= 1;

    }
    $scope.del2 = function (img_id) {
        console.log('image id is,', img_id);
        if (img_id == '1') { $scope.current_img_id = 1; $('#1').css({ "border": "black 1px solid" }); }
        else if (img_id == '2') { $scope.current_img_id = 2; $('#2').css({ "border": "black 1px solid" }); }
        else if (img_id == '3') { $scope.current_img_id = 3; $('#3').css({ "border": "black 1px solid" }); }
        else if (img_id == '4') { $scope.current_img_id = 4; $('#4').css({ "border": "black 1px solid" }); }
        else if (img_id == '5') { $scope.current_img_id = 5; $('#5').css({ "border": "black 1px solid" }); }
        else if (img_id == '6') { $scope.current_img_id = 6; $('#6').css({ "border": "black 1px solid" }); }
    }

    old_id = 1;
    $scope.sizeClk = function (size) {


        $scope.size_err_flg = false;
        //  color toggle
        id = '#' + 'size_' + size;
        $(old_id).css('background-color', '#ffffff');
        $(old_id).css('color', '#282c3f');

        $(id).css('background-color', '#282c3f');
        $(id).css('color', '#ffffff');
        old_id = id;
        //  color toggle***
        $scope.size = size;
        //If user selects size other then what he alerady added to cart,enable add to cart button.

        $scope.lclCart = s_local_storage.get_lcl_cart();
        for (i in $scope.lclCart) {
            if ($scope.id == $scope.lclCart[i][0] && size == $scope.lclCart[i][2]) {
                console.log('!!!!!!!1');
                $scope.add_to_cart_btn = 'Go to Cart';
                $scope.bagOrCartFlg = false;

                //    $('#addToCartBtn').removeClass('btn-warning').addClass('btn-info');
                return;
            }
        }//addToCartBtn
        $scope.add_to_cart_btn = 'Add to Cart';
        $scope.bagOrCartFlg = true;

    }

    $scope.sizeState = function () {
        // console.log('====',document.getElementById('size_l').innerHTML);
        cart = s_local_storage.get_lcl_cart();
        for (i in cart) {

            size = cart[i][2];
            if (cart[i][0] == $routeParams.param1) {


                ids = 'size_' + size;
                //document.getElementById(ids).innerHTML = 'red';
                id = '#' + 'size_' + size;

                $(id).css('background-color', 'green');
                $(id).css('color', 'red');

            }
        }

    }
    $scope.addToCart = function () {
        //addToCart
        if ($scope.size == undefined) {
            //if no size is selected.
            $scope.size_err_flg = true;
            console.log('return"ing becuse $scope.size is undefined in detailed-product.js');
            return;
        }
        if ($scope.add_to_cart_btn == 'Go to Cart') {
            $location.path('/cart-door');
            return;//It is(i.e. "return") required otherwise, it's executing subsequent code.
        }

        $scope.add_to_cart_btn = 'Go to Cart';
        $scope.bagOrCartFlg = false;
        var cart_qty = document.getElementById('cart_qty').innerHTML;
        if (cart_qty == '') {
            document.getElementById('cart_qty').innerHTML = 1;
            id_qty_obj = [
                parseFloat($scope.single_detailed_kurti[0].id_kurti),
                $scope.single_detailed_kurti[0].colors[0],
                $scope.size,
                $scope.qty,
                0,
                $scope.single_detailed_kurti[0].prices[0]];
            //"0" for product category.0=>kurti
            //mapping=>(id),(color),(size),(qty)

            s_local_storage.set_lcl_cart(id_qty_obj);

        } else {
            document.getElementById('cart_qty').innerHTML = parseInt(cart_qty) + 1;
            var array_of_obj = s_local_storage.get_lcl_cart();

            id_qty_obj = [
                parseFloat($scope.single_detailed_kurti[0].id_kurti),
                $scope.single_detailed_kurti[0].colors[0],
                $scope.size,
                $scope.qty,
                0,
                $scope.single_detailed_kurti[0].prices[0]];
            //"0" for product category.0=>kurti
            console.log('~~~~', $scope.single_detailed_kurti[0].colors[0]);
            s_local_storage.set_lcl_cart(id_qty_obj);
        }
        //***Increasing cart qty(display) on header.

    }

    $scope.imageZoomer = function () {
        console.log('image zoomer has been called for');
        $scope.imgZoomerFlg = true;
        $('body').css('overflow-y', 'hidden');
    }

    $scope.closeZoomer = function () {
        $scope.imgZoomerFlg = false;
        $('body').css('overflow-y', 'auto');
    }



    var x = 6;
    $scope.records = new Array(6);

    $scope.mouseOver = function (img_id) {
        //limit--only 6 images at max can be shown for products.
        //console.log(img_name);
        if (img_id == '1') { $scope.current_img_id = 1; $('#1').css({ "border": "#1DBC99 1px solid" }); }
        else if (img_id == '2') { $scope.current_img_id = 2; $('#2').css({ "border": "#1DBC99 1px solid" }); }
        else if (img_id == '3') { $scope.current_img_id = 3; $('#3').css({ "border": "#1DBC99 1px solid" }); }
        else if (img_id == '4') { $scope.current_img_id = 4; $('#4').css({ "border": "#1DBC99 1px solid" }); }
        else if (img_id == '5') { $scope.current_img_id = 5; $('#5').css({ "border": "#1DBC99 1px solid" }); }
        else if (img_id == '6') { $scope.current_img_id = 6; $('#6').css({ "border": "#1DBC99 1px solid" }); }

    }


    $scope.mouseLeave = function (img_id) {
        if (img_id == '1') { $('#1').css({ border: 'none' }); }
        else if (img_id == '2') { $('#2').css({ border: 'none' });; }
        else if (img_id == '3') { $('#3').css({ border: 'none' });; }
        else if (img_id == '4') { $('#4').css({ border: 'none' }); }
        else if (img_id == '5') { $('#5').css({ border: 'none' }); }
        else if (img_id == '6') { $('#6').css({ border: 'none' }); }
    }
    //***Functions
});