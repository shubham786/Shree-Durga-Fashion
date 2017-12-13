<link href='./sdf/pages/cart-door/cart-door.css' rel='stylesheet'>
<script src="./sdf/include/validations/cart-door-add/cart-door-add.js"></script>
<div class='container' id='cart_door_pge' ng-controller='c_cart_door'>
    <div class='row ' ng-show='cartAddPgeFlg'>
        <div class='col-sm-9 col-xs-12 '>

            <!-- Displays Cart Items -->
            <div class=' col-xs-12 '>
                <div class='panel-group ' style='height:auto;'>
                    <div class="panel panel-info">
                        <div class="panel-heading clearfix csr_ptr" role="tab" id="ur_cart_header_id">
                            <h4 class="panel-title pull-left">
                                Your Cart
                            </h4>
                        </div>
                        <div class="panel-body" id='ur_cart_header_content' style='overflow-y:auto;'>
                            <div ng-repeat='item in cart_items' class='row'>
                                <div class="panel panel-default">
                                    <div class=" panel-heading">{{$index+1}}){{cart_items_dtl[$index].name | limitTo:60}}...
                                        <span class='glyphicon glyphicon-trash csr_ptr pull-right' ng-click='delete_item(item)'></span>

                                    </div>

                                    <div class="panel-body">
                                        <img class='col-xs-12 col-sm-6 col-md-2  sm-gry-brdr ' ng-click='tmtDetailedProduct(item[0])' width=50px height=150px ng-src='./sdf/images/products/kurtis/{{item[0]}}/1/{{item[1]}}/md/1.jpg'
                                            style='margin-bottom:10px;box-shadow: 2px 3px 5px #888888;' />

                                        <div class='col-xs-12 col-sm-6 col-md-10 '>
                                            <!-- {{cart_items_dtl[$index].name | limitTo:60}}... -->
                                            </br>
                                            Id:{{item[0]}} color:{{item[1]}}
                                            </br>
                                            Size:{{item[2]}}</br>
                                            Price:{{cart_items_dtl[$index].price}} x{{item[3]}} ={{cart_items_dtl[$index].price * item[3]}}</br>
                                            <span style='color:red;display:none;' id='{{$index}}qtyExceeded'>
                                            </span>
                                            </br>

                                            <!-- <span class='glyphicon glyphicon-minus-sign csr_ptr lg ' ng-click='rmv_qty(item)'></span> -->
                                            <input type='number' min='1' id='{{$index}}size'
                                             class='form-control' style='width:56px;display:inline-block;' placeholder='qty'
                                                ng-model='item[3]' readonly/>
                                            <!-- id='{{item.id}}size' -->
                                            <!-- <span class='glyphicon glyphicon-plus-sign csr_ptr lg' ng-click='add_qty(item)'></span> -->
                                            <span id='{{$index}}edit' ng-click='edit($index)'>
                                                <a>Edit</a>
                                            </span>
                                            <span id='{{$index}}update' ng-click='update($index,item[0],item[2],item[3])' style='display:none'>
                                                <a>Update</a>
                                            </span>

                                        </div>

                                    </div>


                                </div>

                            </div>

                            <div class='row' ng-show='noItemFlg'>
                                    <h3>You have no item in your cart.</h3>
                            </div>

                            <div class='text-center visible-xs hidden-sm-*' style='margin-top:15px;'>
                                <button class='btn btn-default btn-lg' ng-click='yourCartContinue_xs()'>continue</button>
                            </div>

                            <div class='text-center hidden-xs visible-sm-*' style='margin-top:15px;'>
                                <button class='btn btn-default btn-lg' ng-click='yourCartContinue_lg()'>continue</button>
                            </div>

                        </div>

                        
                    
                    </div>

                </div>

                
            </div>

         
            <!-- ***Displays Cart Items -->


            <!-- Bill Summary  -->
            <!-- This is shown in xs-screen -->
            <div class=' col-xs-12  visible-xs col-xs-12  pm0'>
                <div class=' col-xs-12 '>
                    <div class='panel-group'>
                        <div class="panel panel-info">
                            <div class="panel-heading clearfix csr_ptr" role="tab" id="bill_summ_xs_header_id">
                                <h4 class="panel-title pull-left">
                                    Bill Summary
                                </h4>
                            </div>
                            <div class="panel-body" id='bill_summ_xs_body_id' style='overflow-y:auto;display:none;'>
                                <div class=' col-xs-12  '>
                                    <div class='row text-center' ng-repeat='item in cart_items_dtl'>
                                        <div class='row'>
                                            Rs. {{item.price}} x {{cart_itemsCopy[$index][3]}}
                                        </div>
                                        <div class='row'>
                                            ( {{item.price * cart_itemsCopy[$index][3]}} )
                                        </div>
                                        <hr>
                                    </div>
                                    <!-- <div style='border-bottom:1px solid black;'></div>
                                            Sub Total: -->

                                    <div style='border-bottom:1px solid black;'></div>
                                    Total Amount:
                                    <span id='sub_total' ng-bind='price'></span>
                                    <div style='border-bottom:1px solid black;'></div>
                                    <div class='text-center ' style='margin-top:18px;'>
                                            <button class='btn btn-default btn-lg' 
                                            ng-click="billSummaryContinue()">continue</button>
                                    </div>
                                    
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--***Bill Summary  -->





            <!-- Address Form -->
            <div id='address_form_validation' class=' col-xs-12 '>
                <div class=''>
                    <div class="panel panel-info">
                        <div class="panel-heading csr_ptr" id='add_form_header_id'>Add Shipping Details</div>
                        <div class="panel-body" style='display:none;' id='add_form_body_id'>
                            <form id='cartDoorAddVal'>
                                <div class='row '>
                                    <div class='col-xs-12 col-sm-8 '>
                                        <div class="form-group">
                                            <label for="inputName">Your Name*</label>
                                            <input type="text" ng-model='name' name='inputName' class="form-control" id="inputName">
                                        </div>
                                    </div>
                                </div>
                                <div class='row'>
                                    <div class='col-xs-12 col-sm-8 '>
                                        <div class="form-group">
                                            <label for="delAdd">Order Delivery Address*</label>
                                            <textarea ng-model='delAdd' class="form-control" rows="5" name='delAdd' id="delAdd"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class='row'>
                                    <div class='col-xs-12 col-sm-8 '>
                                        <div class="form-group">
                                            <label for="state">State*</label>
                                            <select ng-model="state" ng-options="x for x in states" type="text" class="form-control " name='state' id="state" required>
                                                <option></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class='row'>
                                    <div class='col-xs-12 col-sm-8 '>
                                        <div class="form-group">
                                            <label for="city">City*</label>
                                            <input ng-model='city' class="form-control" name='city' id="city">
                                        </div>
                                    </div>
                                </div>
                                <div class='row'>
                                    <div class='col-xs-12 col-sm-8 '>
                                        <div class="form-group">
                                            <label for="pinCode">Pin Code*</label>
                                            <input ng-model='pincode' class="form-control" name='pinCode' id="pinCode">
                                        </div>
                                    </div>
                                </div>
                                <div class='row'>
                                    <div class='col-xs-12 col-sm-8 '>
                                        <div class="form-group">
                                            <label for="mobNum">Mobile Number*</label>
                                            <input ng-model='no' class="form-control" id="mobNum" name='mobNum'>
                                        </div>
                                    </div>
                                </div>

                                <div class='text-center col-sm-8'>
                                    <button type="submit" class="btn btn-lg btn-default">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ***Address Form -->




        </div>


        <!-- Bill Summary  -->
        <!-- This is shown in sm - md - lg screen -->
        <div class=' hidden-xs col-sm-3  pm0'>
            <div class=' col-xs-12 '>
                <div class='panel-group'>
                    <div class="panel panel-primary">
                        <div class="panel-heading clearfix" role="tab" id="ur_cart_header_id">
                            <h4 class="panel-title pull-left">
                                Bill Summary
                            </h4>
                        </div>
                        <div class="panel-body" id='' style='overflow-y:auto;'>
                            <div class=' col-xs-12  '>
                                <div class='row text-center' ng-repeat='item in cart_items_dtl'>
                                    <div class='row'>
                                        Rs. {{item.price}} x {{cart_itemsCopy[$index][3]}}
                                    </div>
                                    <div class='row'>
                                        ( {{item.price * cart_itemsCopy[$index][3]}} )
                                    </div>
                                    <hr>
                                </div>
                                <!-- <div style='border-bottom:1px solid black;'></div>
                                Sub Total: -->

                                <div style='border-bottom:1px solid black;'></div>
                                Total Amount:
                                <span id='sub_total' ng-bind='price'></span>
                                <div style='border-bottom:1px solid black;'></div>
                                <!-- <button class='btn btn-warning pull-right' ng-click='placeOrder()'>Place Order</button> -->
                            </div>
                            <!-- <button class='btn btn-success pull-right' style='position:absolute;bottom:0;right:0;margin-bottom:20px;margin-right:15px;'
                                        ng-click='cart_to_add()'>continue</button> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--***Bill Summary  -->




    </div>

    <div class='row' ng-show='!cartAddPgeFlg'>
        <!-- Unique Number -->
        <div class=' col-xs-12'>
            <div class=''>
                <div class="panel panel-info">
                    <div class="panel-heading">Order Id.</div>
                    <div class="panel-body" style='display:none;' id='tid_header_content'>
                        <span style='font-size:45px;font-style:bold;'>SDF{{transaction_id}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class='text-center'>
            <button class='btn btn-lg btn-default' ng-click='homePage()'>Go To HomePage</button>
        </div>
        <!-- ***Unique Number -->
    </div>


</div>