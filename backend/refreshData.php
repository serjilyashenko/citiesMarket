<?php

//$param1 = $_POST["param1"];
//$param2 = $_POST["param2"];
//$param3 = $_POST["param3"];

$continents = array("евразия", "северная америка", "южная америка", "африка", "автралия", "атнарктида");

$res = array();
$count = 1000;
for($i = 1; $i <= $count; $i++){
	$res[] = array(
		"num" => $i,
		"name" => "city $i",
		"year" => rand(1500, 2016),
		"population" => rand(100, 100000),
		"continent" => $continents[rand(0, 4)],
		"image" => "http://lorempixel.com/150/150/city/" . rand(1, 10)
	);
};

header('Content-Type: application/json');
echo json_encode($res);

?>
