<?php
$myObj = new StdClass;
$myObj->name = "John";
$myObj->age = 30;
$myObj->city = "New York";


$data = '{"records":[{"name":"shubham","age":"23"}'.
            ',{"name":"rahul","age":"34"}]}';

$myJSON = json_encode($myObj);//obj to string
$myJSON2 = json_decode($data);//string to obj

echo gettype($myJSON);

?>