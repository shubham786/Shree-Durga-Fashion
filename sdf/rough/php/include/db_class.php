<?php
class db_class{
	var $dbhost;
	var $username;
	var $password;
	var $db;
	var $con;
	function __construct(){
		echo 'db_class constructor called.</br>';

		$this->dbhost='localhost';
		$this->username='root';
		$this->password='';
		$this->db='sdf';
		$this->con=mysqli_connect($this->dbhost,$this->username,$this->password,$this->db);		
	}

	function insert($query){
		echo '</br>Insert function called.';
		$result= array();		
		$sql=$query;

		try{
			$query=mysqli_query($this->con,$sql);//boolean return type			
			echo '</br>Rows affected ='.mysqli_affected_rows($this->con);
			if(mysqli_affected_rows($this->con)>0){
				$result[0]='success';
				$result[1]=mysqli_affected_rows($this->con);				
				return($result);
			}
		}catch(Exception $ex){
			echo '-----Error------='.$ex.getMessage();

		}
		mysqli_close($con);
	}

	function display($query){
		

		try{
		return $this->con;
		}catch(Exception $ex){
			echo '-----Error------='.$ex.getMessage();

		}
		mysqli_close($con);
	}
	

}
?>
