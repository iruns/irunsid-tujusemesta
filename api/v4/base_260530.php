<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

require_once 'db.php';

class ApiResponse {
  public static function send($code, $message, $data = null) {
    http_response_code($code);
    $response = ['code' => $code, 'message' => $message];
    if ($data !== null) {
      $response['data'] = $data;
    }
    echo json_encode($response);
    exit;
  }

  public static function success($data = null, $message = 'Success') {
    self::send(200, $message, $data);
  }

  public static function error($message, $code = 400) {
    self::send($code, $message);
  }
}

class Validator {
  public static function required($data, ...$keys) {
    foreach ($keys as $key) {
      if (!isset($data[$key]) || trim($data[$key]) === '') {
        return false;
      }
    }
    return true;
  }

  public static function email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
  }

  public static function integer($value) {
    return filter_var($value, FILTER_VALIDATE_INT) !== false;
  }
}

class Database {
  private $con;

  public function __construct($connection) {
    $this->con = $connection;
  }

  public function insertOrUpdate($table, $params) {
    $keys = array_keys($params);
    $placeholders = implode(',', array_fill(0, count($keys), '?'));
    $updates = implode(',', array_map(fn($k) => "$k=VALUES($k)", array_slice($keys, 1)));

    $sql = "INSERT INTO $table (" . implode(',', $keys) . ") VALUES ($placeholders) " .
           "ON DUPLICATE KEY UPDATE $updates";

    $stmt = $this->con->prepare($sql);
    if (!$stmt) {
      throw new Exception($this->con->error);
    }

    $types = $this->inferTypes($params);
    $values = array_values($params);

    $stmt->bind_param($types, ...$values);

    if (!$stmt->execute()) {
      throw new Exception($stmt->error);
    }

    $stmt->close();
    return true;
  }

  public function select($table, $where = null, $params = []) {
    $sql = "SELECT * FROM $table";

    if ($where) {
      $sql .= " WHERE $where";
    }

    $stmt = $this->con->prepare($sql);
    if (!$stmt) {
      throw new Exception($this->con->error);
    }

    if (!empty($params)) {
      $types = $this->inferTypes($params);
      $values = array_values($params);
      $stmt->bind_param($types, ...$values);
    }

    if (!$stmt->execute()) {
      throw new Exception($stmt->error);
    }

    $result = $stmt->get_result();
    $data = $result->fetch_all(MYSQLI_ASSOC);
    $stmt->close();

    return $data;
  }

  public function query($sql, $params = []) {
    $stmt = $this->con->prepare($sql);
    if (!$stmt) {
      throw new Exception($this->con->error);
    }

    if (!empty($params)) {
      $types = $this->inferTypes($params);
      $values = array_values($params);
      $stmt->bind_param($types, ...$values);
    }

    if (!$stmt->execute()) {
      throw new Exception($stmt->error);
    }

    $result = $stmt->get_result();
    $data = $result ? $result->fetch_all(MYSQLI_ASSOC) : null;
    $stmt->close();

    return $data;
  }

  private function inferTypes($params) {
    $types = '';
    foreach ($params as $value) {
      if (is_int($value)) {
        $types .= 'i';
      } elseif (is_float($value)) {
        $types .= 'd';
      } else {
        $types .= 's';
      }
    }
    return $types;
  }

  public function close() {
    if ($this->con) {
      $this->con->close();
    }
  }
}

$path = parse_url($_SERVER['REQUEST_INFO'] ?? $_SERVER['PATH_INFO'] ?? '/', PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

$db = new Database($con);

try {
  switch (true) {
    case $path === '/codes' && $method === 'POST':
      $code = 'C-' . date('Ymd-His-') . substr(bin2hex(random_bytes(2)), 0, 3);
      ApiResponse::success(['code' => $code], 'Code generated');

    case $path === '/registrations' && $method === 'POST':
      if (!Validator::required($_POST, 'code', 'name')) {
        ApiResponse::error('Missing required fields', 400);
      }

      if (isset($_POST['email']) && !Validator::email($_POST['email'])) {
        ApiResponse::error('Invalid email format', 400);
      }

      if (isset($_POST['age']) && !Validator::integer($_POST['age'])) {
        ApiResponse::error('Age must be an integer', 400);
      }

      $params = [
        'code' => $_POST['code'],
        'name' => $_POST['name'],
        'email' => $_POST['email'] ?? null,
        'age' => isset($_POST['age']) ? (int)$_POST['age'] : null,
        'gender' => $_POST['gender'] ?? null,
        'others' => $_POST['others'] ?? null,
        'event' => $_POST['event'] ?? null,
      ];

      $db->insertOrUpdate('reg_v5', $params);
      ApiResponse::success(null, 'Registration saved');

    case $path === '/results' && $method === 'POST':
      if (!Validator::required($_POST, 'code', 'event')) {
        ApiResponse::error('Missing required fields', 400);
      }

      $params = [
        'code' => $_POST['code'],
        'email' => $_POST['email'] ?? null,
        'event' => $_POST['event'],
        'start' => $_POST['start'] ?? null,
        'end' => $_POST['end'] ?? null,
        'p_ca' => isset($_POST['p_ca']) ? (int)$_POST['p_ca'] : 0,
        'p_ev' => isset($_POST['p_ev']) ? (int)$_POST['p_ev'] : 0,
        'p_in' => isset($_POST['p_in']) ? (int)$_POST['p_in'] : 0,
        'p_he' => isset($_POST['p_he']) ? (int)$_POST['p_he'] : 0,
        'p_ex' => isset($_POST['p_ex']) ? (int)$_POST['p_ex'] : 0,
        'p_re' => isset($_POST['p_re']) ? (int)$_POST['p_re'] : 0,
        'p_lo' => isset($_POST['p_lo']) ? (int)$_POST['p_lo'] : 0,
        'p_cr' => isset($_POST['p_cr']) ? (int)$_POST['p_cr'] : 0,
        'p_en' => isset($_POST['p_en']) ? (int)$_POST['p_en'] : 0,
        'p_sa' => isset($_POST['p_sa']) ? (int)$_POST['p_sa'] : 0,
        'p_ma' => isset($_POST['p_ma']) ? (int)$_POST['p_ma'] : 0,
        'p_ru' => isset($_POST['p_ru']) ? (int)$_POST['p_ru'] : 0,
        'top_persona' => $_POST['top_persona'] ?? null,
        'top_shadow' => $_POST['top_shadow'] ?? null,
        'top_self' => $_POST['top_self'] ?? null,
      ];

      $db->insertOrUpdate('result_v4', $params);
      ApiResponse::success(null, 'Result saved');

    case $path === '/data' && $method === 'GET':
      if (!isset($_GET['code'])) {
        ApiResponse::error('Missing code parameter', 400);
      }

      $code = $_GET['code'];
      $no_reg = isset($_GET['no_reg']) && $_GET['no_reg'] === 'true';

      try {
        $reg_data = $db->select('reg_v5', 'code = ?', [$code]);
      } catch (Exception $e) {
        $reg_data = [];
      }

      if (empty($reg_data) && !$no_reg) {
        ApiResponse::success(null, 'No data found');
      }

      try {
        $result_data = $db->select('result_v4', 'code = ?', [$code]);
      } catch (Exception $e) {
        $result_data = [];
      }

      $response = [
        'dataReg' => $reg_data ?: [],
        'dataResult' => $result_data ?: [],
      ];

      ApiResponse::success($response, 'Data retrieved');

    case $path === '/personas' && $method === 'POST':
      if (!Validator::required($_POST, 'code', 'name', 'event')) {
        ApiResponse::error('Missing required fields', 400);
      }

      $params = [
        'code' => $_POST['code'],
        'name' => $_POST['name'],
        'event' => $_POST['event'],
        'persona' => $_POST['persona'] ?? null,
        'timestamp' => date('Y-m-d H:i:s'),
      ];

      $db->insertOrUpdate('persona_v4', $params);
      ApiResponse::success(null, 'Persona saved');

    case $path === '/personas' && $method === 'GET':
      $where_parts = ['persona IS NOT NULL'];
      $params = [];

      if (isset($_GET['event'])) {
        $where_parts[] = 'event = ?';
        $params[] = $_GET['event'];
      }

      if (isset($_GET['after'])) {
        $where_parts[] = 'timestamp > ?';
        $params[] = $_GET['after'];
      }

      $where = implode(' AND ', $where_parts);
      $sql = "SELECT code, name, persona FROM persona_v4 WHERE $where ORDER BY timestamp DESC LIMIT 6";

      try {
        $data = $db->query($sql, $params);
      } catch (Exception $e) {
        ApiResponse::error('Query failed', 500);
      }

      if (!empty($data)) {
        ApiResponse::success(['personas' => $data], 'Data found');
      }

      // Fallback: try unfinished rows if event filter exists
      if (isset($_GET['event'])) {
        $sql = "SELECT code, name, persona FROM persona_v4 WHERE event = ? ORDER BY timestamp DESC LIMIT 1";
        $data = $db->query($sql, [$_GET['event']]);
        ApiResponse::success(['personas' => $data], 'No new data');
      }

      ApiResponse::success(['personas' => []], 'No data found');

    default:
      ApiResponse::error('Endpoint not found', 404);
  }
} catch (Exception $e) {
  error_log('API Error: ' . $e->getMessage());
  ApiResponse::error('Server error', 500);
} finally {
  $db->close();
}
?>
