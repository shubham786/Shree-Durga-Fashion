<!--Login Page-->
<div style='background-color:rgba(23,23,23,0.3);z-index:100;position:absolute;top:0;left:0;;width:100%;height:100%;' class='border'
	 ng-show='delivery_add_page_flag'>
		<div id='loginPage' style='border-radius:8px;background-color:white;width:80%;height:80%;margin-left:10%;margin-top:5%;'
		 class=' delete'>
			<div class='login conatiner '>
				<div class='row   pm0'>
                delivery address    
                <span id='closeLoginPage' ng-click='close_lgn_pge()' class='glyphicon glyphicon-remove pull-right' style='cursor:pointer;font-size:20px'> </span>
				</div>
				<div class='row '>
					<div class='col-lg-6 col-lg-offset-3' style='margin-top:20px;'>

						<!--form-->
						<form id='loginForm'>

							<div class='text-center' ng-show='already_in_use_flg' style='background-color:red;color:white;font-size:13px;'>
								Email already in use.
							</div>

							<div class='text-center' ng-show='email_pass_not_found_err_flag' style='background-color:red;color:white;font-size:13px;'>
								Invalid email/password.
							</div>

							<div class='form-group'>
								<label for='inputEmail'>Email Address</label>
								<input id='inputEmail' name='inputEmail' ng-model='inputEmail' class='form-control' placeholder='Email Address' />
							</div>

							<div class='text-center' ng-show='email_max_len_err_flag' style='color:red;'>
								Upto 35 characters allowed.
							</div>


							<div id='emailErr' ng-show='email_err_flag' class='text-center' style='color:red;'>
								Please enter valid E-mail.
							</div>

							<div id='Pass' ng-show='pass_flag' class='form-group'>
								<label for='inputPass'>Password</label>
								<input type='password' name='inputPass' ng-model='inputPass' class='form-control' placeholder='Password' id='inputPass1'
								/>
							</div>


							<div class='text-center' ng-show='pass_max_len_err_flag' style='color:red;'>
								Upto 25 characters allowed.
							</div>

							<div class='form-group' ng-show='confirm_pass_flag' id='confirmPass'>
								<label for='inputConfirmPass'>Confirm Password</label>
								<input type='password' name='inputConfirmPass' ng-model='inputConfirmPass' class='form-control' placeholder='Confirm Password'
								 id='inputConfirmPass' />
							</div>

							<div id='passErr' ng-show='pass_err_flag' class='text-center' style='color:red;'>
								Password should be atleast 3 characters.
							</div>

							<div id='passMatchErr' ng-show='pass_mismatch_err_flag' class='text-center' style='color:red;'>
								Passwords do not match.
							</div>


							<div id='forgotPass' ng-click='forgot_pass_clk()' ng-show='forgot_pass_flag' class='text-center form-group row' style='font-size:12px;cursor:pointer;'>
								Forgot Password?
							</div>


							<div id='backToLogin' ng-click='bck_to_lgn_clk()' ng-show='bck_to_lgn_flag' class='text-center form-group row' style='font-size:12px;cursor:pointer;'>
								Back to Login
							</div>

							<div class='text-center'>
								<button type='submit'>Submit
								</button>
							</div>

							<div id='newUserSignUp' ng-click='sgn_up_clk()' ng-show='new_usr_sgn_up_flag' class='text-center' style='font-size:12px;cursor:pointer;'>
								{{new_usr_sgn_up_txt}}
							</div>

						</form>

					</div>
				</div>

			</div>

		</div>
	</div>

	<!--Login Page***-->