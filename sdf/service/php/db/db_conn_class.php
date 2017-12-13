<?php

class db_conn_class{	
	var $dbhost;
	var $username;
	var $password;
	var $db;
	var $conn;

	function __construct(){
		$this->dbhost='localhost';
		$this->username='root';
		$this->password='';
		$this->db='sdf';
	}

	function __destruct(){
		//$this->conn->close();
	}


	// Check connection
	function connection(){
		$this->conn = new mysqli($this->dbhost,$this->username,$this->password,$this->db,9512);
		
		if ($this->conn->connect_error) {
			//Connection Failure.
			return false;
			
			}
		else{
			//Successful connection.
			return true;    		
		}
	}
	//-----INSERT FUNCTION--------
	function insert($query){
		if ($result = $this->conn->query($query)) {
				/* determine number of rows result set */
				$row_cnt = $this->conn->affected_rows;
				return $row_cnt;
		}
		
	}
	//-----INSERT FUNCTION***--------


	//-----UPDATE FUNCTION--------
	function update($query){
		//echo '-----update function called.-----';
		$result= array();		
		$run;
		try{ 

			$run=mysqli_query($this->conn,$query);//boolean return type
			if(false===$run)
			{
				//someerror while executing the query
				$result[0]=0;
				return $result;
			}

			if(mysqli_affected_rows($this->conn)>0)
			{
				//echo '</br>'.mysqli_affected_rows($this->conn).'rows updated';
				$result[0]=1;//1 represents successful updation.
				$result[1]=mysqli_affected_rows($this->conn);	//represents no of rows changed.			
				return($result);
			}
			else{
				$result[0]=4;//4 represents the same value already exists so no updation.
				$result[1]=mysqli_affected_rows($this->conn);
				return $result;
				//echo 'mysqli affected rows is <=0';
			}
		}
		catch(Exception $ex)
		{
			//echo '-----Error------='.$ex.getMessage();

		}
	//	mysqli_close($this->conn);
	}
	//-----UPDATE FUNCTION***--------


	//-----DELETE FUNCTION--------
	function delete($query){
		//echo '</br>-----delete function called.-----';
		$result= array();		
		$run;
		try{ 

			$run=mysqli_query($this->conn,$query);//boolean return type
			if(false===$run)
			{
				//echo 'error in mysqli_query()'.mysqli_error($this->conn);
			}

			//echo '</br>Rows affected ='.mysqli_affected_rows($this->conn);

			if(mysqli_affected_rows($this->conn)>0)
			{
				//echo '</br>'.mysqli_affected_rows($this->conn).'rows deleted';
				$result[0]='success';
				$result[1]=mysqli_affected_rows($this->conn);				
				return($result);
			}
			else{
				//echo 'mysqli affected rows is <=0';
			}
		}
		catch(Exception $ex)
		{
			//echo '-----Error------='.$ex.getMessage();

		}
	//	mysqli_close($this->conn);
	}
	//-----DELETE FUNCTION***--------


	//------SEARCH COUNT-------
	function search_count($query){
				if ($result = $this->conn->query($query)) {
				/* determine number of rows result set */
				$row_cnt = $result->num_rows;
				//$result->close();
				return $row_cnt;
				}
		/* close connection */
	}
	//------SEARCH COUNT***-------

	//Close the connection.
	function close(){
		//mysqli_close($this->conn);
		mysqli_close($this->conn);
	}



	//------RETURN VALUES-------
	function return_values($query){
			$result = $this->conn->query($query);//boolean return type
			//$row_cnt = $result->num_rows>0
			if( $result->num_rows>0)
			{
				//echo '</br>---'.mysqli_num_rows($run).'rows found</br>';
				//$this->conn->close();---
				//return JSON_ENCODE(  $result->fetch_assoc()  );
				$a=array();
				while($row = $result->fetch_assoc()) {
					array_push($a,$row);
				}
				return JSON_ENCODE($a);
				
				// JSON_ENCODE(  $result->fetch_all(MYSQLI_ASSOC)  );
				//return JSON_ENCODE(mysqli_fetch_all($result,MYSQLI_ASSOC));
			}else{
				return -1;
			}
		
		//$this->conn->close();
	}
	//------RETURN VALUES***-------

	
	

}// class***
 /*
 
 $obj = new db_conn_class();
 if($obj->connection()){
 $query = "insert into cus(email,pass) values('---@one.one','one')";
  echo  $obj->insert($query);

//print_r($obj->return_values($sql));
 }*/
?>
