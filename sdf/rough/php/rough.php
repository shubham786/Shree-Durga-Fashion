<?php
/* $directory = '../../images/products/kurtis/1/1/blue/lg/';
$files = glob($directory . '*.jpg');
print_r($files);

if ( $files !== false )
{
    $filecount = count( $files );
    echo $filecount;
}
else
{
    echo 0;
} */
echo date('Y-m-d');
echo'--';
$fourmonthsback = date("Y-m-d", mktime(0, 0, 0, date("m")-1, date("d"),   date("Y")));
//$fromDate = date("Y-m-d", strtotime("-4 months"));

echo $fourmonthsback;

 //Encryption.
/*  $om =  openssl_encrypt ( '{"id":1,"operation":"forgotpassword"}' ,'AES-128-CBC', 'mykey');
 echo $om;
 $om = openssl_decrypt($om,'AES-128-CBC','mykey'); */
 
 
?>