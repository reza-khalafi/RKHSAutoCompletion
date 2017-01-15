<?php 


echo "ID's list is: <br>";
$res = $_POST['rkhs_list_id'];
$res_exp = explode(',',$res);




echo "<pre>";

print_r($res_exp);

echo "</pre>";



?>