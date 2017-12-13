<script src="./sdf/validations/forgot-pass/forgot-pass-v.js"></script>
<div class='container' id='forgot-pass-container' style='margin-top:40px;text-align:center;' ng-controller='c_url'>
    <form id='forgot-pass' ng-show='forgorPassFlg'>
        <div ng-show='uiFlg'>
            <div class='row '>
                <div class='col-xs-4 col-xs-offset-4'>
                    <input type='text' id='pass' name='pass' ng-model='pass' class='form-control block' placeholder='New Password' />
                </div>
            </div>
            <div class='row' style='margin-top:20px;'>
                <div class='col-xs-4 col-xs-offset-4'>
                    <input type='text' id='confirmPass' name='confirmPass' ng-model='conPass' class='form-control' placeholder='Confirm New Password'
                    />
                </div>
            </div>
            <div class='row' style='margin-top:20px;'>
                <div class='col-xs-2 col-xs-offset-5'>
                    <button type='submit' class='btn btn-success'>Submit</button>
                </div>
            </div>
        </div>


        <div ng-show='!uiFlg'>
            <div  ng-show='sccssFlg' class='text-center' style='color:green;'>
                Password Updated Successfully.
            </div>
            <div ng-show='failFlg'>
                Failure in password updation, please contact admin.
            </div>
            <div>
                <button class='btn btn-primary'>bact to home</button>
            </div>
        </div>



    </form>
</div>