

<body  ng-controller='c_kurti_comm'>
    <div class='container-fluid'>
        <!-- This section will show the table, having values from kurti_comm table -->
        <div class='row' style='margin-bottom:50px;'>
            <table class='table table-condensed table-bordered table-hover table-striped'>
                <tr class='danger'>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Article Sub Type</th>
                    <th>Material</th>
                    <th>Occasion Type</th>
                    <th>Pattern</th>
                    <th>Sleeve Type</th>
                    <th>Style Name</th>
                    <!-- <th>Features</th>
                    <th>Condition</th> -->
                    <th>Product Desc</th>
                </tr>
                <tr ng-repeat="x in kurti_comm_data">
                    <td>
                        <button class='btn btn-primary' ng-click='set_kurti_comm_id(x.id_kurti_comm)'>
                            {{x.id_kurti_comm }}
                        </button>
                    </td>
                    <td>{{x.name }}</td>
                    <td>{{ x.article_sub_type }}</td>
                    <td>{{ x.material }}</td>
                    <td>{{ x.occasion_type }}</td>
                    <td>{{ x.pattern }}</td>
                    <td>{{ x.sleeve_type }}</td>
                    <td>{{ x.style_name }}</td>
                    <!-- <td>{{ x.features }}</td>
                    <td>{{ x.condition }}</td> -->
                    <td>{{ x.product_desc }}</td>
                </tr>
            </table>
        </div>
        <!-- ***This section will show the table, having values from kurti_comm table -->

        <!-- This section will show selected id and option to create new kurti_comm value. -->
        <div class='row' style='position:fixed;bottom:0;width:100%;height:50px;background-color:#AED6F1;'>
            <table class='table'>
                <tr>
                     <td valign='middle' class=' pull-left'>
                         <button class='btn btn-warning' ng-click='kurti_comm_form()'>
                             Create
                        </button>
                        </td>
                   <td valign='middle' class=' pull-right'> 
                       <input type='text' ng-model='rs_kurti_comm_id' class='form-control' readonly >
                       
                    </input>
                </td>
                    <td valign='middle' class=' pull-right'>
                         <button class='btn btn-warning' ng-click='go()'>
                             Go
                        </button>
                        </td>
                </tr>
            </table>
        </div>
        <!-- ***This section will show selected id and option to create new kurti_comm value. -->
</body>
