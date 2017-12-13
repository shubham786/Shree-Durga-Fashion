<div class='container' ng-controller='c_kurti_comm_form'>
    <form>
        <div class='row '>
            <!-- name, article_sub_type, style_name, material, product_desc, features, occasion_type, sleeve_type, pattern, condition -->

            <div class="form-group col-xs-4 ">
                <label >Name:</label>
                <textarea type="text" class="form-control" ng-model="name" rows="5" id="name" required></textarea>
            </div>
            <div class="form-group col-xs-2 ">
                <label >Pattern:</label>
                <select ng-model='pattern' ng-options='value.id as value.value  for value in mp_pattern' style='font-size:20px;'
                    class="form-control" required>
                    <option></option>
                </select>
            </div>

            <div class="form-group col-xs-2 " >
                <label >Print:</label>
                <select  ng-model='print' ng-options='value.id as value.value  for value in mp_printPattern'
                 style='font-size:20px;height:200px;'
                    class="form-control" multiple required>
                    <option></option>
                </select>
            </div>
            <div class="form-group col-xs-2 ">
                <label >Sleeve:</label>
                <select ng-model='sleeve' ng-options='value.id as value.value  for value in mp_sleeve' style='font-size:20px;'
                    class="form-control" required>
                    <option></option>
            </select>
            </div>
            <div class="form-group col-xs-2 ">
                <label >Neck:</label>
                <select ng-model='neck' ng-options='value.id as value.value  for value in mp_neck' style='font-size:20px;' 
                    class="form-control" required>
                    <option></option>
                </select>
            </div>
        </div>
        <div class='row'>
            <div class="form-group col-xs-4">
                <label >Product Description:</label>
                <textarea type="text" class="form-control" ng-model='product_desc' rows="5" id="prod_desc" required></textarea>
            </div>
            <div class="form-group col-xs-2">
                <label >Fabric:</label>
                <select ng-model='fabric' ng-options='value.id as value.value  for value in mp_fabric' style='font-size:20px;'
                    class="form-control" required>
                    <option></option>
                </select>
            </div>
            <div class="form-group col-xs-2">
                <label >Occasion:</label>
                <select ng-model='occ' ng-options='value.id as value.value  for value in mp_occasion' style='font-size:20px;'
                    class="form-control" multiple required>
                    <option></option>
                </select>
            </div>


        </div>

        <div class='row pull-right'>
            <button type="submit" ng-click='submit()' class="btn btn-primary">Submit</button>
        </div>
    </form>
</div>
<!-- Container End -->