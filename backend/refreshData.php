<?php

// Checking of input data
$populationMinDefault = 100;
if(isset($_POST["populationMin"])){
	$populationMin = $_POST["populationMin"];
	if(!is_numeric($populationMin)){
		$populationMin = $populationMinDefault;
	};
	if($populationMin < $populationMinDefault){
		$populationMin = $populationMinDefault;
	};
}else{
	$populationMin = $populationMinDefault;
};

$populationMaxDefault = 25000000;
if(isset($_POST["populationMax"])){
	$populationMax = $_POST["populationMax"];
	if(!is_numeric($populationMax)){
		$populationMax = $populationMaxDefault;
	};
	if($populationMax > $populationMaxDefault){
		$populationMax = $populationMaxDefault;
	};
}else{
	$populationMax = $populationMaxDefault;
};

$yearMinDefault = 0;
if(isset($_POST["yearMin"])){
	$yearMin = $_POST["yearMin"];
	if(!is_numeric($yearMin)){
		$yearMin = $yearMinDefault;
	};
	if($yearMin < $yearMinDefault){
		$yearMin = $yearMinDefault;
	};
}else{
	$yearMin = $yearMinDefault;
};

$yearMaxDefault = 2017;
if(isset($_POST["yearMax"])){
	$yearMax = $_POST["yearMax"];
	if(!is_numeric($yearMax)){
		$yearMax = $yearMaxDefault;
	};
	if($yearMax < $yearMaxDefault){
		$yearMax = $yearMaxDefault;
	};
}else{
	$yearMax = $yearMaxDefault;
};
// End of checking of input data


// Random server answer
$continents = array("евразия", "северная америка", "южная америка", "африка", "автралия", "атнарктида");

$res = array();
$count = 1000;
for($i = 1; $i <= $count; $i++){
	$res[] = array(
		"massage" => $message,
		"num" => $i,
		"name" => "city $i",
		"year" => rand(0, 2016),
		"population" => rand(100, 10000000),
		"continent" => $continents[rand(0, 4)],
		"image" => "http://lorempixel.com/150/150/city/" . rand(1, 10),
	);
};

header('Content-Type: application/json');
echo json_encode($res);

?>
