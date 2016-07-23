<?php

error_reporting(E_ALL);
require("class.phpmailer.php");

// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
   
   $name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
   
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
$mail->AddReplyTo("$email_address", "$name");
$mail->WordWrap = 50; // set word wrap
//$mail->AddAttachment("c:\\temp\\js-bak.sql"); // add attachments
//$mail->AddAttachment("c:/temp/11-10-00.zip");

$mail->IsHTML(true); // set email format to HTML
$mail->Subject = "Website Contact Form:  $name";
$mail->Body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";

if($mail->Send()) return true;		
?>