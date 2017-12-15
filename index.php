<!DOCTYPE html >
<html lang='en'>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
	<title>Shree Durga Fashions</title>
	<!--CSS-->


	<!--common.css-->
	<link href='./sdf/include/css/common.css' rel='stylesheet'>
	<link href='./sdf/include/bootstrap-3.3.7-dist/css/bootstrap.css' rel='stylesheet'>
	<link href='./sdf/index/index.css' rel='stylesheet'>


	<!--CSS ***-->

	<!--SCRIPTS-->
	<!-- maintain the order of dependency, as jquery might be used in angular code-->
	<!--jquery-->
	<script src="./sdf/include/jquery/jquery-3.2.1.js"></script>
	<!-- bootstrap file-->
	<script src="./sdf/include/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
	<!--angular 1.6.4 -->
	<script src="./sdf/include/js/angular_1.6.4.js"></script>
	<script src="./sdf/include/js/angular-route_1.6.4.js"></script>
	<script src="./sdf/include/js/validate/jquery-validate1_17_0.js"></script>


	<!-- custom services -->
	<script src="./sdf/pages/cart-door/cart-door-service.js"></script>
	<script src="./sdf/pages/detailed-product/detailed-product-service.js"></script>
	<script src="./sdf/pages/categories/categories-service.js"></script>
	<script src="./sdf/pages/url/url-service.js"></script>
	<script src="./sdf/pages/user-profile/user-orders/user-orders-service.js"></script>


	<!--default js file for page -->



	<script src="./sdf/index/index.js"></script>
	<script src="./sdf/index/common-services.js"></script>
	<script src="./sdf/index/route.js"></script>
	<script src='./sdf/admin/include/mappings.js'></script>
	<script src="./sdf/directives/header/header-service.js"></script>
	<script src="./sdf/directives/header/header.js"></script>
	<script src="./sdf/index/login/login-error-messages.js"></script>
	<script src="./sdf/pages/detailed-product/detailed-product.js"></script>
	<script src="./sdf/pages/cart-door/cart-door.js"></script>
	<script src="./sdf/pages/checkout/checkout.js"></script>
	<script src="./sdf/pages/categories/categories.js"></script>
	<script src="./sdf/pages/landing/landing.js"></script>
	<script src="./sdf/pages/user-profile/change-password/change-password.js"></script>
	<script src="./sdf/pages/user-profile/user-orders/user-orders.js"></script>
	<script src="./sdf/pages/url/url.js"></script>
	<script src="./sdf/directives/footer/footer.js"></script>
	<script src="./sdf/directives/slider/slider.js"></script>

	<!--SCRIPTS ***-->


</head>

<body ng-app='rootModule' ng-controller='c_root'>



	<div style='border:solid 2px rgba(255, 255, 255, 0);min-height:100%;'>

		<div ng-if='header_flg'>
			<header></header>
		</div>


		<div style='margin-bottom:100px;'>
			<div ng-view autoscroll="true"></div>
		</div>
	</div>

	<div style='margin-top:-100px;' class='test'>
		<footer></footer>
	</div>


</body>

</html>