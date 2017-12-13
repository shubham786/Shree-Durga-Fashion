<body ng-controller="myCtrl" style='margin-top:200px;background-color:gray;'>
	<div class='container-fluid'>
		<div class='row'>

			<!-- pre first screen -->

			<!-- ***pre first screen -->

			<!-- First Screen  :take inputs COLORS,SIZES,PRICES-->
			<div ng-show='first_screen_flag'>
				<!-- Color Selection -->

				<div class='col-xs-3'>
					<input type='text' class='form-control' ng-model='rs_kurti_comm_id' readonly/>
					<div class="form-group">
						<label for="sel1">Select Colors:</label>
						<select ng-model='colors_mdl' ng-options='color for color  in colors' 
						style='font-size:20px;' class="form-control"
						 id="sel1" >
  					</select>
					</div>
				</div>
				<!-- ***Color Selection -->

				<div class='col-xs-1'>
					<button class='btn btn-success ' ng-click="colors_clk()">Nxt</button>
				</div>

				<!-- Prices Selection -->
				<div class='col-xs-3' ng-show='price_flag'>
					<div id='prices'></div>
				</div>
				<!-- ***Prices Selection -->

				<div class='col-xs-1' ng-show='price_flag'>
					<button class='btn btn-success' ng-click="prices_clk()">Nxt</button>
				</div>

				<!-- Size Selection -->
				<div class='col-xs-3' ng-show='size_flag'>
					<div class="form-group">
						<label for="sel1">Select Sizes:</label>
						<select ng-model='sizes_mdl' 
						ng-options='size for size  in sizes' 
						style='height:500px !important;font-size:20px;' class="form-control"
						 id="sel1" multiple>
  					</select>
					</div>
				</div>
				<!-- ***Size Selection -->

				<div class='col-xs-1' ng-show='size_flag'>
					<button class='btn btn-success' ng-click="sizes_clk()">Nxt</button>
				</div>

			</div>
			<!-- ***First Screen -->

			<!-- Second Screen (color,size)->quantity -->

			<div ng-show='!first_screen_flag'>
				<div class='col-xs-4'>
					<div id='qty'> </div>
				</div>
				<div class='col-xs-2'>
					<div class='col-xs-1'>
						<button class='btn btn-success' id='final_btn' ng-click="final_clk()">Nxt</button>
					</div>
				</div>
			</div>

			<div class='col-xs-3' ng-show='upload_images_ui_flag'>
					
						<form enctype="multipart/form-data" method="post" action="insert/image-upload/image_upload.php">
                        <label>Choose a zip file to upload: <input type="file" name="zip_file" /></label>
                        <br />
						<input type="submit" name="submit" value="Upload" />
						<input type='text' class='form-control' name='kurti_comm_id' ng-model='rs_kurti_comm_id' readonly/>
                        </form>
					
				</div>

			<!-- ***Second Screen -->
		</div>
	</div>
</body>