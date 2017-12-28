<?php
	header('Content-Type: text/html; charset=utf-8');
	require './TopDelivery.php';

	echo "<p>Тестовый комментарий</p>";
	$delivery = new TopDelivery;
	$client = $delivery->getClient();
	//$regions = $delivery->getCitiesRegions();
	//echo '<pre>'; print_r($regions); echo '</pre>'; 
