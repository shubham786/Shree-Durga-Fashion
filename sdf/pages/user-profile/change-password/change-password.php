<link href='./sdf/pages/user-profile/change-password/change-password.css' rel='stylesheet'>
<script src="./sdf/include/validations/usr-profile-pass/usr-profile-pass.js"></script>

<div class='container ' style='height:100%;' id='usrPrflPge' ng-controller='c_user_profile'>
    <div class='row'>
        <!-- left-column -->
<!--         <div class='col-xs-12 col-sm-3 '>
            <div style='' class='p12 borderr'>
                <button id='passBtn'
                 class='btn btn-info btn-block' ng-click='passBtnClk()'>Password</button>
            </div>
            <div class='p12 '>
                <button id='historyBtn' class='btn btn-basic btn-block' ng-click='historyBtnClk()'>Order History</button>
            </div>
        </div> -->
        <!-- ***left-column -->

        <!-- right-column -->
        <div class='col-xs-12  borderg'>
            <!-- password -->
            <form id='changePassForm'>
                <div ng-show='passOrHistoryFlg'>
                    <div class='row p12 '>
                        <div class="form-group">
                            <div class='col-xs-12 col-sm-3'>
                                <label for="usr">Existing Password:</label>
                            </div>
                            <div class='col-xs-12 col-sm-5'>
                                <input type="text" ng-model='existingPass' placeholder="Existing Password" name='existingPass' class="form-control" id="usr">
                            </div>
                        </div>
                    </div>

                    <div class='row p12 '>
                        <div class="form-group">
                            <div class='col-xs-12 col-sm-3'>
                                <label for="usr">New Password:</label>
                            </div>
                            <div class='col-xs-12 col-sm-5'>
                                <input type="text" name="inputPass" ng-model='inputPass' placeholder="New Password" class="form-control" id="inputPass">
                            </div>
                        </div>
                    </div>

                    <div class='row p12 '>
                        <div class="form-group">
                            <div class='col-xs-12 col-sm-3'>
                                <label for="usr">Confirm New Password:</label>
                            </div>
                            <div class='col-xs-12 col-sm-5'>
                                <input type="text" name="inputConfirmPass" ng-model='inputConfirmPass' placeholder="Confirm New Password" class="form-control">
                            </div>
                        </div>
                    </div>

                    <!-- password updated successfully prompt -->
                    <div class='row text-center '>

                        <div ng-show='passUpdatedFlg'  class='col-xs-8 col-xs-offset-2 success '>
                            Password Updated Successfully.
                        </div>

                        <div ng-show='passUpdateFailFlg'  class='col-xs-8 col-xs-offset-2  failure'>
                                Existing password do not match.
                            </div>

                    </div>
                    <!-- ***password updated successfully prompt -->

                    <div class='row p12'>
                        <div class='col-xs-2 col-xs-offset-4'>
                            <button class='btn btn-primary'>
                            Update
                        </button>
                        </div>
                    </div>
                </div>
            </form>
            <!-- ***password -->

            <!-- order-history -->
            <div ng-show='!passOrHistoryFlg'>
                <div class='row ' style='font-size:1.5vw;'>
                    <table class='table table-striped table-responsive table-ed table-hover'>
                        <tr>
                            <th>Index</th>
                            <th>Order Date</th>
                            <th>Order No.</th>
                            <th>Tracking Details</th>
                            <th>Total Amount</th>
                            <th>Payment Mode</th>
                            <th>Status</th>
                        </tr>
                    </table>
                </div>
            </div>
            <!-- order-history -->
        </div>
        <!-- ***right-column -->
    </div>
</div>