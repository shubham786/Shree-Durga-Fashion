<?php

// require
require 'db/db_conn_class.php';

//$post_date = file_get_contents("php://input");
//$data = json_decode($post_date);

$post_date = file_get_contents("php://input");
$received = json_decode($post_date);
//$toString=json-encode($received);
//echo $received->email;
//echo $received->pass;
//echo $received->confirmPass;
//echo $received->operation;

//member functions
function sender($l_code,$received_values = ''){
    switch($l_code){

        case 0:
            echo '{"code":0}';
            //echo $received->email;
            break;

        case 1:
            echo '{"code":1}';
            break;

        case 2:
            echo '{"code":2}';
            break;

        case 3:
            echo '{"code":3}';
            break;
            
        case 4:
            echo '{"code":4}';
            break;
            

        case 200:
            echo '{"code":200}';
            break;

         case 201:
            echo '{"code":201,"data":'.$received_values.'}';
            break;

        case 0://for failure in connection
            echo '{"code":0}';
            break;
        
        
        default:
            echo "{'code':1000}";
    }

}
//member functions***
//header('Content-Type: application/json');


class derived_class extends db_conn_class{
    // insert update delete implementations are in db_conn_class(base class).
}
$pipe_db = new derived_class();


if($pipe_db->connection())
{    //login funcitonality  

     if($received->operation=='login'){
         //sender(1);//admin log in
        //sender(2);//email & pass do not match
        //sender(3);//User is not yet verified.
        //sender(201,$x[0]->id_cus);//successfully login as the user is verified.
         if($received->email == 'admin' && $received->pass == 'admin'){
             sender(1);//admin log in
             return;
         }
         
        
        //echo 'login operations to be done';
        $query="SELECT id_cus FROM cus WHERE email='".$received->email."' and pass='".$received->pass."'";
        $result = $pipe_db->return_values($query);
        $x = json_decode($result) ;

          //echo 'login operations to be done';
/*           $query="SELECT * FROM cus WHERE email='".$received->email."' and pass='".$received->pass."'";
          if( $pipe_db->search_count($query)>0){
              sender(200);//successfully login
          }
          else{
              $pipe_db->search_count($query).'frmp reoply <0';
              sender(2);//email & pass do not match
          }
 */
        if($result == -1){
            sender(2);//email & pass do not match
        }

        else if( $pipe_db->search_count($query)>0){
            
            sender(201,$x[0]->id_cus);//successfully login as the user is verified.
        }

       /*  else if ( $x[0]->verified == 0){
            sender(3);//User is not yet verified.
        } */
        

    }//login functionality***fetch_kurti_comm

    if($received->operation=='signup'){
        //db connection is successful
        $query='SELECT * FROM cus WHERE email='."'".$received->email."'";
        $count = $pipe_db->search_count($query);
        // checking if email is already in use
        if($count>0){
            //email already in use
            sender(0);
        }
        else{
            $query = 'INSERT INTO cus(email,pass) values('."'".$received->email."','".$received->pass."')";
            $pipe_db->insert($query);
            sender(1);
        }
        //new mail it is, so save to db 
    


    }//if($received->operation=='signup')***

    // This will write product details in db, below code is invoked from dashboard folder.
    if($received->operation == 'products_entry'){
        
        $query = 'INSERT INTO kurti(fk_id_kurti_comm,colors,prices,sizes,qty) 
        values('."'".$received->kurti_comm_id."','".$received->colors."','".$received->prices."','".
        $received->sizes."','".$received->qty."')";
        $count = $pipe_db->insert($query);
        if($count>=1){
            sender(200);//data written successfully.
            return;
        }
        else{
            $query = 'UPDATE  kurti SET
            colors='."'".$received->colors."'".
            ',prices='."'".$received->prices."'".
            ',sizes='."'".$received->sizes."'".
            ',qty='.  "'".$received->qty."'".
            ' WHERE fk_id_kurti_comm='."'".$received->kurti_comm_id."'";
            $received_values =  $pipe_db->update($query) ;
            if($received_values[0] == 1 ){
                sender(2);//suceessfully updated values
                return;
            }
            else if($received_values[0] == 4 ){
            sender(4);
            return;
            }
            sender(3);
            
        }
         /* $query = 'UPDATE  kurti  SET 
        colors='."'".$received->colors."'".
        ',prices='."'".$received->prices."'".
        ',sizes='."'".$received->sizes."'".
        ',qty='.  "'".$received->qty."'".
        'WHERE fk_id_kurti_comm='."'".$received->kurti_comm_id."'';  */
        
    }

     // To fetch kurti_comm_details, will be invoked from admin panel.
    if($received->operation == 'fetch_kurti_comm'){
        $query = "SELECT * FROM kurti_comm";
        $received_values = $pipe_db->return_values($query);
        
        sender(201,$received_values);
        
    }
//Fetchs all the details of kurtis from kurti,kurti_comm tables.
    if($received->operation == 'kurti_display'){
        $query = "SELECT name,prices,colors,id_kurti,sizes,print_pattern,pattern,sleeve,neck,fabric,occasion,entry_date
         FROM  kurti LEFT JOIN kurti_comm on  kurti.fk_id_kurti_comm = kurti_comm.id_kurti_comm ";
        $received_values = $pipe_db->return_values($query);
        //$received_values = JSON.EN
        $received_values = str_replace('"[','[',$received_values);
        $received_values = str_replace(']"',']',$received_values);
        $received_values = str_replace('\"','"',$received_values);
        sender(201,$received_values);
        
    }
//fetches few(4)kurtis to show at landing page.
    if($received->operation == 'landing_kurti_display'){
        $query = "SELECT name,prices,colors,id_kurti,sizes,print_pattern,pattern,sleeve,neck,fabric,occasion,entry_date
         FROM  kurti LEFT JOIN kurti_comm on  kurti.fk_id_kurti_comm = kurti_comm.id_kurti_comm LIMIT 4 ";
        $received_values = $pipe_db->return_values($query);
        //$received_values = JSON.EN
        $received_values = str_replace('"[','[',$received_values);
        $received_values = str_replace(']"',']',$received_values);
        $received_values = str_replace('\"','"',$received_values);
        sender(201,$received_values);
        
    }
    //Used in detailed-product page.
     if($received->operation == 'single_detailed_kurti'){
        $query = "SELECT * FROM  kurti LEFT JOIN kurti_comm on  kurti.fk_id_kurti_comm = kurti_comm.id_kurti_comm 
        where kurti.id_kurti="."'".$received->id_kurti."'";
        $received_values = $pipe_db->return_values($query);
        //$received_values = JSON.EN
        $received_values = str_replace('"[','[',$received_values);
        $received_values = str_replace(']"',']',$received_values);
        $received_values = str_replace('\"','"',$received_values);
        sender(201,$received_values);
        
    }
    //Inserts common data of kurtis.
     if($received->operation == 'kurti_comm_entry'){
                //, name, article_sub_type, style_name, material, product_desc, , occasion_type, sleeve_type, pattern, 
        $query = 'INSERT INTO kurti_comm(name,pattern,print_pattern,sleeve,neck,fabric,occasion,product_desc)
         values('."'".$received->name."','".
         $received->pattern."','".
         $received->print."','".
         $received->sleeve."','".
         $received->neck."',
         '".$received->fabric."','".
         $received->occasion."','".
         $received->product_desc."')";
        $count = $pipe_db->insert($query);
        if($count>=1){
            sender(200);
        }
        else{
            sender(3);
        }
        
    }

     // This will fetch details for all the id's in user cart, request by cart-door page.
     if($received->operation == 'id_array_dtl'){
        
        $query =  "SELECT * FROM  kurti LEFT JOIN kurti_comm on  kurti.fk_id_kurti_comm = kurti_comm.id_kurti_comm 
        where kurti.id_kurti in(".$received->ids_string.")";
        $received_values = $pipe_db->return_values($query);
        //$received_values = JSON.EN
        $received_values = str_replace('"[','[',$received_values);
        $received_values = str_replace(']"',']',$received_values);
        $received_values = str_replace('\"','"',$received_values);
        sender(201,$received_values);
    }
//This will write orders to DB.
    if($received->operation == 'deli_add_submit'){
        //These are the variables used along the path.
            //id__cus__contact from cus_contact table.
            $id__cus__contact ;
            //Customer id in cus table.
            $received__id__cus;
            //id of customer address in cus_add table.
            $id__cus__add;
            //primary id of orders table.
            $id__orders;
        //***These are the variables used along the path.
        $cus_contact_flag = false;
        $cus_add_flag = false;
        $cus_add_contact_flag = false;
       
       //id of customer.
       
            $query = 'select id_cus from cus where email="'.$received->email.'"';
            $received_id_cus= $pipe_db->return_values($query);
            
            if($received_id_cus == -1){
                //Customer not present in cus table.
             //   echo 'id of customer does not exist, ABORTing';
                return;
            }
            //
            $received__id__cus = ( JSON_DECODE($received_id_cus)[0]->id_cus);
            //
        //***id of customer.
        $query = 'select count(*) as count from cus_contact where fk_id_cus="'.$received__id__cus.'"';
       // $pipe_db->connection();
        $row_count = JSON_DECODE( $pipe_db->return_values($query) )[0]->count;
        if($row_count==0){
            //Inserting contact no for the first time.
            $query = 'SELECT MAX(id_cus_contact) as max_id_cus_contact FROM sdf.cus_contact';
          //  $pipe_db->connection();
            $received_contact_no = JSON_DECODE( $pipe_db->return_values($query) );
            $id__cus__contact = $received_contact_no[0]->max_id_cus_contact;
            //
            $id__cus__contact+=1;
            //
            
            $query = 'INSERT into cus_contact(fk_id_cus,contact_no) values("'.$received__id__cus.'","'.$received->no.'")';
           // $pipe_db->connection();
            $pipe_db->insert($query);
           // echo'--First time contact insertion--';
            //set id__cus__contact to max id
        }
        
        else{
                $received_no = preg_replace('/[^0-9]/',"",$received->no);
                
                        $query = 'select id_cus_contact,contact_no from cus_contact where fk_id_cus="'.$received__id__cus.'"';
                     //   $pipe_db->connection();
                        $received_contact_no = JSON_DECODE( $pipe_db->return_values($query) );
                        for($i=0;$i<sizeof($received_contact_no);$i++){
                         //   echo 'loop begins,'.$received_contact_no[$i]->contact_no.'.';
                         //   echo'--';
                           $contact_no = preg_replace('/[^0-9]/',"",$received_contact_no[$i]->contact_no);
                           if($contact_no == $received_no){
                           //    echo'match found@'.$received_contact_no[$i]->id_cus_contact;echo '-';
                               $id__cus__contact = $received_contact_no[$i]->id_cus_contact;
                               $cus_contact_flag = true;
                               break;
                           }
                        }
                        if(!$cus_contact_flag){
                         //   echo'==';
                            $query = 'INSERT into cus_contact(fk_id_cus,contact_no) values("'.$received__id__cus.'","'.$received->no.'")';
                         //   $pipe_db->connection();
                            $pipe_db->insert($query);
                         //   echo'==';
                            $query = 'SELECT MAX(id_cus_contact) as max_id_cus_contact FROM cus_contact';
                       //     $pipe_db->connection();
                            $max_id_cus_contact = JSON_DECODE( $pipe_db->return_values($query) );
                            $id__cus__contact = $max_id_cus_contact[0]->max_id_cus_contact ;
                          //  echo'--Subsequent contact insertion from outside loop--';
                        }
                        
            }
        

        $deli_add_string =  $received->name.$received->delAdd.$received->state.$received->city.$received->pincode;
        $deli_add_string = preg_replace('/[^a-zA-Z0-9]/',"",$deli_add_string);
     //   echo'$'.$deli_add_string.'$';
        $query = 'select count(*) as count from cus_add where fk_id_cus="'.$received__id__cus.'"';
     //   $pipe_db->connection();
        $row_count = JSON_DECODE( $pipe_db->return_values($query) )[0]->count;
        if($row_count == 0){
            //First time address insertion.
            $query = 'SELECT MAX(id_cus_add) as max_id_cus_add FROM cus_add';
         //   $pipe_db->connection();
            $received_contact_add = JSON_DECODE( $pipe_db->return_values($query) );
            //
            $id__cus__add = $received_contact_add[0]->max_id_cus_add + 1;
            //
            $query = 'INSERT into cus_add(name,deli_add,state,city,pincode,fk_id_cus)
            values("'.$received->name.'","'.$received->delAdd.'","'.$received->state.'","'.
             $received->city.'","'.$received->pincode.'","'.$received__id__cus.'")';
         //   $pipe_db->connection();
            $pipe_db->insert($query);
           // echo'--First Time Address Insertion--';
        }else{
            $query = 'select id_cus_add,name,deli_add,state,city,pincode from cus_add where fk_id_cus="'.$received__id__cus.'"';
         //   $pipe_db->connection();
            $received_cus_add = JSON_DECODE( $pipe_db->return_values($query) );
            for($i=0;$i<sizeof($received_cus_add);$i++){
                $lcl_deli_add_string = $received_cus_add[$i]->name.$received_cus_add[$i]->deli_add.$received_cus_add[$i]->state.$received_cus_add[$i]->city.$received_cus_add[$i]->pincode;
                //echo'~~~'.$lcl_deli_add_string;
                $lcl_deli_add_string = preg_replace('/[^a-zA-Z0-9]/',"",$lcl_deli_add_string);
                //echo'~~~'.$lcl_deli_add_string;
                if($lcl_deli_add_string == $deli_add_string){
                  //  echo'fuck same address, it should now quit the loop.';//------------------------
                    $id__cus__add = $received_cus_add[$i]->id_cus_add;
                    //echo$id__cus__add;
                    $cus_add_flag = true;
                    break;
                }
            }//echo'--Subsequent Address Insertion--';
            if(!$cus_add_flag){
                $query = 'SELECT MAX(id_cus_add) as max_id_cus_add FROM cus_add';
             //   $pipe_db->connection();
                $received_contact_add = JSON_DECODE( $pipe_db->return_values($query) );
                //
                $id__cus__add = $received_contact_add[0]->max_id_cus_add + 1;
                //
                $query = 'INSERT into cus_add(name,deli_add,state,city,pincode,fk_id_cus)
                values("'.$received->name.'","'.$received->delAdd.'","'.$received->state.'","'.
                $received->city.'","'.$received->pincode.'","'.$received__id__cus.'")';
            //    $pipe_db->connection();
                $pipe_db->insert($query);
            }
            
        }
        //Mapping for cus,cus_contact,cus_address tables in cus_add_contact table.
        $query = 'select count(*) as count from cus_add_contact ';
      //  $pipe_db->connection();
        $row_count = JSON_DECODE( $pipe_db->return_values($query) )[0]->count;
        if($row_count>0){
            $query = 'SELECT id_cus_add_contact,fk_id_cus, fk_id_cus_add, fk_id_cus_contact  FROM cus_add_contact';
         //   $pipe_db->connection();
            $received_cus_add_contact = JSON_DECODE(  $pipe_db->return_values($query)  );
            for($i=0;$i<sizeof($received_cus_add_contact);$i++){
                if( $received_cus_add_contact[$i]->fk_id_cus == $received__id__cus and $received_cus_add_contact[$i]->fk_id_cus_add == $id__cus__add and $received_cus_add_contact[$i]->fk_id_cus_contact == $id__cus__contact   ){
                    $id__max__id__cus__add__contact = $received_cus_add_contact[$i]->id_cus_add_contact;
                    $cus_add_contact_flag = true;
                    break;
                }
            }
        }
        if(!$cus_add_contact_flag){
           // echo'!!!'.'--id_cus'.'id_cus_add'.'id_cus_contact'.$received__id__cus.'--'.$id__cus__add.'--'.$id__cus__contact.'--';
            $query = 'INSERT into cus_add_contact( fk_id_cus, fk_id_cus_add, fk_id_cus_contact)
            values("'.$received__id__cus.'","'.$id__cus__add.'","'.$id__cus__contact .'")';
         //   $pipe_db->connection();
            $pipe_db->insert($query);
    
            $query = 'SELECT MAX(id_cus_add_contact) as max_id_cus_add_contact FROM cus_add_contact';
          //  $pipe_db->connection();
            $received_max_id_cus_add_contact = JSON_DECODE( $pipe_db->return_values($query) );
            //
            $id__max__id__cus__add__contact = $received_max_id_cus_add_contact[0]->max_id_cus_add_contact ;
        }
       
        
        //***Mapping for cus,cus_contact,cus_address tables in cus_add_contact table.
        $query = 'select count(*) as count from orders ';
      //  $pipe_db->connection();
        $row_count = JSON_DECODE( $pipe_db->return_values($query) )[0]->count;
        if($row_count == 0){
            
            $lcl_tid = 101;
        }else{
            

            $query = 'select MAX(tid) as count from orders ';
         //   $pipe_db->connection();
            $max_tid = JSON_DECODE( $pipe_db->return_values($query) )[0]->count;
            $lcl_tid = $max_tid + 1;
        }
        $query = 'select MAX(id_orders) as count from orders ';
      //  $pipe_db->connection();
        $max_id_orders = JSON_DECODE( $pipe_db->return_values($query) )[0]->count;
        $id__orders = $max_id_orders+1;
        
        
      //  echo '--ORDER INSERTED--';
        $received_orders_arry = JSON_DECODE($received->orders);
        //Holds 0.
        $array_status = [];
        //Holds --NA--.
        $array_status2 = [];
        $array_status3 = [];

        //$obj = {'status':'ordered'};
        for($i=0;$i<sizeof($received_orders_arry);$i++){
            array_push($array_status,0);
            array_push($array_status2,'--NA--');
            array_push($array_status3,'01-01-1001');
        }
        $array_status = JSON_ENCODE($array_status);
        $array_status2 = JSON_ENCODE($array_status2);
        $array_status3 = JSON_ENCODE($array_status3);
       // echo $array_status;

        /* $query = "INSERT into order_details(fk_id_orders,deli_status,payment_status,track_id,ship_date) 
        values('".$id__orders."','".$array_status."','".$array_status."','".$array_status2."')"; */

        /* $query = "INSERT into order_details(fk_id_orders,deli_status,payment_status,track_id,ship_date) 
        values('".$id__orders."','".$array_status."','".$array_status."','".$array_status2."','".$array_status2."')"; */
        
        /* $query = "INSERT into orders(deli_status,payment_status,track_id,ship_date) 
        values('".$array_status."','".$array_status."','".$array_status2."','".$array_status3."')"; */
       // $pipe_db->connection();
        //echo'orders is-'.$received->orders.'-';
        $query = "INSERT into orders(fk_id_cus_add_contact,tid,orders,deli_status,payment_status,track_id,ship_date) 
        values('".$id__max__id__cus__add__contact."','".$lcl_tid."','".$received->orders."','"
        .$array_status."','".$array_status."','".$array_status2."','".$array_status3. "')";
      //  $pipe_db->connection();
        $received_cus_add = JSON_DECODE( $pipe_db->insert($query) );
       // $received_cus_add = JSON_DECODE( $pipe_db->insert($query) );
       // echo '---SUCCESSFULLY DONE THE PROCESS---';

       sender(201,$lcl_tid);
       
        
        
    }

    //Data for orders used by admin panel to see no of orders ordered.
    if($received->operation == 'orders'){
        $query = "SELECT * FROM orders  
        
        join cus_add_contact on orders.fk_id_cus_add_contact
         = cus_add_contact.id_cus_add_contact join 
         cus_add on cus_add.id_cus_add = cus_add_contact.fk_id_cus_add join
          cus_contact on cus_contact.id_cus_contact = cus_add_contact.fk_id_cus_contact 
          join cus on cus.id_cus = cus_add_contact.fk_id_cus WHERE bogus!=1 ORDER BY order_date DESC ";


        $received_values = $pipe_db->return_values($query);
        $received_values = str_replace('"[','[',$received_values);
        $received_values = str_replace(']"',']',$received_values);
        $received_values = str_replace('\"','"',$received_values);
        sender(201,$received_values);
    }

    //Provide data b4 saving order for cross verifications.
    if($received->operation == 'b4_saveing_orders_changes'){
        $detail = new stdClass();
        $detail->orders = '';
        $detail->kurti = '';

        $query = 'SELECT deli_status from orders where id_orders ='."'".$received->id_orders."'";
      //  $pipe_db->connection();
        $detail->orders = $pipe_db->return_values($query);

        $detail->orders = str_replace('"[','[',$detail->orders);
        $detail->orders = str_replace(']"',']',$detail->orders);
        $detail->orders = str_replace('\"','"',$detail->orders);

        $query = 'SELECT id_kurti,sizes,qty from kurti where id_kurti in ('.$received->idString.')';
      //  $pipe_db->connection();
        $detail->kurti = $pipe_db->return_values($query);

        $detail->kurti = str_replace('"[','[',$detail->kurti);
        $detail->kurti = str_replace(']"',']',$detail->kurti);
        $detail->kurti = str_replace('\"','"',$detail->kurti);


        sender(201, json_encode($detail) );

       // print_r($detail);
         

     /*     $query = 'UPDATE  orders SET
         deli_status='."'".$received->deli_status."'".
         ',payment_status='."'".$received->payment_status."'".
         ',track_id='."'".$received->track_id."'".
         ',ship_date='."'".$received->ship_date."'".
         ' WHERE id_orders='."'".$received->id_table_pri."'";

         
        $received_values = $pipe_db->update($query); */
        //$received_values = JSON.EN
        //sender(201,$received_values);
    }

    
    //Finally save data from admin end.
    if($received->operation == 'save_orders_changes'){

        for ($i = 0; $i < sizeof($received->idsOutOfStockArr); $i++) {
            // echo "The identifier is:". $received->idsOutOfStockArr[$i]." <br>";
             //print_r( "The number is:". json_encode($received->kurtiIdQty[$i]));
              $query = 'UPDATE kurti SET out_of_stock = 0 WHERE id_kurti='."'".$received->idsOutOfStockArr[$i]."'";
             $received_values = $pipe_db->update($query);
             if($received_values[0] == 1 || $received_values[0] == 4){
                 //all good, values are being updated...
             }else{
                 sender(3);
                 break;
             } 
         } 

        

        for ($x = 0; $x < sizeof($received->kurtiIdQty); $x++) {
       // echo "The number is:". $received->kurtiIdQty[$x]->id_kurti." <br>";
       // print_r( "The number is:". json_encode($received->kurtiIdQty[$x]->qty));
        $query = 'UPDATE kurti SET qty = '."'".json_encode($received->kurtiIdQty[$x]->qty)."'".
        'WHERE id_kurti='."'".$received->kurtiIdQty[$x]->id_kurti."'";
        $received_values = $pipe_db->update($query);
        if($received_values[0] == 1 || $received_values[0] == 4){
            //all good, values are being updated... 
        }else{
            sender(3);
            break;
        }
    } 
    

         $query = 'UPDATE  orders SET
         deli_status='."'".$received->deli_status."'".
         ',payment_status='."'".$received->payment_status."'".
         ',track_id='."'".$received->track_id."'".
         ',ship_date='."'".$received->ship_date."'".
         ' WHERE id_orders='."'".$received->id_orders."'";

         
        $received_values = $pipe_db->update($query);
        if($received_values[0] == 1 || $received_values[0] == 4){
            sender(200);
            return;
        }else{
            sender(3);
            return;
        }
        
    }

    //Forgot Password.
    if($received->operation == 'change password'){
        $om =  openssl_decrypt ( $received->letter ,'BF-CBC', 'mykey');
        $om = ( (str_replace('\"','"',JSON_ENCODE($om)) ) );
        //echo $om->email;
        $pass = $received->password;
        //echo 'password'.$pass;
        $om= JSON_DECODE (trim($om,'"') );
        //echo 'email'.$om->email;
        

        $query = 'UPDATE  cus SET
        pass='."'".$pass."'".
        ' WHERE email='."'".$om->email."'";
        $result = $pipe_db->update($query);
        if( $result[0] ==1){sender(200);}
        else if( $result[0] ==0){sender(0);}
        //$received_values = JSON.EN
       // sender(201,$received_values);
    }

    //First time verification.
    if($received->operation == 'verification'){
        $decrypt = openssl_decrypt($received->letter,'BF-CBC','d6f+g59df;lgkporklfdkogiur9tfdkgl;kdfjksdjfkj49urokdjorg7t/5t');
        $decrypt = JSON_DECODE($decrypt);
        if($decrypt[0]!= 0){
            sender(0);
            return;
        }
        
      /*  $decrypt[0];//operation
       $decrypt[1];//email
       intval($decrypt[2]);//time */

        $query = 'UPDATE  cus SET verified=1 
         WHERE email='."'".$decrypt[1]."'";
         
       $result = $pipe_db->update($query);
       if( $result[0] ==1){sender(200);}
       else{sender(0);}
       
    }

    //Forgot password functionality.
    if($received->operation == 'forgot-password'){
        $decrypt = openssl_decrypt($received->letter,'BF-CBC','d6f+g59df;lgkporklfdkogiur9tfdkgl;kdfjksdjfkj49urokdjorg7t/5t');
        $decrypt = JSON_DECODE($decrypt);
        if($decrypt[0]!= 1){
            sender(0);
            return;
        }
        
      /*  $decrypt[0];//operation
       $decrypt[1];//email
       intval($decrypt[2]);//time */
       if( ( intval(time()) - intval($decrypt[2]) ) > 1800 ){
        sender(2);//link expired.
        return;
       }


        $query = 'UPDATE  cus SET pass='."'".$received->pass."'".
         'WHERE email='."'".$decrypt[1]."'";
         
       $result = $pipe_db->update($query);
       if( $result[0] ==1){sender(200);}
       else{sender(0);}
       
    }

    //User updating password from user-profile page.
    if($received->operation == 'updatePass'){
        $query = 'SELECT pass from cus where id_cus='."'".$received->id."'";
        $existingPass = $pipe_db->return_values($query);
        $existingPass = json_decode($existingPass);
     //   $pipe_db->connection();
        if( $existingPass[0]->pass!= $received->existingPass){
            sender(0);
            return;
        }


        

        $query = 'UPDATE  cus SET
        pass='."'".$received->pass."'".
        ' WHERE id_cus='."'".$received->id."'";
        $result = $pipe_db->update($query);
        if( $result[0] ==1){
            sender(200);
            return;
        
        }
        

        if( $existingPass[0]->pass == $received->existingPass){//New password is same as old password.
            sender(200);
            return;
        }

        sender(3);
            
        
         
    }

    //To calculate the no of sm images of a particular product.
    if($received->operation == 'noOfImages'){
        $color = $received->color;
        $id = $received->id;
        $directory = '../../images/products/kurtis/'.$id.'/1/'.$color.'/sm/';
        $files = glob($directory . '*.jpg');
        
        if ( $files !== false )
        {
            $filecount = count( $files );
            //echo $filecount;
            sender(201,$filecount);
        }
        else
        {
            sender(0);
        }
    }

    //To register bogus entries.
    if($received->operation == 'bogusEntry'){
        $query = 'SELECT bogus FROM orders WHERE id_orders='."'".$received->id_orders."'";
        
        $bogus = JSON_DECODE( $pipe_db->return_values($query) );
        if( $bogus[0]->bogus == 1){
            sender(200);
            return;
        }
        else{
            $query = 'UPDATE  orders SET       bogus=1         WHERE id_orders='."'".$received->id_orders."'";
         //   $pipe_db->connection();
            $received_values =  $pipe_db->update($query) ;
            if($received_values[0] == 1){
                sender(200);
                return;
            } 

        }
        sender(0);
        
        
        
       
    }

    //To register comments.
    if($received->operation == 'saveComments'){
        $query = 'UPDATE  orders SET       comments='."'".$received->comments."'".' where id_orders='."'".$received->id_orders."'";
        
         //   $pipe_db->connection();
            $received_values =  $pipe_db->update($query) ;
            if($received_values[0] == 1 ){
                sender(200);
                return;
            } 
            else if($received_values[0] == 4){
                sender(4);
                return;
            }
        sender(0);
    }

     //to get users orders.
     if($received->operation == 'userAllOrders'){
        $fourmonthsback = date("Y-m-d", mktime(0, 0, 0, date("m")-$received->months, date("d"),   date("Y")));
        $query = 'SELECT *  FROM 
         cus   JOIN cus_add_contact on  cus.id_cus = cus_add_contact.fk_id_cus
         JOIN orders on cus_add_contact.id_cus_add_contact = orders.fk_id_cus_add_contact
          WHERE id_cus='."'".$received->id_cus."'".
          'AND orders.order_date >='."'".$fourmonthsback."'".'ORDER BY orders.order_date DESC';
        
            $received_values = $pipe_db->return_values($query);

            $received_values = str_replace('"[','[',$received_values);
            $received_values = str_replace(']"',']',$received_values);
            $received_values = str_replace('\"','"',$received_values);
            
            sender(201,$received_values);
           
    }

     //to get users orders.
     if($received->operation == 'kurtiIdNameStock'){
         //echo '###'. $received->idString;
           $query = 'SELECT kurti.id_kurti,kurti_comm.name,kurti.sizes,kurti.qty  FROM 
         kurti   JOIN kurti_comm on  kurti_comm.id_kurti_comm = kurti.fk_id_kurti_comm
          WHERE kurti.id_kurti in ('.$received->idString.')'; 
        
            $received_values = $pipe_db->return_values($query);

            $received_values = str_replace('"[','[',$received_values);
            $received_values = str_replace(']"',']',$received_values);
            $received_values = str_replace('\"','"',$received_values);
            
            sender(201,$received_values);
           
    }

     //to update return orders.
     if($received->operation == 'updateForReturns'){
        //echo '###'. $received->idString;
        $query = 'UPDATE  orders SET
         deli_status='."'".$received->deli_status."'".
         ' WHERE tid='."'".$received->tid."'";

         $received_values =  $pipe_db->update($query) ;
         if($received_values[0] == 1 or $received_values[0] == 4){
             sender(200);//suceessfully updated values
             return;}
             else{
                 sender(0);
                 return;
             }
   }

     //to send all "kurti" table data.
     if($received->operation == 'kurti'){
        //echo '###'. $received->idString;
        $query = 'select * from kurti';

        $received_values = $pipe_db->return_values($query);
        //$received_values = JSON.EN
        $received_values = str_replace('"[','[',$received_values);
        $received_values = str_replace(']"',']',$received_values);
        $received_values = str_replace('\"','"',$received_values);
        sender(201,$received_values);
   }

     //to send all "kurti" table data.
     if($received->operation == 'kurtiQty'){
        //echo '###'. $received->idString;
        $query = 'select id_kurti,sizes,qty from kurti where id_kurti = '."'".$received->id_kurti."'";

        $received_values = $pipe_db->return_values($query);
        //$received_values = JSON.EN
        $received_values = str_replace('"[','[',$received_values);
        $received_values = str_replace(']"',']',$received_values);
        $received_values = str_replace('\"','"',$received_values);
        sender(201,$received_values);
   }
    
   //Closing the connection, once-and-for-all.
   $pipe_db->close();

 }//**inside successfull connection context
 else{//$pipe_db->test_db() failed
     sender(0);
 }




?>