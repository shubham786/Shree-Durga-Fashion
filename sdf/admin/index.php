<!DOCTYPE html >
<html lang='en'>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Shree Durga Fashions</title>
    <!--CSS-->

    <link href='./../include/css/common.css' rel='stylesheet'>
    <link href='./../include/bootstrap-3.3.7-dist/css/bootstrap.css' rel='stylesheet'>

    <!--CSS ***-->

    <!--SCRIPTS-->
    
    <!-- dependency -->
     
    <!--jquery-->
    <!-- maintain the order of dependency, as jquery might be used in angular code-->
    <script src='./../include/jquery/jquery-3.2.1.js'></script>
    <!-- bootstrap file-->
    <script src='./../include/bootstrap-3.3.7-dist/js/bootstrap.min.js'></script>
    <!--angular 1.6.4 -->
    <script src="./../include/js/angular_1.6.4.js"></script>
    <!-- ng route -->
    <script src="./../include/js/angular-route_1.6.4.js"></script>

    <!-- ***dependency -->

    <!-- user defined services -->
    <script src='./include/mappings.js'></script>
    
    <script src='./orders/orders-service.js'></script>

    <!--default js file for page -->
    <script src="./index.js"></script>
    <script src='./home/home.js'></script>
    <script src='./stock/stock.js'></script>
    <script src='./products-entry/i+u+d/kurti-comm/index.js'></script>
    <script src='./products-entry/i+u+d/insert/insert.js'></script>
    <script src='./products-entry/i+u+d/kurti-comm/form/kurti-comm-form.js'></script>
    <script src='./orders/orders.js'></script>

    <!-- *** user defined services -->



    <!--SCRIPTS ***-->


</head>

<body ng-app='m_admin' ng-controller='c_admin'>

    <div ng-view></div>
   
    
</body>

</html>