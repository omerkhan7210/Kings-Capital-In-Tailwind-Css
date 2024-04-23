<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Include PHPMailer autoload.php file

// Set SMTP settings
$smtpHost = 'your_smtp_host'; // e.g., smtp.example.com
$smtpUsername = 'your_smtp_username'; // SMTP username
$smtpPassword = 'your_smtp_password'; // SMTP password
$smtpPort = 587; // SMTP port (usually 587 or 465)
$smtpEncryption = 'tls'; // SMTP encryption (ssl or tls)

// Sender information
$senderName = $_POST['first_name'] . ' ' . $_POST['last_name'];
$senderEmail = $_POST['email'];

// Receiver email (your email address where you want to receive the contact form submissions)
$receiverEmail = 'your_email@example.com';

// Email subject
$subject = 'New Contact Form Submission';

// Email message
$message = 'Name: ' . $_POST['first_name'] . ' ' . $_POST['last_name'] . "\r\n";
$message .= 'Email: ' . $_POST['email'] . "\r\n";
$message .= 'Phone: ' . $_POST['phone'] . "\r\n";
$message .= 'Deal Type: ' . $_POST['deal_type'] . "\r\n";
$message .= 'Additional Information: ' . $_POST['additional_info'];

try {
    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    // SMTP configuration
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = $smtpEncryption;
    $mail->Port = $smtpPort;

    // Set email content
    $mail->setFrom($senderEmail, $senderName);
    $mail->addAddress($receiverEmail);
    $mail->Subject = $subject;
    $mail->Body = $message;

    // Send email
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
?>
