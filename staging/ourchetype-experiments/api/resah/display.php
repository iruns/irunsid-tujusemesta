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


// others
// - clear the display of posts of x display
// - remove posts of ids


$_PARAMS = json_decode(file_get_contents("php://input"), true);

$limit = 10;

include('db.php');

$result;

// TODO handle no display number

// fill
// get latest (n) of (display x or null)
// if (isset($_PARAMS['after'])){
  $query = $con->prepare(
    'SELECT id, content, tags, timestamp' + 
    ' FROM ruang_resah' +
    ' WHERE display_number IS NULL' +
    ' ORDER BY timestamp DESC' +
    ' LIMIT 5'
  );

  // $query = $con->prepare(
  //   'SELECT id, content, tags, timestamp' + 
  //   ' FROM ruang_resah' +
  //   ' WHERE (display_number IS NULL OR display_number = ?)' +
  //   ' ORDER BY timestamp DESC' +
  //   ' LIMIT 5'
  // );
  
  // $query->bind_param(
  //   'i',
  //   $_PARAMS['display_number'],
  // );

  $result = $query->execute();

  // if < n, pad with other displays
// }

// update
// get first (n) after (timestamp) of (display x or null)
// if the display is given, set it


if ($result) {
  respond(200, $result);
} else {
  respond(400, $result);
}

$query->close();
$con->close();

function respond($code, $desc)
{
  $respond['code'] = $code;
  $respond['desc'] = $desc;

  $json_response = json_encode($respond);
  echo $json_response;
}
?>