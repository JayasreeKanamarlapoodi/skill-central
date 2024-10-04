<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'enquiry@websoc.ai';

  $subject = 'New Contact Form Submission';

  $headers = "From: $email" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             'X-Mailer: PHP/' . phpversion();

  $message = 'Name: ' . $name . "\n" .
             'Email: ' . $email . "\n" .
             'Message: ' . $message;

  mail($to, $subject, $message, $headers);
  echo 'Thanks for contacting us!';
}
?>