<?php
require_once 'autoload.php';
//require 'phpmailer/phpmailer/src/PHPMailer.php';
use PHPMailer\PHPMailer\PHPMailer;
$post_date = file_get_contents("php://input");
$received = json_decode($post_date);
error_reporting(E_ERROR | E_PARSE);


function sender($l_code,$received_values = ''){
    switch($l_code){

        case 0:
        //Mail couldn't be sent.
            echo '{"code":0}';
            //echo $received->email;
            break;

        case 1:
            echo '{"code":1}';
            break;

        case 200:
            echo '{"code":200}';
            break;

        case 3:
    }
}

//first time login verification
if($received->operation == 0){
    $letter = '['.'"'.$received->operation.'",'
    .'"'.$received->email.'",'
    .'"'.time().'"'
    .']';
    $encrypt =  openssl_encrypt ( $letter ,'BF-CBC', 'd6f+g59df;lgkporklfdkogiur9tfdkgl;kdfjksdjfkj49urokdjorg7t/5t');
    $url = "http://localhost/index.php#!/url/0/".$encrypt;
    $body='This is first time login verification, please visit the following link.'.$url;
    }
//forgot password
else if($received->operation == 1){
    $letter = '['.'"'.$received->operation.'",'
    .'"'.$received->email.'",'
    .'"'.time().'"'
    .']';
    $encrypt =  openssl_encrypt ( $letter ,'BF-CBC', 'd6f+g59df;lgkporklfdkogiur9tfdkgl;kdfjksdjfkj49urokdjorg7t/5t');
    $url = "http://localhost/index.php#!/url/1/".$encrypt;
    $body='This is forgot password, please visit the following link.'.$url;

}
$m = new PHPMailer;
$m->isSMTP();
$m->SMTPAuth = true;
$m->SMTPDebug = 2;
$m->Host = 'smtp.gmail.com';
$m->Username = 'shubhamsengar88@gmail.com';
$m->Password = 'ss_Gmailkapassword';
$m->SMTPSecure = 'ssl';
$m->Port = 465;

$m->From = 'from@email.com';
$m->FromName = 'from name';
$m->addReplyTo('add@reply.to','Reply address');
$m->addAddress($received->email);
$m->Subject = 'Shree Durga Fashion Welcomes You.';
    
    
    

$m->Body = $body;


if($m->send() == true){
    echo'ss_just_for_breaking_pt';
sender(200);
}else{
    echo'ss_just_for_breaking_pt';
    sender(0);
}





?>