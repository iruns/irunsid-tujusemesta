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

include('../db.php');

$query_start = 'SELECT id, content, timestamp FROM ruang_resah';
$query = $query_start;

$wheres = array();

$is_filling = true;
$order = 'DESC';
$display_number = false;
$n_posts = 0;

$timestamp = date("Y-m-d h:i:s");

// if updating
if (isset($_PARAMS['after'])) {
  $is_filling = false;
  $wheres[] = 'timestamp < ' . $_PARAMS['after'];
  $order = 'ASC';
}

// if for a particular display
if (isset($_PARAMS['display_number'])){
  $display_number = $_PARAMS['display_number'];
  $wheres[] = '(display_number IS NULL OR' .
    ' display_number = ' . strval($display_number) . ')';
}

$query .= ' WHERE ' . join(' AND ', $wheres);
$query .= ' ORDER BY timestamp ' . $order;

// if n results is set
if (isset($_PARAMS['n_posts'])){
  $n_posts = $_PARAMS['n_posts'];
  $query .= ' LIMIT ' . strval($n_posts);
}
// else, set a default
else {
  $query .= ' LIMIT 8';
}

$statement = $db->prepare($query);
$statement_status = $statement->execute();

$rows = array();
$rows = get_array($statement, $rows);

// if the display is given, set it
if ($display_number != false && count($rows) > 0) {
  $ids = array();
  for ($i=0; $i < count($rows); $i++) { 
    $ids[] = $row['id'];
  }

  $update_query = 'UPDATE `ruang_resah`' .
    ' SET display_number = ' . strval($display_number) .
    ' WHERE id IN (' . join(',', $ids) . ')'
  ;
}

// if filling, for a particular display, and n results < n
// pad with other displays
if(
  $is_filling &&
  $display_number != false &&
  $n_posts > 0 &&
  count($rows) < $n_posts
  ) {
  $pad_query = $query_start .
    ' WHERE display_number <> ' . strval($display_number) .
    ' ORDER BY timestamp DESC' .
    ' LIMIT ' . strval($n_posts - count($rows))
    ;

  $statement = $db->prepare($pad_query);
  $statement_status = $statement->execute();

  $rows =get_array($statement, $rows);
}

if ($statement_status) {
  respond(200, $statement_status, $rows, $timestamp);
} else {
  respond(400, $statement_status, $rows, $timestamp);
}

$statement->close();
$db->close();

function get_array($statement, $rows) {
  $result = $statement->get_result();
  while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
    $rows[] = $row;
  }
  return $rows;
}

function respond($code, $desc, $content, $timestamp)
{
  $respond['code'] = $code;
  $respond['desc'] = $desc;
  $respond['content'] = $content;
  $respond['timestamp'] = $timestamp;

  $json_response = json_encode($respond);
  echo $json_response;
}
?>