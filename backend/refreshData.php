<?php

$populationMin 	= $_POST["populationMin"];
$populationMax 	= $_POST["populationMax"];
$yearMin 	   	= $_POST["yearMin"];
$yearMax		= $_POST["yearMax"];

$continents = array("евразия", "северная америка", "южная америка", "африка", "автралия", "атнарктида");

$res = array();
$count = 1000;
for($i = 1; $i <= $count; $i++){
	$res[] = array(
		"num" => $i,
		"name" => "city $i",
		"year" => rand(0, 2016),
		"population" => rand(100, 10000000),
		"continent" => $continents[rand(0, 4)],
		"image" => "http://lorempixel.com/150/150/city/" . rand(1, 10)
	);
};

header('Content-Type: application/json');
echo json_encode($res);

?>
