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

if (
  (isset($_PARAMS['process_id']) && $_PARAMS['process_id'] != "") &&
  isset($_PARAMS['specs']) &&
  isset($_PARAMS['message'])
) {
  include('db.php');

  $query = $con->prepare('INSERT INTO error_log (process_id, event_id, specs, message) VALUES (?, ?, ?, ?)');
  $query->bind_param(
    'sssss',
    $_PARAMS['process_id'],
    $_PARAMS['event_id'],
    $_PARAMS['specs'],
    $_PARAMS['message'],
    $_PARAMS['progress_data']
  );

  $data = $query->execute();

  if ($data) {
    respond(200, $data);
  } else {
    respond(400, $data);
  }

  $query->close();
  $con->close();
} else {
  respond(400, "Invalid Request");
}

function respond($code, $desc)
{
  $respond['code'] = $code;
  $respond['desc'] = $desc;

  $json_response = json_encode($respond);
  echo $json_response;
}
?>