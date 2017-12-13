<?php
//require'../PHPMailer/vendor/helper/key.php';
//echo $key;
//$received->operation = 0;
//$received->email = 'shuhbamsengar88@gmail.com';
//$letter = '['.'"'.$received->operation.'",'//
//.'"'.$received->email.'"'
//.']';
//echo $letter;
//$key = 'd6f+g59df;lgkporklfdkogiur9tfdkgl;kdfjksdjfkj49urokdjorg7t/5t';
//$encrypt =  openssl_encrypt ( $letter ,'BF-CBC', $key);
//echo 'encrypt'.$encrypt;
$encrypt = 'wr+T+vcVyeSJmKXMzdcxpD6QxBqVQhdhdmgwmoRp0N7Rz9A+BuJada4FpO87CRKk';
$key = 'd6f+g59df;lgkporklfdkogiur9tfdkgl;kdfjksdjfkj49urokdjorg7t/5t';
$decrypt = JSON_decode(openssl_decrypt($encrypt,'BF-CBC',$key));
print_r( (time() -$decrypt[2])/60 );
//echo 'decrpt'.$decrypt.'</br>';
//echo time();
?>

