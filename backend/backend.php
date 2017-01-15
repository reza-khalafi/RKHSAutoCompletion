<?php

$q = $_GET['q'];
// $q = 'ca';
$source_arr = [
	'Avengers',
	'Spider-Man',
	'Iron Man',
	'Captain America',
	'Deadpool',
	'Daredevil',
	'Guardians of the Galaxy',
	'Captain Marvel',
	'Batman',
	'Flash',
	'Arrow',
	'Hal Jordan',
	'Dick Grayson',
	'Cyclone',
	'Lex Luthor',
	'Superman',
	'Joker',
	'Tim Drake'
];

$source_id_arr = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'11',
	'12',
	'13',
	'14',
	'15',
	'16',
	'17',
	'18'
];

$total_arr = [];
for ($i=0; $i < count($source_arr); $i++) { 
	if(stripos($source_arr[$i], $q) !== FALSE){
		$arr = [$source_id_arr[$i],$source_arr[$i]];
		array_push($total_arr, $arr);
	}
}



$json = json_encode($total_arr);

echo $json;

// echo "<pre>";
// print_r($json);








?>
