<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false]);
    exit;
}

require_once __DIR__ . '/phpmailer/PHPMailer.php';
require_once __DIR__ . '/phpmailer/SMTP.php';
require_once __DIR__ . '/phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

define('ZOHO_USER', 'services@geo-nectar.com');
define('ZOHO_PASS', 'Jia@291085');

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true) ?? [];

$page      = strip_tags(trim($data['page']      ?? 'Unknown'));
$referrer  = strip_tags(trim($data['referrer']  ?? 'Direct'));
$userAgent = strip_tags(trim($data['userAgent'] ?? 'Unknown'));
$timestamp = strip_tags(trim($data['timestamp'] ?? date('Y-m-d H:i:s')));
$ip        = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'Unknown';

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.zoho.in';
    $mail->SMTPAuth   = true;
    $mail->Username   = ZOHO_USER;
    $mail->Password   = ZOHO_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    $mail->setFrom(ZOHO_USER, 'GeoNectar Website');
    $mail->addAddress(ZOHO_USER, 'GeoNectar');

    $mail->isHTML(true);
    $mail->Subject = "Cookie Consent Accepted — {$timestamp}";
    $mail->Body = "
        <div style='font-family:sans-serif;font-size:14px;color:#333'>
          <h2 style='color:#0A1F44;margin-bottom:16px'>Cookie Consent Accepted</h2>
          <table cellpadding='8' style='border-collapse:collapse;width:100%;max-width:560px'>
            <tr style='background:#f5f7fa'><td width='140'><strong>Time</strong></td><td>{$timestamp}</td></tr>
            <tr><td><strong>IP Address</strong></td><td>{$ip}</td></tr>
            <tr style='background:#f5f7fa'><td><strong>Page</strong></td><td>{$page}</td></tr>
            <tr><td><strong>Referrer</strong></td><td>{$referrer}</td></tr>
            <tr style='background:#f5f7fa'><td><strong>Browser / UA</strong></td><td style='font-size:12px'>{$userAgent}</td></tr>
          </table>
        </div>
    ";
    $mail->AltBody = "Cookie consent accepted.\nTime: {$timestamp}\nIP: {$ip}\nPage: {$page}\nReferrer: {$referrer}";

    $mail->send();
    echo json_encode(['success' => true]);

} catch (Exception $e) {
    error_log('[GeoNectar cookie-notify.php] PHPMailer error: ' . $e->getMessage());
    // Fail silently — don't surface mailer errors to the visitor
    http_response_code(200);
    echo json_encode(['success' => false]);
} catch (\Exception $e) {
    error_log('[GeoNectar cookie-notify.php] Unexpected error: ' . $e->getMessage());
    http_response_code(200);
    echo json_encode(['success' => false]);
}
