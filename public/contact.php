<?php
/**
 * Iron Steel — Traitement du formulaire de contact.
 *
 * Reçoit les données du formulaire (JSON) et envoie un email via le serveur
 * SMTP de la boîte mail Hostinger du domaine. Aucune dépendance externe :
 * client SMTP minimal en sockets natifs PHP.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  À CONFIGURER (une seule fois, dans l'éditeur de fichiers Hostinger) :
 *   - SMTP_USER / SMTP_PASS : une boîte mail créée dans hPanel > Emails
 *     (ex. contact@ironsteel.fr et son mot de passe).
 *   - MAIL_TO : l'adresse qui reçoit les demandes de devis.
 * ─────────────────────────────────────────────────────────────────────────
 */

// ===== CONFIGURATION =========================================================
const SMTP_HOST = 'smtp.hostinger.com';
const SMTP_PORT = 465;          // 465 = SSL/TLS implicite (recommandé Hostinger)
const SMTP_USER = 'metallerie@ironsteel.fr';     // ← boîte mail Hostinger
const SMTP_PASS = 'A_REMPLACER';                 // ← mot de passe de la boîte mail
const MAIL_FROM = 'metallerie@ironsteel.fr';     // doit appartenir au domaine (= boîte authentifiée)
const MAIL_FROM_NAME = 'Site Iron Steel';
const MAIL_TO = 'metallerie@ironsteel.fr';       // destinataire des demandes de devis
// =============================================================================

header('Content-Type: application/json; charset=utf-8');

// On n'accepte que les requêtes POST.
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Méthode non autorisée.']);
    exit;
}

// Lecture du corps JSON (envoyé par le formulaire React).
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST; // fallback si envoyé en form-urlencoded
}

function field($data, $key)
{
    return trim((string) ($data[$key] ?? ''));
}

$motif = field($data, 'motif');
$nom = field($data, 'nom');
$prenom = field($data, 'prenom');
$email = field($data, 'email');
$telephone = field($data, 'telephone');
$adresse = field($data, 'adresse');
$message = field($data, 'message');

$prestations = $data['prestations'] ?? [];
if (!is_array($prestations)) {
    $prestations = array_filter(array_map('trim', explode(',', (string) $prestations)));
}

// ===== VALIDATION ============================================================
if ($nom === '' || $prenom === '' || $email === '' || $message === '' || $motif === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Veuillez remplir tous les champs obligatoires.']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Adresse email invalide.']);
    exit;
}

// Libellés lisibles pour les motifs et prestations.
$motifsLabels = [
    'devis' => 'Demande de devis',
    'renseignement' => 'Demande de renseignements',
    'contact' => 'Prise de contact',
];
$prestationsLabels = [
    'garde-corps' => 'Garde-corps',
    'escaliers' => 'Escaliers',
    'portails' => 'Portails & Clôtures',
    'charpente' => 'Charpente métallique',
    'structures' => 'Structures spécifiques',
    'tuyauterie' => 'Tuyauterie & Chaudronnerie',
];

$motifLabel = $motifsLabels[$motif] ?? $motif;
$prestationsLabel = implode(', ', array_map(
    fn($p) => $prestationsLabels[$p] ?? $p,
    $prestations
)) ?: '—';

// ===== CONSTRUCTION DE L'EMAIL ===============================================
$e = fn($v) => htmlspecialchars($v, ENT_QUOTES, 'UTF-8');

$motifEsc = $e($motifLabel);
$prestationsEsc = $e($prestationsLabel);
$nomEsc = $e($nom);
$prenomEsc = $e($prenom);
$emailEsc = $e($email);
$telephoneEsc = $telephone !== '' ? $e($telephone) : '—';
$adresseEsc = $adresse !== '' ? $e($adresse) : '—';
$messageEsc = nl2br($e($message));

$subject = "[$motifLabel] $prenom $nom";
$bodyHtml = "
  <h2>Nouvelle demande depuis le site</h2>
  <p><strong>Motif :</strong> $motifEsc</p>
  <p><strong>Prestation(s) :</strong> $prestationsEsc</p>
  <hr />
  <p><strong>Nom :</strong> $prenomEsc $nomEsc</p>
  <p><strong>Email :</strong> $emailEsc</p>
  <p><strong>Téléphone :</strong> $telephoneEsc</p>
  <p><strong>Adresse / Ville :</strong> $adresseEsc</p>
  <hr />
  <p><strong>Message :</strong></p>
  <p>$messageEsc</p>
";

// ===== ENVOI VIA SMTP ========================================================
$sent = smtp_send(
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    MAIL_FROM,
    MAIL_FROM_NAME,
    MAIL_TO,
    $email,                 // Reply-To = l'email du visiteur
    $subject,
    $bodyHtml,
    $errorMsg
);

if (!$sent) {
    error_log('Iron Steel contact SMTP error: ' . $errorMsg);
    http_response_code(500);
    echo json_encode(['error' => "Erreur lors de l'envoi. Veuillez réessayer ou nous contacter par téléphone."]);
    exit;
}

echo json_encode(['message' => 'Votre message a bien été envoyé.']);
exit;

/**
 * Client SMTP minimal (SSL implicite) avec authentification AUTH LOGIN.
 * Retourne true en cas de succès, false sinon ($error reçoit le détail).
 */
function smtp_send($host, $port, $user, $pass, $from, $fromName, $to, $replyTo, $subject, $html, &$error)
{
    $transport = $port === 465 ? "ssl://$host" : $host;
    $fp = @stream_socket_client(
        "$transport:$port",
        $errno,
        $errstr,
        20,
        STREAM_CLIENT_CONNECT
    );
    if (!$fp) {
        $error = "Connexion SMTP échouée : $errstr ($errno)";
        return false;
    }
    stream_set_timeout($fp, 20);

    $read = function () use ($fp) {
        $data = '';
        while (($line = fgets($fp, 515)) !== false) {
            $data .= $line;
            // La dernière ligne d'une réponse multi-lignes a un espace en 4e position.
            if (isset($line[3]) && $line[3] === ' ') {
                break;
            }
        }
        return $data;
    };
    $cmd = function ($command, $expected) use ($fp, $read, &$error) {
        if ($command !== null) {
            fwrite($fp, $command . "\r\n");
        }
        $response = $read();
        $code = (int) substr($response, 0, 3);
        if (!in_array($code, (array) $expected, true)) {
            $error = "Réponse SMTP inattendue : " . trim($response);
            return false;
        }
        return true;
    };

    $host_name = $_SERVER['SERVER_NAME'] ?? 'localhost';

    if (!$cmd(null, 220)) { fclose($fp); return false; }
    if (!$cmd("EHLO $host_name", 250)) { fclose($fp); return false; }
    if (!$cmd('AUTH LOGIN', 334)) { fclose($fp); return false; }
    if (!$cmd(base64_encode($user), 334)) { fclose($fp); return false; }
    if (!$cmd(base64_encode($pass), 235)) { fclose($fp); return false; }
    if (!$cmd("MAIL FROM:<$from>", 250)) { fclose($fp); return false; }
    if (!$cmd("RCPT TO:<$to>", [250, 251])) { fclose($fp); return false; }
    if (!$cmd('DATA', 354)) { fclose($fp); return false; }

    $headers = [
        'From: ' . encode_header_name($fromName) . " <$from>",
        "To: <$to>",
        'Reply-To: <' . $replyTo . '>',
        'Subject: ' . encode_header_subject($subject),
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        'Date: ' . date('r'),
    ];
    // Protection injection : on neutralise les points en début de ligne.
    $body = preg_replace('/^\./m', '..', $html);
    $payload = implode("\r\n", $headers) . "\r\n\r\n" . $body . "\r\n.";
    if (!$cmd($payload, 250)) { fclose($fp); return false; }

    fwrite($fp, "QUIT\r\n");
    fclose($fp);
    return true;
}

function encode_header_name($name)
{
    return preg_match('/[^\x20-\x7e]/', $name)
        ? '=?UTF-8?B?' . base64_encode($name) . '?='
        : $name;
}

function encode_header_subject($subject)
{
    return '=?UTF-8?B?' . base64_encode($subject) . '?=';
}
