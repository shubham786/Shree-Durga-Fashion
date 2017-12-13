<!DOCTYPE html>
<html lang='en'>

<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
	<title>Jai Maa Ambay Clothings</title>
	<!--CSS-->

	<!--common.css-->
	<link href='../include/css/common.css' rel='stylesheet'>
	<link href='../include/bootstrap-3.3.7-dist/css/bootstrap.css' rel='stylesheet'>
	<link hrer='css/stylesheet.css' rel='stylesheet'>

	<!--CSS ***-->

	<!--SCRIPTS-->

	<!--jquery-->
	<script src='../include/jquery/jquery-3.2.1.js'></script>

	<!-- bootstrap file-->
	<script src='../include/bootstrap-3.3.7-dist/js/bootstrap.min.js'></script>

    <!--image hover-->
    <script src='js/image_hover.js'></script>
	


	<!--SCRIPTS END-->
	<style type='text/css'>
	.pic{
		width:50px;
		height:50px;
	}
	
	.picbig{
		position:absolute;
		width:0px;
		z-index:10;
		-webkit-transition: width 0.3s linear 0s;
		-moz-transition:width 0.3s linear 0s;
		transition: width 0.3s linear 0s;
	}
	.pic:hover + .picbig{
		width:200px;
	}
	
	.delete:hover{
		transform:scaleX(6);
	}
	</style>

</head>

<body>
<img class='pic' src='../images/products/kurtis/1/1.jpg' alt='image1'>
<img class='picbig' src='../images/products/kurtis/1/1.jpg' alt='image1'>

<img class='pic' src='../images/products/kurtis/1/2.jpg' alt='image2'>
<img class='picbig' src='../images/products/kurtis/1/2.jpg' alt='image2'>

	<!-------------------->
	<div class='container-fluid'>
		<div class='row borderr' >	
            <div onmousemove="myFunction(event)" onmouseout='myFunction1()' class='col-lg-4 borderr' style='position:relative;'>
            
               
				<img class='delete***' id='image' class='borderg for_hover***' src='../images/products/kurtis/1/1.jpg' style='position:relative;width:400px;height:600px;'>				
                <div id='lens' style='position:absolute;right:0px;top:0px;border:1px black solid;padding:90px 120px;background-color:rgba(1, 1, 2, 0.1)'>
                    
                </div>
               
                </img>
            

			
            </div>
		</div><!--row ***-->
	</div><!--container-fluid ***-->
    <p id='demo'> </p>
</body>

</html>