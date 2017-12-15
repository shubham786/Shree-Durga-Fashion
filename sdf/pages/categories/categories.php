<link href='./sdf/pages/categories/categories.css' rel='stylesheet'>

<div id='' ng-controller='c_categories' style='position:relative;z-index:29;'>
	<div class='container-fluid pm0' >
		<div class='row pm0 '>

			<div class='container'>


				<div class='row  '>
					<!-- filters -->
					<div class='col-xs-3 hidden-xs'>
						<!-- price -->
						<div>
							<div class='row'>Price</div>
							<div class=''>

								<div class="checkbox" ng-repeat='value in data.priceArr'>
									<label>
										<input type="checkbox" ng-model='priceCheckBox[$index]' 
										ng-click="priceChng( priceCheckBox[$index],value)">Rs{{value}} To Rs{{value+999}}{{hey}}
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
										<input type="checkbox" ng-model='sizeCheckBox[$index]' ng-click="sizeChng( sizeCheckBox[$index],value)">{{value}}{{hey}}
									</label>
								</div>
							</div>
						</div>
						<!-- ***size -->

					</div>
					<!-- ***filters -->

					<!-- Kurti Display -->
					<div class='col-xs-9 ' id='strech'>
						<!-- for xs screen -->
						<div class='row  visible-xs  pm0'
						 style='background-color:white;display:block; border-bottom:1px solid #3a5b79'
						 ng-show='filterSortByRowFlg' id='filterSortByRow'>
							<div class='col-xs-6' style='padding-top:8px;'>
								<button class='btn btn-default btn-block'
								 style='border:solid 2px #3a5b79;'
								  ng-click='xsFilterScreen()'>
									FILTER
								</button>
							</div>
							<div class='col-xs-6' style='padding-top:8px;'>
								<div class="form-group">
									<!-- <label for="sel1">Sort By:</label> -->
									<select class="form-control" ng-model='sortBy' 
									style='border:solid 2px #3a5b79;' 
									ng-change="sortByFn(sortBy)" id="sel1">
										<option value='0'>--Sort By--</option>
										<option value='1'>Price:Low to High</option>
										<option value='2'>Price:High to Low</option>
										<option value='3'>Latest Arrivals</option>
									</select>
								</div>
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
								<b ng-click='xSClearAll()'>CLEAR ALL</b>
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
									<input type="checkbox" ng-model='ppCheckBox[$index]' ng-click="ppChng( ppCheckBox[$index],value)">
									<span style='font-weight:10;color:black;'>{{convertPP(value)}}</span>
								</div>

								<div class='col-xs-2  text-center' ng-show='optionsValue == 1' ng-repeat='value in data.pArr'>
									<label>
										<input type="checkbox" ng-model='pCheckBox[$index]' ng-click="pChng( pCheckBox[$index],value)">{{convertP(value)}}
									</label>
								</div>


								<div class='col-xs-2  text-center' ng-show='optionsValue == 2' ng-repeat='value in data.sleeveArr'>
									<label>
										<input type="checkbox" ng-model='sleeveCheckBox[$index]' ng-click="sleeveChng( sleeveCheckBox[$index],value)">{{convertSleeve(value)}}
									</label>
								</div>

								<div class='col-xs-2  text-center' ng-show='optionsValue == 3' ng-repeat='value in data.neckArr'>
									<label>
										<input type="checkbox" ng-model='neckCheckBox[$index]' ng-click="neckChng( neckCheckBox[$index],value)">{{convertNeck(value)}}
									</label>
								</div>


								<div class='col-xs-2  text-center' ng-show='optionsValue == 4' ng-repeat='value in data.fabricArr'>
									<label>
										<input type="checkbox" ng-model='fabricCheckBox[$index]' ng-click="fabricChng( fabricCheckBox[$index],value)">{{convertFabric(value)}}
									</label>
								</div>


								<div class='col-xs-2  text-center' ng-show='optionsValue == 5' ng-repeat='value in data.occArr'>
									<label>
										<input type="checkbox" ng-model='occCheckBox[$index]' ng-click="occChng( occCheckBox[$index],value)">{{convertOcc(value)}}
									</label>
								</div>


							</div>

							<!-- ***select options for 6options -->

						</div>
						<!-- ***right side filters just above kurtis -->

						<div class='row'>
							<table style='width:100%;' class='text-center;'>

								<tr ng-repeat="kd in data.kurti_display" class='col-xs-6 col-sm-6 col-md-4 col-lg-3 '
								 style='padding:20px;border:solid 2px red;'>
									<div style='width:100%'>
										<td class=' text-center emphasize ' ng-click='detailed_prod(kd.id_kurti)' 
										style='cursor:pointer;background-color:white;width:100%;
										border-radius:10px;'>
											<div class='' 
											style='width:100%;border:1px solid gray;border-radius:0px;box-shadow: 1px 1px 1px #888888;'>
												<div>
													<img style='width:100%;height:230px;border-radius:0px;' ng-src='./sdf/images/products/kurtis/{{kd.id_kurti}}/1/{{kd.colors[0]}}/md/1.jpg'
													 alt='' />
												</div>
												<div class='landingItmPrice'> {{ kd.entry_date | limitTo:10 }}</div>
												<div class='landingItmPrice'>&#8377; {{ kd.prices[0] }}</div>
												<!-- <div class='landingItmPrice'> {{ kd.id_kurti }}</div>
												<div class='landingItmName'>{{ kd.name| limitTo:20 }} </div>

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
			<!-- <div class='row  pm0 ' style=''>
								<div class='col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4'>
									 <button tabindex='-1' class='btn btn-basic btn-block' style='white-space: normal;box-shadow: 2px 3px 5px #888888;font-size:17px;margin:10px 0 25px 0;'
									 ng-click='loadMore()'>
										<strong style=''>Load More</strong>
									</button>
								</div>
							</div> -->
		</div>
	</div>

	<!-- xs screen filter screen -->
	<div class='row  pm0 ' ng-show='showXsFilterScreenFlg'
	 style='background-color:white;width:100%;height:100%;position:fixed;top:0px;right:0px;'>
		<!-- 	<div class='row' style='height:10%;'>
							<div class='col-xs-3 border'> FILTERS </div>
				
							<div class='col-xs-9 border' ng-click='closeXsFilterScreen()'>CLEAR ALL</div>
						</div> -->

		<div class='row pm0' style='height:100%;overflow-y:scroll;'>
			<div class='col-xs-4  pm0 ' style=' height:90%; '>
				<div ng-click='showXsPrice()' class=' ht csr_ptr' ng-class='{"test":showXsOptions == "0"}'>
					<b>Price</b>
				</div>
				<div ng-click="showXsSize()" class='ht csr_ptr' ng-class='{"test":showXsOptions == "1"}'>
					<b>Size</b>
				</div>
				<div ng-click="showXsPP()" class='ht csr_ptr' ng-class='{"test":showXsOptions == "2"}'>
					<b>Pattern</b>
				</div>
				<div ng-click="showXsP()" class='ht csr_ptr' ng-class='{"test":showXsOptions == "3"}'>
					<b>Print</b>
				</div>
				<div ng-click="showXsSleeve()" class='ht csr_ptr' ng-class='{"test":showXsOptions == "4"}'>
					<b>Sleeve Length</b>
				</div>
				<div ng-click="showXsNeck()" class='ht csr_ptr' ng-class='{"test":showXsOptions == "5"}'>
					<b>Neck</b>
				</div>
				<div ng-click="showXsFabric()" class='ht csr_ptr' ng-class='{"test":showXsOptions == "6"}'>
					<b>Fabric</b>
				</div>
				<div ng-click="showXsOcc()" class='ht csr_ptr' ng-class='{"test":showXsOptions == "7"}'>
					<b>Occasion</b>
				</div>
			</div>
			<div class='col-xs-8 ' style='background-color:rgba(128, 128, 128, 0.101);
							 height:90%;border-left:1px solid rgba(128, 128, 128, 0.101);overflow-y:scroll;'>

				<!-- xsScreen options pane -->

				<!-- XS-price -->
				<div class='row' ng-show='showXsOptions == 0'>

					<div class=" ht2" ng-repeat='value in data.priceArr'>
						<label>
							<input type="checkbox" ng-model='priceCheckBox[$index]' ng-click="priceChng( priceCheckBox[$index],value)"> Rs{{value}} To Rs{{value+999}}
						</label>
					</div>
				</div>
				<!-- ***XS-price -->

				<!--XS-size -->
				<div class='row ' ng-if='showXsOptions == 1'>
					<div class=" ht2" ng-repeat='value in data.sizeArr'>
						<label>
							<input type="checkbox" ng-model='sizeCheckBox[$index]' ng-click="sizeChng( sizeCheckBox[$index],value)">{{value}}
						</label>
					</div>
				</div>
				<!-- ***XS-size -->


				<!-- XS-pp -->
				<div class='row' ng-if='showXsOptions == 2'>
					<div class=' ht2' ng-repeat='value in data.ppArr'>
						<label>
							<input type="checkbox" ng-model='ppCheckBox[$index]' ng-click="ppChng( ppCheckBox[$index],value)">{{convertPP(value)}}
						</label>
					</div>
				</div>
				<!-- ***XS-pp -->

				<!-- XS-p -->
				<div class='row' ng-if='showXsOptions == 3'>
					<div class=' ht2' ng-repeat='value in data.pArr'>
						<label>
							<input type="checkbox" ng-model='pCheckBox[$index]' ng-click="pChng( pCheckBox[$index],value)">{{convertP(value)}}
						</label>
					</div>
				</div>
				<!-- ***XS-p -->

				<!-- XS-sleeve -->
				<div class='row' ng-if='showXsOptions == 4'>
					<div class=' ht2' ng-repeat='value in data.sleeveArr'>
						<label>
							<input type="checkbox" ng-model='sleeveCheckBox[$index]' ng-click="sleeveChng( sleeveCheckBox[$index],value)">{{convertSleeve(value)}}
						</label>
					</div>


				</div>
				<!-- ***XS-sleeve -->

				<!-- XS-neck -->
				<div class='row' ng-if='showXsOptions == 5'>
					<div class=' ht2' ng-repeat='value in data.neckArr'>
						<label>
							<input type="checkbox" ng-model='neckCheckBox[$index]' ng-click="neckChng( neckCheckBox[$index],value)">{{convertNeck(value)}}
						</label>
					</div>
				</div>
				<!-- ***XS-neck -->

				<!-- XS-fabric -->
				<div class='row' ng-if='showXsOptions == 6'>

					<div class=' ht2' ng-repeat='value in data.fabricArr'>
						<label>
							<input type="checkbox" ng-model='fabricCheckBox[$index]' ng-click="fabricChng( fabricCheckBox[$index],value)">{{convertFabric(value)}}
						</label>
					</div>



				</div>
				<!-- ***XS-fabric -->

				<!-- XS-occ -->
				<div class='row' ng-if='showXsOptions == 7'>
					<div class='ht2' ng-repeat='value in data.occArr'>
						<label>
							<input type="checkbox" ng-model='occCheckBox[$index]' ng-click="occChng( occCheckBox[$index],value)">{{convertOcc(value)}}
						</label>
					</div>
				</div>
				<!-- ***XS-occ -->

				<!-- xsScreen options pane -->


			</div>
		</div>
		<div class='row  text-center pm0 ' style='width:100%;height:10%;position:absolute;bottom:0;right:0;'>
			<div class='row  pm0' style='height:100%;border-top:1px solid rgba(128, 128, 128, 0.101);'>
				<div class='col-xs-6 ' style="padding-top:10px;">
					<button class='btn btn-default btn-block' ng-click="xSClearAll()" style='border:solid 2px #486077;'>CLEAR ALL</button>
				</div>
				<div class='col-xs-6' style="padding-top:10px;">
					<button class='btn btn-default btn-block' ng-click='closeXsFilterScreen()' style='border:solid 2px #486077;'>DONE</button>
				</div>
			</div>
		</div>




		<!-- xs screen filter screen -->
	</div>
</div>



<!-- <div id='scrollTop ' style='z-index:1000;position:fixed;right:50px;bottom:90px;cursor:pointer;display:none; width:40px;height:40px; '>
	<img ng-src='./sdf/images/website/top/top.png ' width='50 ' height='50 ' />

</div> -->