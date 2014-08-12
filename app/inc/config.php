<?php
	
	//assign value	
	$strHost = "localhost";
	$strDbUser = "root";
	$strDbPassword = "cuelogic";
	$strDbName = "angularjs";		
					
	$hdlDb = mysql_connect($strHost, $strDbUser, $strDbPassword);
	
	if (!$hdlDb) {
		die('Not connected : ' . mysql_error());
	}
	
	// make foo the current db
	$hdlDbSelected = mysql_select_db($strDbName, $hdlDb);
	if (!$hdlDbSelected) {
		die ('Can\'t use '.$strDbName.' : ' . mysql_error());
	}
?>