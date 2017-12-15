<link href='./sdf/pages/user-profile/user-orders/user-orders.css' rel='stylesheet'>

<div class='container' ng-controller="c_user_orders">
    <!-- navigation tabs -->
    <div class='row'>
        <ul class="nav nav-tabs">
            <li class="active">
                <a data-toggle="tab" ng-click="clkOrders()" href="/#orders">Orders</a>
            </li>
            <li>
                <a data-toggle="tab" ng-click='clkOpenOrders()' href="/#orders">Open Orders</a>
            </li>
            <!-- to be   <li>
                    <a data-toggle="tab" href="/#menu2">Cancelled Orders</a>
                </li> -->
        </ul>
    </div>
    <!-- ***navigation tabs -->

    <!-- data under navigation tabs -->
    <div class="tab-content">

        <div id="orders" class="tab-pane fade in active ">
            <!-- UI for first row to select ordersHistory timePeriod-->
            <div class='row' ng-show='fetchPastOrderSelectFlg'>

                <span class='col-xs-12 '>
                    <span class='col-sm-4 col-xs-4'>
                        Orders for
                    </span>
                    <span class='col-sm-3 col-xs-6'>
                        <span class="form-group">
                            <select class="form-control" ng-change="userDataForPast()" ng-model='pastXMnths' id="sel1">
                                <!-- <option ng-repeat="x in userOrderHistoryTimePeriod">{{x}}</option> -->
                                <option ng-repeat="(key, value) in userOrderHistoryTimePeriod" value="{{key}}">{{value}}</option>
                                <!-- <option value='1'>last 30 days</option>
                                    <option value='6'>past 6 months</option> -->
                            </select>
                        </span>
                    </span>
                </span>
            </div>
            <!-- ***UI for first row to select ordersHistory timePeriod-->

            <!-- UI for no orders -->
            <div class='row' ng-show='noOrdersFlg'>You have no orders so far.</div>
            <!-- ***UI for no orders -->

            <!-- UI for total orders -->
            <div class='row pm0 '>
                <div class='row panel-group pm0' 
                ng-repeat="months in userMasterOrder.months track by $index" ng-init='mIndex=$index'>
                    <div class='row  dOrder   panel panel-primary'
                     ng-repeat='date in userMasterOrder.dates[mIndex] track by $index' ng-init='dIndex=$index'>
                        <!-- UI for date header -->
                        <div class='row  dHeader panel-heading pmrl0 csr_ptr'
                         id='dateBodyId{{mIndex}}{{dIndex}}' ng-click='toggleUI("date",dIndex,mIndex)'>
                            <div class='col-xs-12 border  headingDates'>
                                <div>{{date| date : "dd-MMM-y"}}</div>
                            </div>
                        </div>

                        <!-- ***UI for date header -->

                        <!-- UI for individual orders -->
                        <!-- [{},{},{}..] = d1 -->
                        <div class='panel-body' id='dateBody{{mIndex}}{{dIndex}}' style='display:block;'>
                            <div class='row   panel panel-info' ng-init='oIndex = $index;id_orders=orderArr.tid;' ng-repeat='orderArr in userMasterOrder.orders[mIndex][dIndex] track by $index'>
                                <div class='panel-heading csr_ptr' ng-click='toggleUI("item",dIndex,oIndex)'>
                                    Order# {{orderArr.tid}} Total Amt.:{{getTotalAmt(orderArr.orders)}}
                                </div>
                                <!-- {{order.orders}} -->
                                <!-- {} -->
                                <div class=' panel-body' id='itemBody{{dIndex}}{{oIndex}}' style='display:block;'>
                                    <div class='row ' ng-show='showOrderItem(indv[6])' ng-init='idk = $index;' ng-repeat="indv in orderArr.orders track by $index">
                                        <div class=' row  indvItemOrder' style='margin:0;border:solid 1px rgba(212, 206, 206, 0.200);'>

                                            <div class='col-sm-12 hidden-xs  pm0'>
                                                <li class='lsNone borderr'>
                                                    <a class='csr_ptr' ng-click='detailedProduct(indv[0])'>
                                                        <small> {{getKurtiName(indv[0]) }} </s>
                                                    </a>
                                                </li>
                                            </div>

                                            <div class='col-xs-12 pm0 visible-xs hidden-sm-*'>
                                                <li class='lsNone borderr'>
                                                    <a class='csr_ptr' ng-click='detailedProduct(indv[0])'>
                                                        {{getKurtiName(indv[0]) | limitTo:30}}
                                                    </a>
                                                </li>
                                            </div>

                                            <div class='col-sm-2 col-xs-4 borderg'>
                                                <li class='lsNone csr_ptr'>
                                                    <img width=90px height=120px ng-click='detailedProduct(indv[0])' ng-src='./sdf/images/products/kurtis/{{indv[0]}}/1/{{indv[1]}}/sm/{{$index+1}}.jpg'
                                                    />
                                                </li>
                                            </div>
                                            <!-- <div class='col-xs-10  border'> -->


                                            <div class='col-xs-8 col-sm-4 border'>

                                                <li class='lsNone pull-right' ng-init='payVal = orderArr.payment_status[$index]==0?"No":"Yes" '>
                                                    Payment Done:
                                                    <span class='bgClrGray'>{{payVal}}</span>
                                                </li>
                                                </br>
                                                <li class='lsNone pull-right'>Delivery Status:
                                                    <span class='bgClrGray'>{{delStatusMap(orderArr.deli_status[$index])}}</span>
                                                </li>
                                                </br>
                                                <li class='lsNone pull-right'>Track Id.:{{orderArr.track_id[$index]}}</li>
                                                </br>

                                                <div class='pull-right ' ng-show='delRepMoneybackFlg' style='color:blue;'>
                                                    <button class='csr_ptr  btn btn-default btn-xs' ng-click="delete(mIndex,dIndex,oIndex,$index,id_orders,orderArr.deli_status[$index])">
                                                        <span>Cancel</span>
                                                    </button>
                                                    <button class='csr_ptr btn btn-default btn-xs' ng-click="replace(mIndex,dIndex,oIndex,$index,id_orders,orderArr.deli_status[$index])">
                                                        <span>Replace</span>
                                                    </button>
                                                    <button class='csr_ptr btn btn-default btn-xs ' ng-click="monyBck(mIndex,dIndex,oIndex,$index,id_orders,orderArr.deli_status[$index])">
                                                        <span> MoneyBack</span>
                                                    </button>
                                                </div>



                                            </div>




                                            <div class='col-xs-12 visible-xs hidden-sm-* text-center csr_ptr' style='margin-top:14px;' id='dwnArrow{{mIndex}}{{dIndex}}{{oIndex}}'
                                                ng-click='moreDetails(mIndex,dIndex,oIndex,idk)'>
                                                <!-- ng-click='moreDetails(mIndex,dIndex,oIndex)'> -->
                                                <img ng-src='./sdf/images/website/misc/down-arrow.png' />
                                            </div>
                                            <div class='col-xs-12 col-sm-6  border hidden-xs visible-sm-* ' id='dwnArrowDtl{{mIndex}}{{dIndex}}{{oIndex}}{{idk}}'>


                                                <li class='lsNone pull-right'>Id.:{{indv[0]}}</li>
                                                </br>
                                                <li class='lsNone pull-right'>{{indv[1]}}({{indv[2]}})</li>
                                                </br>
                                                <!--color-->
                                                <!--size-->
                                                <li class='lsNone pull-right'>Qnty:{{indv[3]}}</li>
                                                </br>
                                                <li class='lsNone pull-right'>
                                                    <span style='font-weight:bold;'>
                                                        &#8377
                                                    </span>
                                                    <span style='color:#c05339;'>
                                                        {{indv[5]}}
                                                    </span>
                                                </li>
                                                </br>
                                                <li class='lsNone pull-right'>Order #{{id_orders}}</li>
                                            </div>



                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ***UI for individual orders -->
                </div>
            </div>
            <!--*** UI for total orders -->
        </div>

    </div>
    <!--***UI for total orders -->

    <!--UI for open orders -->
    <div id="menu1" class="tab-pane fade">
        <h3>Menu 1</h3>
        <p>Some content in menu 1.</p>
    </div>
    <!--***UI for open orders -->

    <!-- UI for cancelled orders -->
    <div id="menu2" class="tab-pane fade">
        <h3>Menu 2</h3>
        <p>Some content in menu 2.</p>
    </div>
    <!-- ***UI for cancelled orders -->
<!-- ***data under navigation tabs -->



<!-- (position:fixed) -->

<!-- UI for product deletion -->

<div ng-show='areYouSureDelScreenFlg' style="position:fixed;right:0;bottom:0;width:100%;height:100%;background-color:rgba(73, 71, 75, 0.568);">
    <div class='row '>
        <div class='col-sm-4 col-sm-offset-4 col-xs-10 col-xs-offset-1 ' ng-click='hideDbSuccessPromptMsgFlg()'
         style='margin-top:30px;text-align:center;font-size:20px;height:200px;
            background-color:rgb(255, 255, 255);border:1px solid rgba(152, 179, 152, 0.24);'>
            <span>Are You Sure You want to delete this product, this can not be undone.</span>

            <div class='row border'>
                <button class='btn btn-primary pull-left' ng-click='deleteOrderItem()'>Ok</button>
                <button class='btn btn-primary pull-right' ng-click="hideDelete()">Cancel</button>
            </div>
        </div>
    </div>
</div>

<!-- ***UI for product deletion -->

<!-- UI for product replace -->

<div ng-show='areYouSureReplaceScreenFlg' style="position:fixed;right:0;bottom:0;width:100%;height:100%;background-color:rgba(73, 71, 75, 0.568);">

    <div class='row '>
        <div class='col-sm-4 col-sm-offset-4 col-xs-10 col-xs-offset-1 ' ng-click='hideDbSuccessPromptMsgFlg()' 
        style='margin-top:30px;text-align:center;font-size:20px;height:200px;
                background-color:rgb(255, 255, 255);border:1px solid rgba(152, 179, 152, 0.24);'>
            <span>Are You Sure You want to replace this product, this can not be undone.</span>

            <div class='row border'>
                <button class='btn btn-primary pull-left' ng-click='replaceOrderItem()'>Ok</button>
                <button class='btn btn-primary pull-right' ng-click="hideReplace()">Cancel</button>
            </div>
        </div>
    </div>
</div>

<!-- ***UI for product replace -->

<!-- UI for money back -->

<div ng-show='areYouSureMoneyBckScreenFlg' style="position:fixed;right:0;bottom:0;width:100%;height:100%;background-color:rgba(73, 71, 75, 0.568);">

    <div class='row '>
        <div class='col-sm-4 col-sm-offset-4 col-xs-10 col-xs-offset-1 ' ng-click='hideDbSuccessPromptMsgFlg()'
         style='margin-top:30px;text-align:center;font-size:20px;height:200px;
                            background-color:rgb(255, 255, 255);border:1px solid rgba(152, 179, 152, 0.24);'>
            <span>Are You Sure You want MoneyBack for this product, this can not be undone.</span>

            <div class='row border'>
                <button class='btn btn-primary pull-left' ng-click='monBckOrderItem()'>Ok</button>
                <button class='btn btn-primary pull-right' ng-click="hideMonBck()">Cancel</button>
            </div>
        </div>
    </div>
</div>

<!-- ***UI for money back -->

<!-- UI for thanks for your feedback -->

<div ng-show='thanksFeedBack' style="position:fixed;right:0;bottom:0;width:100%;height:100%;background-color:rgba(73, 71, 75, 0.568);">
    <div class='row '>
        <div class='col-sm-4 col-sm-offset-4 col-xs-10 col-xs-offset-1 ' ng-click='hideDbSuccessPromptMsgFlg()'
         style='margin-top:30px;text-align:center;font-size:20px;height:100px;
                                        background-color:rgb(255, 255, 255);border:1px solid rgba(152, 179, 152, 0.24);'>
            <span>Thanks for your FeedBack.</span>
        </div>
    </div>
</div>

<!-- ***UI for thanks for your feedback -->

<!-- Something went wrong, Please contact admin -->

<div ng-show='failedToUpdate' style="position:fixed;right:0;bottom:0;width:100%;height:100%;background-color:rgba(73, 71, 75, 0.568);">
    <div class='row '>
        <div class='col-sm-4 col-sm-offset-4 col-xs-10 col-xs-offset-1 '
         ng-click='hideDbSuccessPromptMsgFlg()' style='margin-top:30px;text-align:center;font-size:20px;height:100px;
                                            background-color:rgb(255, 255, 255);border:1px solid rgba(152, 179, 152, 0.24);'>
            <span>Something went wrong Please contact admin.</span>
        </div>
    </div>
</div>
<!-- ***Something went wrong, Please contact admin -->

<!-- UI for throwing errors -->

<!-- ***UI for throwing errors -->

<div ng-show='customErrsScreenFlg'

 style="position:fixed;right:0;bottom:0;width:100%;height:100%;background-color:rgba(73, 71, 75, 0.568);">
<div class='container-fluid'>
    <div class='row borderg'>
        <div class='col-sm-4 col-sm-offset-4 col-xs-10 col-xs-offset-1 ' 
        style='margin-top:30px;text-align:center;font-size:20px;height:200px;
                                background-color:rgb(255, 255, 255);border:1px solid rgba(152, 179, 152, 0.24);'>
            <span id='idCustomErrors'>Are You Sure You want MoneyBack for this product, this can not be undone.</span>

            <div class='row border'>
                <button class='btn btn-primary ' ng-click='hideCustomErrorScreen()'>Ok</button>
            </div>
        </div>
    </div>
    </div>
</div>

<!-- ***(position:fixed) -->

</div>
<!-- ***root -->