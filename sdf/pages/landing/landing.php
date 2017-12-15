<script src="./sdf/index/login/login-form-validation.js"></script>
<link href='./sdf/pages/landing/landing.css' rel='stylesheet'>



<div id='' ng-controller='c_landing' class='bodyBG'>
	<div class='container  ' style='z-index:29;'>
		<div class='row border' >
			<slider></slider>
		</div>

		

		<div class='row text-center'>
			<i>
				<h2 >FEATURED PRODUCTS</h2>
			</i>
			<div style='border-bottom:1px black solid;'></div>
			<div style='margin-top:3px;border-bottom:1px black solid;'></div>
		</div>

		<div class='row pm0 '>
			<table style='width:100%;'>

				<tr ng-repeat="kd in kurti_display" class='col-xs-6  ' style='padding:20px;'>
					<div style='width:100%;' class=''>
						<td class=' text-center emphasize  ' ng-click='detailed_prod(kd.id_kurti)' style='width:100%;cursor:pointer;background-color:white;border-radius:10px;'>
							<div class='' style='position:relative;overflow: hidden;width:100%;border:1px solid gray;border-radius:0px;box-shadow: 1px 1px 1px #888888;'>
								<img style='width:100%;height:330px;border-radius:0px;'
								 class='imgGrayScale' ng-src='./sdf/images/products/kurtis/{{kd.id_kurti}}/1/{{kd.colors[0]}}/md/1.jpg'
								 alt='' />
								<div class='landingItmPrice'> {{ kd.entry_date | limitTo:10 }}</div>
								<!-- <div class='landingItmPrice'>&#8377; {{ kd.prices[0] }}</div> -->
								<div class='landingItmPrice'> {{ kd.id_kurti }}</div>
								<div class='landingItmName'>{{ kd.name| limitTo:20 }} </div>
								<!--
												<div class='landingItmPrice'> {{ kd.sizes }}</div>
												<div class='landingItmPrice'>PP {{ kd.print_pattern }}</div>
												<div class='landingItmPrice'>P {{ kd.pattern }}</div>
												<div class='landingItmPrice'>SLEEVE {{ kd.sleeve }}</div>
												<div class='landingItmPrice'>NECK {{ kd.neck }}</div>
												<div class='landingItmPrice'>FABRIC {{ kd.fabric }}</div>
												<div class='landingItmPrice'>OCCASION {{ kd.occasion }}</div> -->

								<!-- ,id_kurti,sizes,print_pattern,pattern,sleeve,neck,fabric,occasion -->
								<!-- <div>{{ kd.colors[0] }}</div>-->

							</div>
						</td>
					</div>
				</tr>

			</table>
		</div>
		<div class='row pm0 csr_ptr ' ng-click='toCategories()' style="overflow: hidden;position:relative;background-color:LIGHTgray;width:100%;height:300px;">
			<img ng-src='./sdf/images/website/misc/explore.jpg' class='imgGrayScale' width='100%' height='300px'/>
		</div>
	</div>



</div>

<!-- <div id='scrollTop' style='z-index:1000;position:fixed;right:50px;bottom:90px;cursor:pointer;display:none; width:40px;height:40px;'>
	<img ng-src='./sdf/images/website/top/top.png' width='50' height='50' />

</div> -->