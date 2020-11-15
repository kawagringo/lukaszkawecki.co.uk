<?php
$to         = 'kawagringo@yahoo.co.uk';
$Name       = $_POST['Name'];
$Company    = $_POST['Company'];
$email      = $_POST['Email'];
$Phone      = $_POST['Phone'];
$message    = $_POST['Message']
$subject    = 'Message from Lukasz Kawecki Website - from: ' . $Name ' (' .$email . ')';
$headers    = 'From: ' . $Name ' (' .$email . ')';
$headers    = "Content.Type: text/html; charset=utf-8\r\n";

mail($to, $subject, $message, $headers);

?>