<script src="/sdf/index/login/login-form-validation.js"></script>
<link href='./sdf/directives/header/header.css' rel='stylesheet'>

<!-- <script src="/sdf/index/login/2.js"></script> -->
<!-- <div id="mycontroller" ng-controller="mycontroller"></div>  -->
<div id='header' class='headerLine'>
	<div id='loginFormContainer'>
		<div class='container-fluid pm0 header-brdr'>
			<div style='height:66px;position:relative;' class='pm0 '>
				<!--HEADER -->

				<div class='row   pm0' style='cursor:pointer;
					background-image:url("./sdf/images/website/misc/7011.jpg");
					background-repeat:no-repeat;
					background-size:cover;
					height:100%;
					width:100%;
					'>

					<div class='col-md-3 col-xs-3 ' ng-click='home()'>
						<table class='fill white-space: normal;'>
							<th valign='middle' style='font-size: 1.7vw;white-space: normal;color:#486178;font-family: Delicious;font-size:26px;'>SHREE DURGA FASHIONS
							</th>
						</table>
					</div>


					<div class='col-md-9 col-xs-9   fill' style=''>
						<table class='fill col-xs-12 pull-right'>
							<!-- <th class='col-xs-3 border'>
								<div class="input-group pull-right">
									<span class="input-group-addon">
										<i class="glyphicon glyphicon-search"></i>
									</span>
									<input id="email" type="text" class="form-control" name="email" placeholder="Search...">
								</div>
							</th> -->
							<th valign='middle col-xs-8  ' class='' style='border:solid 0px blue;'>
								<button id='loginSignupBtn' ng-show='lgn_sgn_btn' ng-click='lgn_in_sgn_up_btn()' type='button'
								 class='btn btn-success btn-lg pull-right '
								 style='font-size:1vw;background-color:#486178;'>
									Log In/Sign Up</button>

								<div ng-show='!lgn_sgn_btn' class="dropdown pull-right">
									<button class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">{{header_login_btn| limitTo:15}}
										<span class="caret"></span>
									</button>
									<ul class="dropdown-menu">
										<li>
											<a ng-click='userProfile(1)'>Order History</a>
										</li>
										<li>
											<a ng-click='userProfile(0)'>Change Password</a>
										</li>
										<li>
											<a ng-click='logout()'>Logout</a>
										</li>
									</ul>
								</div>
							</th>
							<th class='col-xs-1  '>
								<span ng-show='cart_icon_flag' id='cart_window_id' ng-click="cart_window()" style='margin-right:-15px;cursor:pointer;' class=' large glyphicon glyphicon-shopping-cart pull-right'></span>
							</th>

							<th valign='top' class='col-xs-1 ' style='padding-left:0px;margin-bottom:-5px;'>
								<span ng-show='cart_icon_flag' class='badge block' id='cart_qty' style='font-size:13px!important;cursor:pointer; margin-left:-5px;margin-bottom:-18px;'>
								</span>
							</th>

						</table>

					</div>

				</div>
				<!--HEADER ***-->

				<!-- Cart Window -->
				<div class='row  pm0' style='overflow-x:hidden;'>
					<!-- it's the outer border -->
					<div id='org_window_id' class='col-lg-3 col-xs-offset-9  ' style='border-radius:3px;border:solid 1px gray;display:none;
				position:absolute;right:0;z-index:10;background-color:rgba(241, 236, 236, 0.98);'>
						<div class='row'>
							<div style='overflow:auto;overflow-x:hidden;max-height:300px;'>
								<div ng-repeat='item in lclCart' style='border-bottom:2px solid lightgrey;'>
									<div class='row pm0'>
										<!-- img portion -->
										<div class='col-xs-4 '>
											<img class='  sm-gry-brdr' ng-click='tmtDetailedProd(item[0])' width=100% height=100px ng-src='./sdf/images/products/kurtis/{{item[0]}}/1/{{item[1]}}/md/1.jpg'
											 style='margin-bottom:10px; cursor:pointer;' />
										</div>
										<!-- ***img portion -->
										<!-- non-image portion -->
										<div class='col-xs-8 pm0'>
											<!-- for item-name -->
											<div class='row pm0' style='border: solid 0 blue;'>
												<h6>{{cartItemDtl[$index].name | limitTo:30}}...</h6>
											</div>
											<!-- ***for item-name -->
											<!-- for unit price and unitPrice*qty -->
											<div class='row pm0'>
												<!-- portion-1/2 -->
												<div class='col-xs-6' style='border:solid 0 blue;'>
													<!-- <span class='glyphicon glyphicon-minus-sign csr_ptr lg ' ng-click='rmv_qty(item)'></span> -->
													<!-- <input type='text' id='{{item.id}}size' class='form-control' style='width:37px;display:inline-block;' placeholder='qty' ng-model='lclCart[$index][3]'
													 readonly/> -->
													<!-- <span class='glyphicon glyphicon-plus-sign csr_ptr lg' ng-click='add_qty(item)'></span> -->
												</div>
												<!-- ***portion-1/2 -->
												<!-- portion-2/2 -->
												<div class='col-xs-6' style='border:solid 0 blue;'>
													<div class='text-center'>
														&#8377 {{cartItemDtl[$index].price }}
														<!-- &#8377 {{cartItemDtl[$index].price * lclCart[$index][3]}} -->
													</div>
													<!-- 	<div class='text-center'>
														(&#8377{{cartItemDtl[$index].price}} x {{lclCart[$index][3]}})
													</div> -->

												</div>
												<!-- ***portion-2/2 -->
											</div>
											<!-- ***for unit price and unitPrice*qty -->



										</div>
										<!--***non-image portion -->
									</div>
								</div>
							</div>
							<div class='row'>
								<!-- <div class='col-xs-12 '>
									<div class=' col-xs-offset-4' style='font-size:16px;'>
										<strong>Total Amount Rs. :<span id='tPrice' ng-bind='tPrice'></strong>
									</div>
								</div> -->
							</div>
							<div class='row'>
								<div class='col-xs-6 text-center'>
									<button class='btn btn-primary' ng-click='continue()'>CONTINUE</button>
								</div>
								<div class='col-xs-6 text-center'>
									<button ng-click='cartDoorClk()' class='btn btn-primary'>CHECKOUT</button>
								</div>
							</div>
						</div>


					</div>



				</div>
				<!--Cart Window -->

			</div>

		</div>

		<!--Login Page-->
		<div style='background-color:rgba(23,23,23,0.3);z-index:100;position:fixed;top:0;left:0;;width:100%;height:100%;' class=' row pm0'
		 ng-show='lgn_pg_flag'>
			<div id='loginPage ' style='border-radius:8px;background-color:white;height:80%;margin-top:5%;' class='col-sm-12 col-md-8 col-md-offset-2   '>
				<div class='login conatiner '>
					<div class='row   pm0'>
						<span id='closeLoginPage' ng-click='close_lgn_pge()' class='glyphicon glyphicon-remove pull-right' style='cursor:pointer;font-size:20px'>
						</span>
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

								<!-- <div class='text-center' ng-show='notVerifiedFlg' style='background-color:red;color:white;font-size:13px;'>
										Please verify your email id by signing into your registered email and visiting our link.
									</div> -->

								<div class='text-center' ng-show='mailSent' style='background-color:green;color:white;font-size:13px;'>
									Please Check from your registered email.
								</div>

								<div class='text-center' ng-show='intrntFlg' style='background-color:red;color:white;font-size:13px;'>
									Failed to connect internet.
								</div>

								<div class='form-group' ng-show='emailFlg'>
									<label for='inputEmail'>Email Address</label>
									<input id='inputEmail' name='inputEmail' ng-model='inputEmail' class='form-control' placeholder='Email Address' autocomplete='off'
									/>
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


								<div id='forgotPass' ng-show='forgot_pass_flag' class='text-center form-group row'>
									<span ng-click='forgot_pass_clk()' style='font-size:12px;cursor:pointer;'> Forgot Password?</span>
								</div>


								<div id='backToLogin' ng-show='bck_to_lgn_flag' class='text-center form-group row'>
									<span ng-click='bck_to_lgn_clk()' style='font-size:12px;cursor:pointer;'>Back to Login</span>
								</div>

								<div class='text-center' ng-show='submitBtn'>
									<button class='btn btn-default btn-md'>
										Submit
									</button>
								</div>

								<div id='newUserSignUp' ng-show='new_usr_sgn_up_flag' class='text-center'>
									<span ng-click='sgn_up_clk()' style='font-size:12px;cursor:pointer;'>{{new_usr_sgn_up_txt}}</span>
								</div>

							</form>

						</div>
					</div>

				</div>

			</div>
		</div>

		<!--Login Page***-->

		<!--loader-->
		<div style='background-color:rgba(23,23,23,0.3);z-index:101;position:fixed;top:0;left:0;;width:100%;height:100%;' class='border'
		 ng-show='loaderFlg'>
			<img src='./sdf/images/website/loader/loader.gif' style='position:fixed;left:50%; top:50%;margin-top:-100px;margin-left:-100px'
			/>
		</div>
		<!--loader-->

	</div>
	<div class='pull-right' style='font-size:10px;'>
		<a>HOME</a>
		<a>CONTACTUS</a>
		<a>ORDERS</a>
		<a>Shree Durga Fashion</a>
		<a>Return Policy</a>

	</div>
</div>


<hr>

<h1 class="visible-xs bg-danger">This text is hidden on an EXTRA SMALL screen.</h1>
  <h1 class="visible-sm bg-info">This text is hidden on a SMALL screen.</h1>
  <h1 class="visible-md bg-warning">This is text hidden on a MEDIUM screen.</h1>
  <h1 class="visible-lg bg-success">This is text hidden on a LARGE screen.</h1> 