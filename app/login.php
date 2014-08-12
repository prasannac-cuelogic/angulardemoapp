<?php

/**
* 
*/
class ClassName
{
	
	function __construct()
	{
		# code...
	}

	function fnMainContent ()
	{
		//database connection
		require_once 'inc/config.php';

		$arrData = json_decode($_GET['p']);		

		if (isset($arrData)) {

			switch (trim($arrData->angular_action)) {
				case 'loginaction' :

						$strUserEmail = trim($arrData->email);
						$password = trim($arrData->pswd);
						
						$this->fnLoginUser($strUserEmail, $password);
					break;
			}
			//Switch END
		}
	}	
	
	/*
	* fnLoginUser for login is exist or not 
	* $strUserEmail string: $strUserEmail
	* $password string: $password
	* 
	* @return string
	*/
	function fnLoginUser($strUserEmail, $password) 
	{
		//Check value exist or not
		if ( $strUserEmail != '' && $password != '' ) {
			
			$strSelectQuery = mysql_query( 'SELECT count(id) as usercount FROM tbl_user WHERE email="'.$strUserEmail.'" AND password="'.$password.'" ' );			
			$arrUserExistCount = mysql_fetch_assoc($strSelectQuery);
			
			//Return value
			$strReturn = ($arrUserExistCount['usercount']) ? 'true' : 'error';

		} else {
			$strReturn = 'error';
		}

		echo $strReturn;
		exit;
	}
}

$objClass = new ClassName();
$objClass->fnMainContent();

?>