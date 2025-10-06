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

$path = $_SERVER['PATH_INFO'];

// paths
$generate_code = '/generateCode';
$post_reg = '/regData';
$post_result = '/resultData';
$get_data = '/getData';
$post_persona = '/postPersona';
$get_personas = '/getPersonas';

function check_params($param_types, $mandatory = true, $param_vals = [])
{
  foreach ($param_types as $key => $type) {
    if (isset($_POST[$key])) {
      $param_vals[] = $_POST[$key];
    } else {
      if ($mandatory) {
        // respond(400, "Mandatory var '$key' is undefined", $_POST);
        respond(400, var_dump($_POST));
        return false;
      }
    }
  }
  return $param_vals;
}

function to_insert_or_update_query($table, $param_types, $param_vals, $con)
{
  $param_keys = array_keys($param_types);

  $query = $con->prepare(
    "INSERT INTO $table" .
    ' (' . implode(', ', $param_keys) . ')' .
    ' VALUES (' . str_repeat('?,', count($param_types) - 1) . '?)' .
    ' ON DUPLICATE KEY UPDATE ' .
    implode(
      ", ",
      array_map(
        function ($key) {
          return "$key=?";
        },
        array_slice($param_keys, 1)
      )
    )
  );

  function repeat_non_keys($array)
  {
    return array_merge($array, array_slice($array, 1));
  }

  $vals = repeat_non_keys($param_vals);
  $type_vals = repeat_non_keys(array_values($param_types));
  $query->bind_param(
    implode('', $type_vals),
    ...$vals
  );

  return $query;
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

$reg_table = 'reg_v4';
$result_table = 'result_v4';
$persona_table = 'persona_v4';

switch ($path) {
  case $generate_code:
    $data = [];
    $data['result'] = 'C-' . date('Ymd-His-', time()) . rand(1, 999);
    respond(200, 'Code generated', $data);
    break;

  case $post_reg:
    $param_types = [];

    $param_types['code'] = 's';
    $param_types['name'] = 's';
    $param_types['email'] = 's';
    $param_types['age'] = 'i';
    $param_types['gender'] = 's';
    $param_types['domicile'] = 's';
    $param_types['info_from'] = 's';
    $param_types['event'] = 's';

    $param_vals = check_params($param_types);

    if ($param_vals) {
      include('db.php');

      $query = to_insert_or_update_query(
        $reg_table,
        $param_types,
        $param_vals,
        $con
      );

      execute($query, $con);
    }

    break;

  case $post_result:
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

    $param_vals = check_params($param_types, false);

    if ($param_vals) {
      include('db.php');

      $query = to_insert_or_update_query(
        $result_table,
        $param_types,
        $param_vals,
        $con
      );

      execute($query, $con);
    }
    break;

  case $get_data:
    if (isset($_POST['code'])) {
      include('db.php');

      $no_reg = isset($_POST['no_reg']) && $_POST['no_reg'];

      $result_reg = $con->query(
        "SELECT * FROM $reg_table" .
        " WHERE code=\"" . $_POST['code'] . "\""
      );

      if ($result_reg || $no_reg) {
        if ($result_reg)
          $reg_data = $result_reg->fetch_all(MYSQLI_ASSOC);

        if ($reg_data || $no_reg) {
          $data = [];

          if ($reg_data)
            $data['dataReg'] = $reg_data;
          else
            $data['dataReg'] = [];

          $result_result = $con->query(
            "SELECT * FROM $result_table" .
            " WHERE code=\"" . $_POST['code'] . "\""
          );

          if ($result_result) {
            $data['dataResult'] = $result_result->fetch_all(MYSQLI_ASSOC);
          }

          respond(200, 'User data found', $data);
        } else {
          respond(201, 'User data NOT found');
        }
      } else {
        respond(400, 'Execute failed', $query->error);
      }

      $con->close();
    }

    break;

  case $post_persona:
    $param_types = [];

    $_POST['timestamp'] = date("Y-m-d H:i:s");

    $param_types['code'] = 's';
    $param_types['name'] = 's';
    $param_types['event'] = 's';
    $param_types['timestamp'] = 's';

    if (isset($_POST['persona'])) {
      $param_types['persona'] = 's';
    }

    $param_vals = check_params($param_types);

    if ($param_vals) {
      include('db.php');

      $query = to_insert_or_update_query(
        $persona_table,
        $param_types,
        $param_vals,
        $con
      );

      execute($query, $con);
    }

    break;

  case $get_personas:
    include('db.php');

    $data = [];
    $data['timestamp'] = $con->query('SELECT CURRENT_TIMESTAMP')->fetch_row()[0];

    $query_string = "SELECT code, name, persona FROM $persona_table";

    $query_wheres = array();
    $query_wheres_all = array(
      "persona IS NOT NULL"
    );

    // optional: event, after
    if (isset($_POST['event']))
      array_push($query_wheres, "event=\"" . $_POST['event'] . "\"");

    if (isset($_POST['after']))
      array_push($query_wheres, "timestamp>\"" . $_POST['after'] . "\"");

    $query_wheres_all = array_merge($query_wheres, $query_wheres_all);

    // get finished rows
    $result = $con->query(
      $query_string .
      " WHERE " . implode(
        " AND ",
        $query_wheres_all
      ) .
      " ORDER BY timestamp DESC LIMIT 6"
    );

    if ($result) {
      $data['personas'] = $result->fetch_all(MYSQLI_ASSOC);

      if ($data['personas']) {
        respond(200, 'Data found', $data);
      }
      // if no finished rows, get last unfinished row
      else {
        if (count($query_wheres) > 0)
          $query_string .=
            " WHERE " . implode(" AND ", $query_wheres) .
            " ORDER BY timestamp DESC LIMIT 1";

        $result = $con->query(
          $query_string
        );

        $data['personas'] = $result->fetch_all(MYSQLI_ASSOC);

        respond(200, 'Nothing new', $data);
      }
    } else {
      respond(400, 'Execute failed', $query->error);
    }

    $con->close();

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