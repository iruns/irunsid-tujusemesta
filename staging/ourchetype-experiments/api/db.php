<?php
// set PHP error reporting in general
ini_set('display_errors', 1);
error_reporting(E_ALL);

// set mysqli error reporting
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$con = new mysqli(
  "localhost",
  "u890542365_our_admin",
  "C7@dBk6@uh!!hVX",
  "u890542365_ourchetype"
);

if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  die();
}
?>