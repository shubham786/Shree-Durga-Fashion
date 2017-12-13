 <?php
 require '../../../../../service/php/db/db_conn_class.php';
 //variables
 $colors_array=[];
 $kurti_comm_id=$_POST["kurti_comm_id"];
 echo '---'.$kurti_comm_id.'---';
 class derived_class extends db_conn_class{
    // insert update delete implementations are in db_conn_class(base class).
}
$pipe_db = new derived_class();
if($pipe_db->connection()){
    $query = 'SELECT * from kurti where fk_id_kurti_comm="'.$kurti_comm_id.'"';
    $colors_array = ( json_decode( ( json_decode($pipe_db->return_values($query))[0])->colors  ) );
    sort($colors_array);
    //$colors_array = sort($colors_array);
    echo '</br> Color names from db </br>';
    print_r( (($colors_array))  );
    echo '</br> Color names from db </br>';
   
    //print JSON_DECODE(   JSON_DECODE($pipe_db->return_values($query)) [1][2])[2];
}else{
    echo 'Fail to connect db';
}
                        function scale_image($img_name,$lcl_root_dir){
                                $filename = $lcl_root_dir.'/'.$img_name;
                                $lg_scale = 1;
                                $md_scale = 0.5;
                                $sm_scale = 0.2;
                                //header('Content-Type: image/jpeg');
                                list($width, $height) = getimagesize($filename);

                                //For lg
                                $new_width_lg = $width * $lg_scale;
                                $new_height_lg = $height * $lg_scale;
                                $image_p = imagecreatetruecolor($new_width_lg, $new_height_lg);
                                $image = imagecreatefromjpeg($lcl_root_dir.'/'.$img_name);
                                imagecopyresampled($image_p, $image, 0, 0, 0, 0, $new_width_lg, $new_height_lg, $width, $height);

                                // Output
                                //imagejpeg($image_p, null, 100);
                                //This saves the image to directory.
                                imagejpeg($image_p,$lcl_root_dir.'/lg/'.$img_name);
                                imagedestroy($image);
                                imagedestroy($image_p);

                                // For md
                                $new_width_md = $width * $md_scale;
                                $new_height_md = $height * $md_scale;
                                $image_p = imagecreatetruecolor($new_width_md, $new_height_md);
                                $image = imagecreatefromjpeg($lcl_root_dir.'/'.$img_name);
                                imagecopyresampled($image_p, $image, 0, 0, 0, 0, $new_width_md, $new_height_md, $width, $height);

                                // Output
                                //imagejpeg($image_p, null, 100);
                                //This saves the image to directory.
                                imagejpeg($image_p,$lcl_root_dir.'/md/'.$img_name);
                                imagedestroy($image);
                                imagedestroy($image_p);

                                //For sm
                                $new_width_sm = $width * $sm_scale;
                                $new_height_sm = $height * $sm_scale;
                                $image_p = imagecreatetruecolor($new_width_sm, $new_height_sm);
                                $image = imagecreatefromjpeg($lcl_root_dir.'/'.$img_name);
                                imagecopyresampled($image_p, $image, 0, 0, 0, 0, $new_width_sm, $new_height_sm, $width, $height);

                                // Output
                                //imagejpeg($image_p, null, 100);
                                //This saves the image to directory.
                                imagejpeg($image_p,$lcl_root_dir.'/sm/'.$img_name);
                                imagedestroy($image);
                                imagedestroy($image_p);
                        }
                        $const_dir = '../../../../../images/products/kurtis';
                        $kurti_id = $kurti_comm_id;// $received->fk_id_kurti_comm;//99
                        $root_dir = $const_dir.'/'.$kurti_id;
                        mkdir($root_dir);
                        
                        function rmdir_recursive($dir) {
                            foreach(scandir($dir) as $file) {
                                if ('.' === $file || '..' === $file) continue;
                                if (is_dir("$dir/$file")) rmdir_recursive("$dir/$file");
                                else unlink("$dir/$file");
                            }
                            
                            rmdir($dir);
                        }
                        
                        if($_FILES["zip_file"]["name"]) {

                            $filename = $_FILES["zip_file"]["name"];
                            //echo 'zip_file,name,'.$filename.'</br>';
                            $source = $_FILES["zip_file"]["tmp_name"];
                            //echo 'zip_file,tmp_name,'.$source.'</br>';
                            $type = $_FILES["zip_file"]["type"];
                            //echo 'zip_file,type,'.$type.'</br>';
                        
                            $name = explode(".", $filename);
                            $accepted_types = array('application/zip', 'application/x-zip-compressed', 'multipart/x-zip', 'application/x-compressed');
                            foreach($accepted_types as $mime_type) {
                                if($mime_type == $type) {
                                    $okay = true;
                                    break;
                                } 
                            }
                        
                            $continue = strtolower($name[1]) == 'zip' ? true : false;
                            if(!$continue) {
                                $message = "The file you are trying to upload is not a .zip file. Please try again.";
                            }
                        $path = $root_dir;  
                        $filenoext = basename ($filename, '.zip'); 
                        $filenoext = basename ($filenoext, '.ZIP'); 
                        
                        $targetdir = $path ;
                        $targetzip = $path .'/'. $filename; 
                        $targetdir = $root_dir;
                        
                        
                        /* here it is really happening */
                        
                            if(move_uploaded_file($source, $targetzip)) {
                                $zip = new ZipArchive();
                                $x = $zip->open($targetzip);  // open the zip file to extract
                                if ($x === true) {
                                    $zip->extractTo($targetdir); // place in the directory with same name  
                                    $zip->close();
                        
                                    unlink($targetzip);
                            }
                               rename($root_dir.'/'.$name[0],$root_dir.'/1');
                               //echo'###'.$name[0].'###';
                              //  copy($root_dir.'/'.$name[0].'/',$root_dir);
/*
                                //---------------------------VALIDATIONS-----------------------------
                                $lg_dir = $root_dir.'/1';
                                $num_files = count(scandir($lg_dir))-2;
                                $lg_dir_content = scandir($lg_dir);
                                echo '$$$</br>';
                                echo $num_files;
                                print_r( $lg_dir_content);
                                echo '</br>';
                                print_r( scandir($root_dir.'/1/'.$lg_dir_content[2]));
                                echo '</br>$$$</br>';
                                $max_files_allowed = 6;
                                    // 6 IMAGES PER UPLOAD ALLOWED
                                    if($num_files>$max_files_allowed){
                                        echo '<p style="font-size:30px;color:red;">Status: Maximum 6 images allowed inside a folder.</p>';
                                        rmdir_recursive($root_dir);
                                        return false;
                                    }
                                    //NAMES MUST BE NUMERIC.
                                    for($i=0;$i<$num_files;$i++){
                                            $name = explode(".", $lg_dir_content[$i+2]);
                                            if(  $name[0]!= ($i+1)  ){
                                                echo '<p style="font-size:30px;color:red;">Images name must be numeric and they must start from 1,and must increase by 1 only.</p>';
                                                //delete created 
                                                rmdir_recursive($root_dir);
                                                return false;
                                            }
                                    }
                                    
                                    //$lg_dir_content = $lg_dir_content.sort();
                                    //print_r($lg_dir_content);





                                //---------------------------***VALIDATIONS-----------------------------*/
                                //for each color
                                for($j=0;$j<(count(scandir($root_dir.'/1/'))-2);$j++){
                                    $lcl_colors_array = (array_slice(scandir($root_dir.'/1/'),2));
                                    sort($lcl_colors_array);
                                    echo'</br>folder color names</br>';
                                    print_r($lcl_colors_array);
                                    echo'</br>folder color names</br>';
                                    //VALIDATIONS
                                    //Validation for color names(folder).
                                    if($lcl_colors_array === $colors_array)
                                    {
                                        echo '<p style="font-size:30px;color:green;"> FOLDER NAMES MATCH.</p>';  
                                    }
                                    else{
                                    echo '<p style="font-size:30px;color:red;">Folder names mismatch</p>';  
                                    rmdir_recursive($root_dir);
                                                return false;  
                                    }
                                    //Validaion for 6 images per upload.
                                    $max_files_allowed = 6;
                                    $num_files = count(scandir($root_dir.'/1/'.$lcl_colors_array[$j]))-2;
                                    
                                    if($num_files>$max_files_allowed){
                                        echo '<p style="font-size:30px;color:red;"> Maximum 6 images allowed inside a folder.</p>';
                                        rmdir_recursive($root_dir);
                                        return false;
                                    }
                                    else{
                                        echo '<p style="font-size:30px;color:green;"> No. of Max images<=6.</p>';  
                                    }
                                    $lg_dir_content = array_slice(scandir($root_dir.'/1/'.$lcl_colors_array[$j]),2);
                                     //NAMES MUST BE NUMERIC.
                                    for($i=0;$i<$num_files;$i++){
                                            $name = explode(".", $lg_dir_content[$i]);
                                            if(  $name[0]!= ($i+1)  ){
                                                echo '<p style="font-size:30px;color:red;">Images name must be numeric and they must start from 1,and must increase by 1 only.</p>';
                                                //delete created 
                                                rmdir_recursive($root_dir);
                                                return false;
                                            }
                                    }
                                     echo '<p style="font-size:30px;color:green;"> Images name numeric, start with 1, increase by 1.</p>';  

                                    //***VALIDATIONS
                                   // print_r(sizeof($result));
                                    mkdir($root_dir.'/1/'.$lcl_colors_array[$j].'/sm');
                                    mkdir($root_dir.'/1/'.$lcl_colors_array[$j].'/md');
                                    mkdir($root_dir.'/1/'.$lcl_colors_array[$j].'/lg');
                                        for( $i = 0;$i < sizeof(scandir($root_dir.'/1/'.$lcl_colors_array[$j]))-5 ; $i++ ){
                                            $lcl_image_names = array_slice( scandir($root_dir.'/1/'.$lcl_colors_array[$j]), 2);
                                          /*  echo '</br>'.$j.'</br>'; 
                                            print_r( $root_dir.'/1/'.$lcl_colors_array[$j].'/'.$lcl_image_names[$i]);
                                            echo '</br>'.$j.'</br>';*/
                                            scale_image($lcl_image_names[$i],$root_dir.'/1/'.$lcl_colors_array[$j]);
                                            
                                        
                                        }
                                    for( $l = 0;$l < sizeof(scandir($root_dir.'/1/'.$lcl_colors_array[$j].'/'.$lcl_image_names[$i]))-2 ; $l++ ){
                                        unlink($root_dir.'/1/'.$lcl_colors_array[$j].'/'.$lcl_image_names[$l]);
                                    }
                                        
                                            
                                }
                                echo '<script language="javascript">';
                                echo 'alert("Images Uploaded Successfully.")';
                                echo '</script>';
                                $upload_img_success = true;
                                $message = "Your .zip file was uploaded and unpacked.";
                            } else {	
                                $message = "There was a problem with the upload. Please try again.";
                            }
                            
                            ini_set('display_errors', 1);
                        }
                        
                        
                        
                        

        
        
        //---------------***Code to Upload Images-------------------------------- 
        ?>