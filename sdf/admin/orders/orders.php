<link href='/sdf/admin/orders/orders.css' rel='stylesheet'>
<!-- ng-controller='c_orders' -->
<div class='container'>
    <div class='row border' id='oye'>
        <div class='col-xs-12 pm0' >
            <span class='pull-right'>
                <div>Price{{price}}</div>Total Units: {{noOfUnits}}<div></div>  Total Orders (rows): {{noOfOrders}}</span></div>
        <div>Table length:{{orders.length}}</div>
        <div>Total Delivered:{{orders.length}}</div>
        <div>To be delivered:{{orders.length}}</div>
        <div class='pull-right'>
            <div>From:
                <input type='date' ng-model='frm_date_data' ng-change="sortBy(frm_date_data)" /> To:
                <input type='date' ng-model='to_date_data' ng-change='sortBy(to_date_data)' />
            </div>
            <div>Payment Done:
            <select ng-options='var.id as var.value  for var in paymentDoneArrInSort'
             ng-change="sortBy(paymentDoneValue)" ng-model='paymentDoneValue'></select>
             Status:
             <select ng-options='var.id as var.value for var in statusValuesArrInSort'
             ng-change="sortBy(statusValue)" ng-model='statusValue'></select>
            </div>

        </div>
    </div>
    <hr/>
    <!--  -->
    <div class='row'>
        <div class="panel-group" id='hope'>
            <div ng-repeat='months in masterOrders.months track by $index' ng-init='mIndex = $index' class="panel panel-primary">
                <div class="panel-heading csr_ptr" id='monthHead{{$index}}' ng-click='sun("months",$index)'>{{months}} </div>
                <div class='panel-body ' id='monthBody{{$index}}' style='display:block;'>
                    <div ng-repeat='date in masterOrders.dates[mIndex] track by $index'  ng-init='dIndex = $index' class="panel panel-danger">
                        <div class="panel-heading csr_ptr" ng-click='sun("dates",mIndex,dIndex)'>{{date| date : "MMM-dd-y"}} Total Orders:{{masterOrders.orders[mIndex][dIndex].length}}</div>
                        <div class="panel-body" style='display:block;' id='dateBody{{mIndex}}{{dIndex}}'>
                            <!--  -->
                            <div class='row pm0 '>
                                <form name='orders_table_form'>
                                    <div class='panel panel-warning'>
                                        <div class='panel-heading' id='panelHeadingId{{$index}}'>Panel Heading</div>
                                        <div class='panel-body pm0' id='panelBodyId{{$index}}'>
                                            <table class='table table-bordered table-striped table-hover table-condensed table-responsive pm0 '>
                                                <tr class='success'>
                                                    <th>#</th>
                                                    <th>Order Date</th>
                                                    <th>Address</th>
                                                    <th>Orders</th>
                                                    <th>Delivery Status</th>
                                                    <th>Payment Status</th>
                                                    <th>Shipping Date</th>
                                                    <th>Track Id</th>
                                                    <th>Save</th>
                                                </tr>
                                                <tr ng-repeat="x in masterOrders.orders[mIndex][dIndex] track by $index" >
                                                    <!-- {{masterOrders.orders}} -->


                                                    <div>
                                                        <!-- # -->
                                                        <td class='pm0'>
                                                            <span ng-click="showBogusScreen(x.id_orders)" style='cursor:pointer;'>
                                                                {{$index + 1}}</span>
                                                        </td>
                                                        <!-- Order Date -->
                                                        <td class='pm0'>{{x.order_date}}</td>
                                                        <!-- Delivery Address -->
                                                        <td class='  '>
                                                            <ul class='pm0 lsNone'>
                                                                <li>Name:{{ x.name }}</li>
                                                                <li>Address:{{ x.deli_add }}</li>
                                                                <li>Contact No.:{{ x.contact_no }}</li>
                                                            </ul>
                                                            <div class='gray'>
                                                                <!-- Transaction Id -->
                                                                T Id.:{{x.tid}}
                                                            </div>
                                                            <div class='gray'>
                                                                <!-- Table Id -->
                                                                Table Id.:{{x.id_orders}}
                                                            </div>
                                                            <div class='gray'>
                                                                <!-- Total Amount for Individual Order -->
                                                                Total:{{ttlAmt(x.orders)}}
                                                            </div>
                                                            <div class='gray' style='cursor:pointer' 
                                                            ng-click='showComments(mIndex,dIndex,$index)'>
                                                                    <!-- Comments -->
                                                                    Comments:{{x.comments}}
                                                            </div>
                                                        </td>

                                                        <!-- Orders -->
                                                        <td>
                                                            <ul    ng-repeat='orders in x.orders track by $index' class='pm0 lsNone'>
                                                            <li>id:{{ orders[0] }}</li>
                                                                <!--  orders.id -->
                                                                <li>color:{{ orders[1] }}</li>
                                                                <!--  orders.color -->
                                                                <li>size:{{ orders[2] }}</li>
                                                                <!--  orders.size -->
                                                                <li>qty:{{ orders[3] }}</li>
                                                                <!--  orders.qty -->
                                                                <li class='gray'>price:{{ orders[5] }}</li>
                                                                <li  class='gray'>status:{{ orders[6] }}</li>
                                                                <!--  orders.price -->
                                                            </ul>
                                                        </td>
                                                        <!-- Delivery Status -->
                                                        <td class=''>
                                                            <ul  class=' pm0'>
                                                                <li  ng-repeat ='orders in x.deli_status track by $index' class='lsNone'>
                                                                    <!-- {{masterOrders.orders[$parent.$index][$index].deli_status[$index]}} -->
                                                                    <!-- {{orders}} -->
                                                                    <select class='form-control' ng-options='value.id as value.value  for value in
                                                                     status' ng-change='change.called(x.id_order_details,"deliveryStatus")'
                                                                        ng-model='x.deli_status[$index]'>
                                                                    </select>
                                                                    {{x.deli_status}}--{{deli_status}}
                                                                    <!-- ng-model='deli_status[$parent.$index][$index]' -->
                                                                    <!-- item as item.label for item in items track by item.id-->
                                                                    <!-- {{x.deli_status[$index]}} -->


                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <!-- Payment Status -->
                                                        <td>
                                                            <ul  class='pm0'>
                                                                <li id='ss{{mIndex}}{{dIndex}}{{$index}}'   ng-repeat='orders in x.orders track by $index' class='lsNone' style='padding-bottom:12px;'>

                                                                    <select class='form-control' ng-options='value.id as value.value  for value in paymentStatusValues' ng-model='x.payment_status[$index]' class=''
                                                                        ng-change='change.called(x.id_order_details,"paymentStatus")'>
                                                                    </select>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <!-- Shipping Date -->
                                                        <td>
                                                            <ul  class='pm0'>
                                                                <li  ng-repeat='orders in x.orders track by $index' class='lsNone'>
                                                                    <input class='form-control' type='date' placeholder="yyyy-MM-dd" ng-change='change.called(x.id_order_details,"shippingDate")' id='{{myid}}deliDate'
                                                                        ng-model='x.ship_date[$index]' />

                                                                </li>
                                                                <!-- ng-init='myid=$parent.$index.toString()+$index.toString();
                                                                myDatevar = myDate(x.order_date);' -->
                                                            </ul>
                                                        </td>
                                                        <!-- Track Id -->
                                                        <td>
                                                            <ul 
                                                            
                                                            class='pm0'>
                                                                <li  ng-repeat='orders in x.orders track by $index' class='lsNone' ng-init='le = $parent.$index;le2 = le+$index+"trackid"'>{{le2}}
                                                                    <input class='form-control' type='text' id='{{$parent.$index}}{{$index}}trackid' name='{{$parent.$index}}{{$index}}trackid' ng-model='x.track_id[$index]'
                                                                        ng-change='change.called(x.id_order_details,"trackid")'
                                                                    /> {{x.track_id[$index]}}
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td class='borderg'>
                                                            <button  class='btn btn-primary' 
                                                            ng-click='save(mIndex,dIndex,$index,x.id_orders)'>Save</button>

                                                        </td>

                                                    </div>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <!--  -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->

    </div>

    <!-- UI for successfully record saved (position:fixed) -->
    <div id='' class='' ng-show='dbOpSuccess' style="position:fixed;right:0;bottom:0;width:100%;height:100%;background-color:rgba(73, 71, 75, 0.568);">
        <div class='row'>
            <div class='col-xs-4 col-xs-offset-4' ng-click='hideDbSuccessPromptMsgFlg()' style='margin-top:30px;text-align:center;font-size:20px;height:80px;
        background-color:lightgreen;border:3px solid green;border-radius:15px;'>
                <span>Record Saved successfully</span>
            </div>
        </div>
    </div>
    <!-- ***UI for successfully record saved (position:fixed) -->

    <!-- UI for failure in record saving (position:fiexed) -->
    <div id='' class='' ng-show='dbOpFail' style="position:fixed;right:0;bottom:0;width:100%;height:100%;background-color:rgba(73, 71, 75, 0.568);">
        <div class='row'>
            <div class='col-xs-4 col-xs-offset-4' ng-click='hideDbFailPromptMsgFlg()' style='margin-top:30px;text-align:center;font-size:20px;height:80px;
            background-color:rgb(238, 166, 144);border:3px solid rgb(245, 35, 27);border-radius:15px;'>
                <span>Failed to Save Record, PLEASE CONTACT ADMIN ASAP.</span>
            </div>
        </div>
    </div>

    <!-- UI for failure in record saving (position:fiexed) -->

    <!-- UI for bougus entry (position:fixed) -->
    <div style='position:fixed;right:0;top:0;background-color:rgba(73, 71, 75, 0.568);width:100%;height:100%;' ng-show='bogusFlg'>

        <div class="row">
            <div class='col-xs-offset-4 col-xs-4' style='background-color:white;margin-top:20px;padding:30px;border-radius:4px;'>
                <div style='font-size:14px;'> Make Table Id.:
                    <span style='font-size:20px;font-weight:bold;background-color:rgba(128, 128, 128, 0.5)'>{{bogusTableId}} </span>
                    as Bogus entry.</div>
                <button class='btn btn-default' ng-click='registerBogus()'>ok</button>
                <button class='btn btn-success pull-right' ng-click='hideBogusScreen()'>CANCEL</button>
            </div>
        </div>


    </div>
    <!-- UI for bougus entry (position:fixed) -->

    <div style='position:fixed;right:0;top:0;background-color:rgba(73, 71, 75, 0.568);width:100%;height:100%;' ng-show='commentsSectinFlg'>

        <!-- UI for comments section -->
        <div class="row">
            <div class='col-xs-offset-4 col-xs-4' style='background-color:white;margin-top:20px;padding:30px;border-radius:4px;'>
                <div class='row ' style='font-size:14px;padding-bottom:8px;'>
                    <textarea class="form-control" rows="5" ng-model='comments' placeholder="Elaborate as clearly as possible with as many words as possible."></textarea>
                </div>
                <div class=' row  '>
                    <span class='pull-right'>{{1000-comments.length}} words left</span>
                </div>
                <div class='row '>
                    <button class='btn btn-default' ng-click='saveComments()'>ok</button>

                    <button class='btn btn-success pull-right' ng-click='hideCommentsScreen()'>CANCEL</button>
                </div>
            </div>
        </div>

        <!-- ***UI for comments section -->
    </div>