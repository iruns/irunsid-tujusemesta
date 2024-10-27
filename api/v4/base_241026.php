<?php
// Allow from any origin with proper headers (replace * with your frontend domain)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Allow-Credentials: true'); // If you need to allow credentials (cookies, etc.)

// Handle OPTIONS requests for CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
  header('Access-Control-Allow-Credentials: true'); // If you need to allow credentials (cookies, etc.)
  exit;
}

header('Content-Type:application/json');

$_PARAMS = json_decode(file_get_contents('php://input'), true);

$path = $_SERVER['PATH_INFO'];

// paths
$generateCode = '/generateCode';
$postReg = '/regData';
$postPersonaResult = '/personaData';
$postResult = '/resultData';
$getData = '/getData';

function checkParams($_PARAMS, $param_types, $mandatory = true, $param_vals = [])
{
  foreach ($param_types as $key => $type) {
    if (isset($_PARAMS[$key])) {
      $value = $_PARAMS[$key];
      $valueType = gettype($value);

      // if the type is incorrect, fail
      if ($valueType != $type) {
        respond(400, "Type of '$key' is '$valueType', while it should be '$type'");
        return false;
      }

      $param_vals[$key] = $_PARAMS[$key];
    } else {
      if ($mandatory) {
        respond(400, "Mandatory var '$key' is undefined");
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
    respond(400, 'Execute failed', $query->error);
  }

  $query->close();
  $con->close();
}

$regTable = 'reg_v4';
$resultTable = 'result_v4';

switch ($path) {
  case $generateCode:
    $data = [];
    $data['result'] = 'C-' . date('Ymd-His-', time()) . rand(1, 999);
    respond(200, 'Code generated', $data);
    break;

  case $postReg:
    $param_types = [];

    $param_types['code'] = 's';
    $param_types['name'] = 's';
    $param_types['email'] = 's';
    $param_types['age'] = 'i';
    $param_types['gender'] = 's';
    $param_types['domicile'] = 's';
    $param_types['info_from'] = 's';
    $param_types['event'] = 's';

    $param_vals = checkParams($_PARAMS, $param_types);

    if ($param_vals) {
      include('db.php');

      $param_types = array_merge($id_type, $param_types);

      $query = $con->prepare(
        "INSERT OR UPDATE INTO $regTable" .
        ' (' . implode(', ', array_keys($param_types)) . ')' .
        ' VALUES (' . str_repeat('?,', count($param_types) - 1) . '?)'
      );

      if ($query === false) {
        respond(400, 'Prepare failed: ' . $con->error);
      }

      $vals = array_values(array_merge($id_val, $param_vals));

      $bindResponse = $query->bind_param(
        implode('', array_values($param_types)),
        ...$vals
      );

      if ($bindResponse === false) {
        respond(400, 'Bind failed');
      }

      execute($query, $con);
    }

    break;

  case $postResult:
    $param_types = [];

    $param_types['code'] = 's';
    $param_types['email'] = 's';
    $param_types['event'] = 's';
    $param_types['start'] = 's';
    $param_types['end'] = 's';
    $param_types['p_ca'] = 'i';
    $param_types['p_ev'] = 'i';
    $param_types['p_in'] = 'i';
    $param_types['p_he'] = 'i';
    $param_types['p_ex'] = 'i';
    $param_types['p_re'] = 'i';
    $param_types['p_lo'] = 'i';
    $param_types['p_cr'] = 'i';
    $param_types['p_en'] = 'i';
    $param_types['p_sa'] = 'i';
    $param_types['p_ma'] = 'i';
    $param_types['p_ru'] = 'i';
    $param_types['top_persona'] = 's';
    $param_types['top_shadow'] = 's';
    $param_types['top_self'] = 's';

    $param_vals = checkParams($_PARAMS, $param_types, false);

    if ($param_vals) {
      include('db.php');

      $param_types = array_merge($id_type, $param_types);

      $query = $con->prepare(
        "INSERT OR UPDATE INTO $resultTable" .
        ' (' . implode(', ', array_keys($param_types)) . ')' .
        ' VALUES (' . str_repeat('?,', count($param_types) - 1) . '?)'
      );

      $vals = array_values(array_merge($id_val, $param_vals));

      $query->bind_param(
        implode('', array_values($param_types)),
        ...$vals
      );

      execute($query, $con);
    }
    break;

  case $getData:
    $param_types = [];
    $param_types['code'] = 's';
    $param_vals = checkParams($_PARAMS, $param_types, false);

    if ($param_vals) {
      include('db.php');

      $query = $con->prepare(
        "SELECT * FROM $regTable" .
        ' WHERE code=?'
      );

      $query->bind_param(
        implode('', array_values($param_types)),
        ...$vals
      );

      execute($query, $con);
    }

    break;

  default:
    respond(400, 'Unknown Request: ' . $path);
    break;
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