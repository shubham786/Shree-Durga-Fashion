<?php
class base_class{
    /* member variables */
    var $one;
    var $two;
    /* member variables*** */
     
    /* function members */
    function __construct(){
        $this->one='one';
        $this->two='two';
    }

    function set($one_local,$two_local){
        $this->one=$one_local;
        $this->two=$two_local;
    }

    function get(){        
        echo $this->one.'</br>';
        echo $this->two;
    }
    /* function members*** */

    
}

    $object=new base_class();
   // echo $object->get();
    
?>