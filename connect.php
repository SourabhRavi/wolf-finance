<?php
$servername = "68.178.147.210";
$username = "wolffinance";
$password = "PG4W;@}nW.uZ";
$dbname = "wolfleads";

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$service = $_POST['service'];

// $email1 = "oogbg16wo04g@wolffinance.in";
$email1 = "oa8700hg2f0t@wolffinance.in";
$to = "sourabh.k.ravi@gmail.com,jayzala27@gmail.com,hr@wolffinance.in";
$subject = "New Lead from Wolf Finance";
$headers = "From: $email1\n";
$message = "Hello,\n\nName: $name\nEmail: $email\nPhone: $phone\nService: $service\n\nGo get em!";
mail($to, $subject, $message, $headers);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO leads (name,phone,email,service)
VALUES ('$name', '$phone', '$email', '$service')";

if ($conn->query($sql) === TRUE) {
  header("Location: /thankyou.html");
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
