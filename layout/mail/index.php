<?php
error_reporting(E_ALL);
require("class.phpmailer.php");
$mail = new PHPMailer();
$mail->IsSMTP(); // set mailer to use SMTP
$mail->SMTPDebug  = 2;
$mail->From = "smsjsgkjl@gmail.com";
$mail->FromName = "SMS";
$mail->Host = "smtp.gmail.com"; // specif smtp server
$mail->SMTPSecure= "ssl"; // Used instead of TLS when only POP mail is selected
$mail->Port = 465; // Used instead of 587 when only POP mail is selected
$mail->SMTPAuth = true;
$mail->Username = "smsjsgkjl@gmail.com"; // SMTP username
$mail->Password = "scoremoney"; // SMTP password
$mail->AddAddress("mihir.sj@somaiya.edu", "Mihir");
$mail->AddAddress("sahil.limbasiya@somaiya.edu", "Sahil");
$mail->AddAddress("sanatkumar.k@somaiya.edu", "Sanat"); //replace myname and mypassword to yours
$mail->AddReplyTo("smsjsgkjl@gmail.com", "SMS");
$mail->WordWrap = 50; // set word wrap
//$mail->AddAttachment("c:\\temp\\js-bak.sql"); // add attachments
//$mail->AddAttachment("c:/temp/11-10-00.zip");

$mail->IsHTML(true); // set email format to HTML
$mail->Subject = 'SMS ROX';
$mail->Body = 'ENJOY EMAIL MATES';

if($mail->Send()) {echo "Send mail successfully";}
else {echo "Send mail fail";}
?>