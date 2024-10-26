<?php
$_PARAMS = json_decode(file_get_contents("php://input"), true);

$path = $_SERVER["PATH_INFO"];

echo $path;
?>