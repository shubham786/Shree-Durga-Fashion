<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
	<title>Shree Durga Fashions</title>
	<!--CSS-->

	<!--common.css-->
	<link href='../../include/css/common.css' rel='stylesheet'>
	<link href='../../include/bootstrap-3.3.7-dist/css/bootstrap.css' rel='stylesheet'>

	<!--CSS ***-->

	<!--SCRIPTS-->

	<!--jquery-->
	<script src='../../include/jquery/jquery-3.2.1.js'></script>

	<!-- bootstrap file-->
	<script src='../../include/bootstrap-3.3.7-dist/js/bootstrap.min.js'></script>



	<!--SCRIPTS END-->


</head>

<body>
<?php
$host="localhost";
$user="root";
$password="";
$database="sdf";

$id="";
$name="";
$address="";
$gender="";
try{
	$connect=mysqli_connect($host,$user,$password,$database);
}catch(Exception $ex){
	echo 'Error';
}



	$searchQuery="SELECT * FROM kurtis ";
	$search_Result=mysqli_query($connect,$searchQuery);
	if($search_Result){
		if(mysqli_num_rows($search_Result))
		{ $new_row=0;
			while($row=mysqli_fetch_array($search_Result))
			{  $new_row++;
			if($new_row==4){
				echo '<div class="row">';
			
			}

			echo '<div class="col-lg-3 ">';
				echo '<a href="www.yahoo.com" >
			<img src=../../images/products/kurtis/'.$row[0].'/1.jpg style="width:100px;height:200px"><br/></a>';
				echo $row[0] .' <br/> ';
				echo $row[1].'  <br/>  ';
				echo $row[2].'<br/>    ';
				echo $row[3].'<br/>    ';
				echo $row[4].'<br/>    ';
				echo $row[5].' <br/>   ';
				echo $row[6].' <br/>   ';
				echo $row[7].' <br/>   ';
				echo $row[8].' <br/>   ';
				echo $row[9].' <br/>   ';
				echo'----------------<br/>';
				echo '</div>';
				if($new_row==4){
					echo '</div>';
					$new_row=0;
				}
			}
		}
		else{
			echo'No data for this id';
		}
	}
	else
	{
		echo'Result Error';
	}
?>
<body>
</html>