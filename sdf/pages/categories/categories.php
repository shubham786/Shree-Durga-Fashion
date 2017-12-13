<link href='./sdf/pages/categories/categories.css' rel='stylesheet'>



<div id='' ng-controller='c_categories' class='bodyBG'>
	<div class='container-fluid pm0 opacityFix' style='z-index:29;'>
		<div style='height:66px;' class='pm0 '>

			<div class='container'>


				<div class='row  border'>
					<!-- filters -->
					<div class='col-xs-3 hidden-xs'>
						<!-- price -->
						<div>
							<div class='row'>Price</div>
							<div class=''>

								<div class="checkbox" ng-repeat='value in data.priceArr'>
									<label>
										<input type="checkbox" ng-model='hey' ng-click="priceChng( hey,value)">Rs{{value}} To Rs{{value+999}}{{hey}}
									</label>
								</div>
							</div>
						</div>
						<!-- ***price -->



						<!-- size -->
						<div>
							<div class='row'>Size</div>
							<div class=' col-xs-2 '>

								<div class="checkbox" ng-repeat='value in data.sizeArr'>
									<label>
										<input type="checkbox" ng-model='hey' ng-click="sizeChng( hey,value)">{{value}}{{hey}}
									</label>
								</div>
							</div>
						</div>
						<!-- ***size -->







					</div>
					<!-- ***filters -->

					<!-- Kurti Display -->
					<div class='col-xs-9 borderr ' >
						<!-- for xs screen -->
						<div class='row border'>
							<div class='col-xs-6'>
								<button class='btn btn-defalut'>FILTER</button>
							</div>
							<div class='col-xs-6'>
									<button class='btn btn-defalut'>SORT BY</button>
								</div>
						</div>

						<!-- ***for xs screen -->

						<!-- right side filters just above kurtis -->
						<div class='row hidden-xs'>
						<div class='row pm0'>
							<div class='pull-right'>
								<div class="form-group">
									<!-- <label for="sel1">Sort By:</label> -->
									<select class="form-control" ng-model='sortBy' ng-change="sortByFn(sortBy)" id="sel1">
										<option value='0'>--Sort By--</option>
										<option value='1'>Price:Low to High</option>
										<option value='2'>Price:High to Low</option>
										<option value='3'>Latest Arrivals</option>
									</select>
								</div>
							</div>

						</div>
						<!-- clearAll -->
						<div class='' style="color:#776CCE;">
							{{allSelVals}}
							<b>CLEAR ALL</b>
						</div>
						<!-- ***clearAll -->


						<!-- 6 Options -->
						<div class='row '>
							<div class='col-xs-2  text-center'>
								<span class='csr_ptr fntw400' ng-class="{'bb1': optionsValue == '0'}" ng-click="namePPfn()">Pattern</span>
							</div>
							<!-- print_pattern -->

							<div class='col-xs-2  text-center'>
								<span class='csr_ptr fntw400' ng-class="{'bb1': optionsValue == '1'}" ng-click='namePrintFn()'>Print</span>
							</div>

							<div class='col-xs-2  text-center'>
								<span ng-class="{'bb1': optionsValue == '2'}" ng-click="nameSlvLen()" class='csr_ptr fntw400'>Sleeve Length</span>
							</div>

							<div class='col-xs-2  text-center'>
								<span class='csr_ptr fntw400' ng-class="{'bb1': optionsValue == '3'}" ng-click="nameNeck()">Neck</span>
							</div>

							<div class='col-xs-2  text-center'>
								<span class='csr_ptr fntw400' ng-class="{'bb1': optionsValue == '4'}" ng-click='nameFabric()'>Fabric</span>
							</div>

							<div class='col-xs-2  text-center'>
								<span class='csr_ptr fntw400' ng-class="{'bb1': optionsValue == '5'}" ng-click="nameOcc()">Occasion</span>
							</div>

						</div>
						<!-- ***6 Options -->

						<!-- select options for 6options -->
						<div class='row'>

							<div class='col-xs-2  text-center borderg' ng-show='optionsValue == 0' ng-repeat='value in data.ppArr'>

								<!-- <label> -->
								<input type="checkbox" ng-model='hey' ng-click="ppChng( hey,value)">
								<span style='font-weight:10;color:black;'>{{convertPP(value)}}</span>
								<!-- </label> -->
							</div>

							<div class='col-xs-2  text-center' ng-show='optionsValue == 1' ng-repeat='value in data.pArr'>
								<label>
									<input type="checkbox" ng-model='hey' ng-click="pChng( hey,value)">{{convertP(value)}}
								</label>
							</div>


							<div class='col-xs-2  text-center' ng-show='optionsValue == 2' ng-repeat='value in data.sleeveArr'>
								<label>
									<input type="checkbox" ng-model='hey' ng-click="sleeveChng( hey,value)">{{convertSleeve(value)}}
								</label>
							</div>

							<div class='col-xs-2  text-center' ng-show='optionsValue == 3' ng-repeat='value in data.neckArr'>
								<label>
									<input type="checkbox" ng-model='hey' ng-click="neckChng( hey,value)">{{convertNeck(value)}}
								</label>
							</div>


							<div class='col-xs-2  text-center' ng-show='optionsValue == 4' ng-repeat='value in data.fabricArr'>
								<label>
									<input type="checkbox" ng-model='hey' ng-click="fabricChng( hey,value)">{{convertFabric(value)}}
								</label>
							</div>


							<div class='col-xs-2  text-center' ng-show='optionsValue == 5' ng-repeat='value in data.occArr'>
								<label>
									<input type="checkbox" ng-model='hey' ng-click="occChng( hey,value)">{{convertOcc(value)}}
								</label>
							</div>


						</div>

						<!-- ***select options for 6options -->

						</div>
						<!-- ***right side filters just above kurtis -->

						<div class='row'>
							<table style='width:100%;'>

								<tr ng-repeat="kd in data.kurti_display" class='col-xs-12 col-sm-6 col-md-4 col-lg-3 ' style='padding:20px;'>
									<div style=''>
										<td class=' text-center emphasize ' ng-click='detailed_prod(kd.id_kurti)' style='cursor:pointer;background-color:white;border-radius:10px;'>
											<div class='' style='border:1px solid gray;border-radius:0px;box-shadow: 1px 1px 1px #888888;'>
												<div>
													<img style='width:100%;height:230px;border-radius:0px;' ng-src='./sdf/images/products/kurtis/{{kd.id_kurti}}/1/{{kd.colors[0]}}/md/1.jpg'
													 alt='' />
												</div>
												<div class='landingItmPrice'> {{ kd.entry_date | limitTo:10 }}</div>
												<!-- <div class='landingItmPrice'>&#8377; {{ kd.prices[0] }}</div> -->
												<!-- <div class='landingItmPrice'> {{ kd.id_kurti }}</div>
												<div class='landingItmName'>{{ kd.name| limitTo:20 }} </div>-->
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
					</div>
				</div>
			</div>

			<!-- ***Kurti Display -->
			<div class='row  pm0 ' style=''>
				<div class='col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4'>
					<!-- <button tabindex='-1' class='btn btn-basic btn-block' style='white-space: normal;box-shadow: 2px 3px 5px #888888;font-size:17px;margin:10px 0 25px 0;'
					 ng-click='loadMore()'>
						<strong style=''>Load More</strong>
					</button> -->
				</div>
			</div>
		</div>
	</div>


</div>

<!-- <div id='scrollTop' style='z-index:1000;position:fixed;right:50px;bottom:90px;cursor:pointer;display:none; width:40px;height:40px;'>
	<img ng-src='./sdf/images/website/top/top.png' width='50' height='50' />

</div> -->