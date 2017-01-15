<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<header>
	<script type="text/javascript" src="js/jquery.v2.1.4.min.js" ></script>
	<script type="text/javascript" src="js/rkhs.autocompletion.js" ></script>
  <link rel="stylesheet" href="style/rkhs.css">
</header>
<body>


	<div class="wrapper">
		<input name="rkhs_search_input" id="my-test-id"  />
		
		<form method="post" action="backend/res.php">
        <input type="hidden" name="rkhs_list_id" id="my-hidden-test-id"  />
        <input type="submit" value="Send" />
        </form>
	</div>


<script type="text/javascript">
$(document).ready(function(){
  rkhsAutoCompletion('my-test-id','my-hidden-test-id');
});
</script>




</body>
</html>