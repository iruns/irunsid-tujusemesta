<?php
// Allow from any origin with proper headers (replace * with your frontend domain)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true"); // If you need to allow credentials (cookies, etc.)

// Handle OPTIONS requests for CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Access-Control-Allow-Credentials: true"); // If you need to allow credentials (cookies, etc.)
  exit;
}

header("Content-Type:application/json");

$_PARAMS = json_decode(file_get_contents("php://input"), true);

if (isset($_PARAMS['content'])) {
  include('../db.php');

  $query = 'INSERT INTO `ruang_resah` (`content`)' .
    " VALUES ('" . $_PARAMS['content'] ."')";

  $statement = $db->prepare($query);

  $statement_status = $statement->execute();

  if ($statement_status) {
    respond(200, $statement_status);
  } else {
    respond(400, $statement_status);
  }
}

function respond($code, $desc)
{
  $respond['code'] = $code;
  $respond['desc'] = $desc;

  $json_response = json_encode($respond);
  echo $json_response;
}