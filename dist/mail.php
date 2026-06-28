<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// PHPMailer – download the 3 files from https://github.com/PHPMailer/PHPMailer
// and place them in the phpmailer/ folder next to this file.
require_once __DIR__ . '/phpmailer/PHPMailer.php';
require_once __DIR__ . '/phpmailer/SMTP.php';
require_once __DIR__ . '/phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// ── Zoho credentials ─────────────────────────────────────────────────────────
define('ZOHO_USER', 'services@geo-nectar.com');
define('ZOHO_PASS', 'Jia@291085');
// ─────────────────────────────────────────────────────────────────────────────

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true) ?? [];

$name    = strip_tags(trim($data['name']    ?? ''));
$email   = filter_var(trim($data['email']   ?? ''), FILTER_SANITIZE_EMAIL);
$phone   = strip_tags(trim($data['phone']   ?? ''));
$company = strip_tags(trim($data['company'] ?? ''));
$service = strip_tags(trim($data['service'] ?? ''));
$message = strip_tags(trim($data['message'] ?? ''));

if (!$name || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit;
}

$mail = new PHPMailer(true);
try {
    // SMTP – Zoho Mail
    $mail->isSMTP();
    $mail->Host       = 'smtp.zoho.in';
    $mail->SMTPAuth   = true;
    $mail->Username   = ZOHO_USER;
    $mail->Password   = ZOHO_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // Sender / recipient
    $mail->setFrom(ZOHO_USER, 'GeoNectar Website');
    $mail->addAddress(ZOHO_USER, 'GeoNectar');
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(true);
    $mail->Subject = "Website Enquiry from {$name}";
    $mail->Body = "
        <div style='font-family:sans-serif;font-size:14px;color:#333'>
          <h2 style='color:#0A1F44;margin-bottom:16px'>New Contact Form Submission</h2>
          <table cellpadding='8' style='border-collapse:collapse;width:100%;max-width:520px'>
            <tr style='background:#f5f7fa'><td width='130'><strong>Name</strong></td><td>{$name}</td></tr>
            <tr><td><strong>Email</strong></td><td>{$email}</td></tr>
            <tr style='background:#f5f7fa'><td><strong>Phone</strong></td><td>{$phone}</td></tr>
            <tr><td><strong>Company</strong></td><td>{$company}</td></tr>
            <tr style='background:#f5f7fa'><td><strong>Service</strong></td><td>{$service}</td></tr>
            <tr><td valign='top'><strong>Message</strong></td><td>" . nl2br(htmlspecialchars($message)) . "</td></tr>
          </table>
        </div>
    ";
    $mail->AltBody = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nCompany: {$company}\nService: {$service}\nMessage:\n{$message}";

    $mail->send();
    echo json_encode(['success' => true]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mailer error. Please email us directly.']);
}
