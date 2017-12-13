<link href='/sdf/admin/stock/stock.css' rel='stylesheet'>
<!-- ng-controller='c_orders' -->
<div class='container'>
    <div class='row'>
        <table class='table table-bordered table-striped table-hover table-condensed table-responsive pm0 '>
            <tr>
                <th>id</th>
                <th>Color</th>
                <th>Prices</th>
                <th>Sizes</th>
                <th>Quantity</th>
            </tr>
            <tr ng-repeat="x in kurtiData ">
                <td>{{ x.id_kurti }}</td>
                <td>{{ x.colors }}</td>
                <td>{{ x.prices }}</td>
                <td>{{ x.sizes }}</td>
                <td>{{ x.qty }}</td>

            </tr>
        </table>
    </div>
</div>