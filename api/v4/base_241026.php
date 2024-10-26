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

$path = $_SERVER["PATH_INFO"];

$id_type['process_id'] = 's';

// paths
$generateCode = "generateCode";
$postReg = "regData";
$postPersonaResult = "personaData";
$postResult = "resultData";
$getData = "getData";

function checkParams($_PARAMS, $param_types, $mandatory = true)
{
  $param_vals = array();
  foreach ($param_types as $key => $type) {
    if (isset($_PARAMS[$key])) {
      $param_vals[$key] = $_PARAMS[$key];
    } else {
      if ($mandatory) {
        return false;
      }
    }
  }
  return $param_vals;
}

function execute($query, $con)
{
  $result = $query->execute();

  if ($result) {
    respond(200, $result);
  } else {
    respond(400, $result);
  }

  $query->close();
  $con->close();
}

if (isset($_PARAMS['process_id']) && $_PARAMS['process_id'] != "") {
  $table = 'process_icad_2023_01';

  $id_val['process_id'] = $_PARAMS['process_id'];

  switch ($path) {
    case $generateCode:
      $data['result'] = "NEWCODE";
      respond(200, "Code generated", $data);
      break;
    //     case '/start':
//       $param_types['reg_version'] = 'd';
//       $param_types['name'] = 's';
//       $param_types['email'] = 's';
//       $param_types['age'] = 'i';
//       $param_types['gender'] = 's';
//       $param_types['from_bandung'] = 'i';
//       $param_types['info_from'] = 's';
//       $param_types['specs'] = 's';
// 
//       $param_vals = checkParams($_PARAMS, $param_types);
// 
//       if ($param_vals) {
//         include('db.php');
// 
//         $param_types = array_merge($id_type, $param_types);
// 
//         $query = $con->prepare(
//           "INSERT INTO $table" .
//           ' (' . implode(', ', array_keys($param_types)) . ')' .
//           ' VALUES (' . str_repeat('?,', count($param_types) - 1) . '?)'
//         );
// 
//         $vals = array_values(array_merge($id_val, $param_vals));
// 
//         $query->bind_param(
//           implode('', array_values($param_types)),
//           ...$vals
//         );
// 
//         execute($query, $con);
//       } else {
//         respond(400, "Invalid Request");
//       }
//       break;
// 
//     case '/update':
//       $param_types['progress_version'] = 'd';
//       $param_types['last_page_idx'] = 'i';
//       $param_types['passcodes'] = 's';
//       $param_types['persona_history'] = 's';
//       $param_types['persona_scores_sum'] = 's';
//       $param_types['top_archetypes'] = 's';
//       $param_types['is_locked'] = 'i';
//       $param_types['is_free_mode'] = 'i';
// 
//       $param_vals = checkParams($_PARAMS, $param_types, false);
// 
//       include('db.php');
// 
//       $query = $con->prepare(
//         "UPDATE $table" .
//         ' SET ' . implode('=?,', array_keys($param_vals)) . '=?' .
//         ' WHERE process_id=?'
//       );
// 
//       $param_vals = array_merge($param_vals, $id_val);
//       $vals = array_values($param_vals);
//       $param_types = array_merge($param_types, $id_type);
// 
//       $types = '';
//       foreach ($param_vals as $key => $value) {
//         $types .= $param_types[$key];
//       }
// 
//       $query->bind_param($types, ...$vals);
// 
//       execute($query, $con);
// 
//       break;
// 
//     case '/end':
//       include('db.php');
// 
//       $query = $con->prepare(
//         "UPDATE $table" .
//         ' SET end_time=CURRENT_TIMESTAMP()' .
//         ' WHERE process_id=?'
//       );
// 
//       $query->bind_param('s', $id_val['process_id']);
// 
//       execute($query, $con);
// 
//       break;
// 
//     case '/read':
//       # code...
//       break;

    default:
      respond(400, "Unknown Request");
      break;
  }
} else {
  respond(400, "Invalid Request");
}

function respond($code, $desc, $data = [])
{
  $respond = $data;
  $respond['code'] = $code;
  $respond['desc'] = $desc;

  $json_response = json_encode($respond);
  echo $json_response;
}
?>