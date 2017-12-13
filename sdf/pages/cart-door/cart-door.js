rootModule.controller('c_cart_door', function (s_local_storage, s_http, $scope, $route, $location, $http, $rootScope, $anchorScroll) {
    console.log('--===c_cart_door===--');

    //Variables
    $rootScope.cart_icon_flag = false;
    $scope.states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal', 'Andaman & Nicobar', 'Chandigarh', 'Dadra and Nagar Haveli', 'Daman & Diu', 'Delhi', 'Lakshadweep', 'Puducherry',];
    $scope.state;
    //Fetching cart items from local storage and mapping color N size.
    $scope.cart_items = (s_local_storage.get_lcl_cart());
    $scope.noItemFlg = false;
    $scope.cart_itemsCopy = [];
    angular.copy($scope.cart_items, $scope.cart_itemsCopy);
   
    


    $scope.ids_string = cartDoorService.cartIds(s_local_storage.get_lcl_cart());
    $scope.price = 0;
    
    //remove
    $scope.name = ""
    $scope.delAdd = ""
    $scope.state = '';
    $scope.city = "";
    $scope.pincode = '';
    $scope.no = '';
    $scope.transaction_id;
    $scope.qtyExceeded = false;
    $scope.cartAddPgeFlg = true;
    //remove
    //***Variables

    if($scope.cart_items == null || $scope.cart_items == undefined || $scope.cart_items.length == 0){
        console.log('---->>>',$scope.cart_items);
        $scope.noItemFlg = true;
    }else{
        $scope.noItemFlg = false;
    }


    var x = JSON.stringify({ "operation": "id_array_dtl", "ids_string": $scope.ids_string });
    s_http.s_http_fun(x, function (r) {

        $scope.cart_items_dtl = cartDoorService.idsToDtlMapping(r.data.data, s_local_storage.get_lcl_cart());
        //above array holds[ [id,name,price] ... ]
        //console.log('$scope.cart_items_dtl--<<', $scope.cart_items_dtl);
        $scope.price = cartDoorService.price(s_local_storage.get_lcl_cart(), $scope.cart_items_dtl);
        //above value holds total sum of items in cart(qty * price per unit)
       // console.log('price-->>', $scope.price);
    });


    /* $scope.adjust = function (r) {
        console.log('r.data.data', r.data.data);
        $scope.cart_items_dtl = [];
        cart_items_received = r.data.data;
        l = [{ 'id': 0, 'name': 'shubham', 'price': 1000 }];

        for (i = 0; i < $scope.cart_items.length; i++) {
            for (j = 0; j < cart_items_received.length; j++) {
                if ($scope.cart_items[i][0] == cart_items_received[j].id_kurti) {
                    $scope.cart_items_dtl.push({ 'id': $scope.cart_items[i][0], 'name': cart_items_received[j].name, 'price': cart_items_received[j].prices[0] });
                    $scope.price += parseInt($scope.cart_items_dtl[i].price);
                }
            }
        }

        console.log('$scope.cart_items_dtl', $scope.cart_items_dtl);
    } */


    /* s_http.s_http_fun(opr_str, function (resp) {
        cart_items_received = resp.data.data;
        console.log('-------cartItemsReceived----------', cart_items_received);
        for (i = 0; i < $scope.cart_items.length; i++) {
            for (j = 0; j < cart_items_received.length; j++) {
                if ($scope.cart_items[i][0] == cart_items_received[j].id_kurti) {
                    $scope.cart_items_dtl.push({ 'id': $scope.cart_items[i].id, 'name': cart_items_received[j].name, 'price': cart_items_received[j].prices[0] });
                    $scope.price += parseInt($scope.cart_items_dtl[i].price);
                }
            }
        } console.log('default total', $scope.price);
    }); */
    $("#ur_cart_header_id").click(function () {
        $("#ur_cart_header_content").slideDown("slow");
        $("#bill_summ_xs_body_id").slideUp("slow");
        $("#add_form_body_id").slideUp("slow");
    });

    $("#add_form_header_id").click(function(){
        if(!$scope.noItemFlg){
        $("#ur_cart_header_content").slideUp("slow");
        $("#bill_summ_xs_body_id").slideUp("slow");
        $("#add_form_body_id").slideDown("slow");
        }
    });

    $("#bill_summ_xs_header_id").click(function () {
        if(!$scope.noItemFlg){
        $("#ur_cart_header_content").slideUp("slow");
        $("#bill_summ_xs_body_id").slideDown("slow");
        $("#add_form_body_id").slideUp("slow");
        }
    });
    height = '500px';
    $('#ur_cart_header_content').css('height', screen.height - 400);
    //state
    //$('#footer').css('position','absolute');
    //***State

    //Functions
    $scope.deli_add_submit = function () {
        if (localStorage.getItem('email') == null) {
            $rootScope.lgn_pg_flag = true;
            return false;
        }
        else {

        }
        
        $scope.cartAddPgeFlg = false;
        
       // console.log('--->>>', $scope.cart_items);
        

        opr_str = {
            "operation": "deli_add_submit",
            "name": $scope.name,
            "delAdd": $scope.delAdd,
            "state": $scope.state,
            "city": $scope.city,
            "pincode": $scope.pincode,
            "no": $scope.no,
            "email": localStorage.getItem('email'),
            //"orders": JSON.stringify($scope.cart_items)
            "orders": localStorage.getItem('id_clr_size_qty_array_obj')
        };
        opr_str = JSON.stringify(opr_str);
        var response;
        s_http.s_http_fun(opr_str, function (resp) {
            console.log(resp);
            if (resp.data.code == 201) {
                $scope.transaction_id = resp.data.data;
                console.log(resp);
                //Hide address form N show genereated code.
                $("#add_form_header_content").slideToggle("slow");
                $("#tid_header_content").slideDown("slow");//
                $("#add_form_header_content").css("display", "none");
                $("#ur_cart_header_content").css("display", "none");
            }
        });
        s_local_storage.clear_lcl_cart();
        document.getElementById('cart_qty').innerHTML = '';
    }

    $scope.edit = function (index) {
        console.log('-->', index);
        document.getElementById(index + "size").readOnly = false;
        document.getElementById(index + 'edit').style.display = 'none';
        document.getElementById(index + 'update').style.display = 'inline';
    }
    $scope.homePage = function () {
        $location.path("/");
    }
    $scope.update = function (index, productId, size, qty) {
       
        document.getElementById(index + "size").readOnly = true;
        document.getElementById(index + 'edit').style.display = 'inline';
        document.getElementById(index + 'update').style.display = 'none';



        var x = JSON.stringify({ "operation": "kurtiQty", "id_kurti": productId });
        s_http.s_http_fun(x, function (resp) {
            var indvKurtiDtl = resp.data.data[0];
            for (var i in indvKurtiDtl.sizes) {
                if (indvKurtiDtl.sizes[i] == size) {
                    if (indvKurtiDtl.qty[i] >= qty) {
                        //updated quantity within limits.
                        document.getElementById(index + 'qtyExceeded').style.display = 'none';
                        s_local_storage.setQty(productId, indvKurtiDtl.sizes[i], qty);
                        $scope.price = cartDoorService.price(s_local_storage.get_lcl_cart(), $scope.cart_items_dtl);
                        angular.copy($scope.cart_items,$scope.cart_itemsCopy);
                    } else {
                        //exceeded stock quantity.
                        document.getElementById(index + 'qtyExceeded').style.display = 'inline';
                        document.getElementById(index + 'qtyExceeded').innerHTML = 'Maximum Limit is ' + indvKurtiDtl.qty[i];
                        setTimeout(function(){
                            document.getElementById(index + 'qtyExceeded').style.display = 'none';
                        }, 2000);
                        //qnty has exceeded permissible limit so settin qnty to its initial value.
                        $scope.cart_items[index][3] = $scope.cart_itemsCopy[index][3];
                        //$scope.qtyExceeded = true;
                    }

                }
            }
        });

    }

    /* $scope.price_update = function (item, dx) {
         for (i = 0; i < $scope.cart_items_dtl.length; i++) {
             if ($scope.cart_items_dtl[i].id == item[0]) {
                 $scope.price += dx * ($scope.cart_items_dtl[i].price);
                 return;
             }
         }
     }
      $scope.add_qty = function (item) {
         $scope.price_update(item, 1);
         document.getElementById('sub_total').innerHTML = $scope.price;
         item[3] += 1;//[3] = qty
         s_local_storage.change_qty(item, 1);
     }
 
     $scope.rmv_qty = function (item) {
         if (item[3] == 1) { return; }
         $scope.price_update(item, -1);
         document.getElementById('sub_total').innerHTML = $scope.price;
 
         item[3] -= 1;//[3] = qty
         s_local_storage.change_qty(item, -1);
     } */
    $scope.delete_item = function (item) {
        s_local_storage.delete_item(item);
        $route.reload();//refreshes current page, so that the deleted item is not shown on page.
        var qnty = parseInt(document.getElementById('cart_qty').innerHTML);
        if (qnty > 0) {
            qnty = qnty - 1;
            qnty = (qnty == 0) ? '' : qnty;
        }
        document.getElementById('cart_qty').innerHTML = qnty;
    }
    $scope.checkoutClk = function () {
        $location.path('/checkout');
    }




    $scope.yourCartContinue_xs = function () {
        if(!$scope.noItemFlg){
        $("#ur_cart_header_content").slideUp("slow");
        $("#bill_summ_xs_body_id").slideDown("slow");
        }
        
    }

    $scope.yourCartContinue_lg = function () {
        if(!$scope.noItemFlg){
        $("#ur_cart_header_content").slideUp("slow");
        $("#add_form_body_id").slideDown("slow");
        }
       
    }

    $scope.billSummaryContinue = function () {
        $("#ur_cart_header_content").slideUp("slow");
        $("#bill_summ_xs_body_id").slideUp("slow");
        $("#add_form_body_id").slideDown("slow");

    }

    $scope.tmtDetailedProduct = function (id) {
        $location.path('detailed-product/' + id);
    }
    //***Functions



});
