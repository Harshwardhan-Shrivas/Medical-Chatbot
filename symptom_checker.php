<?php
header('Content-Type: application/json');

$host = 'localhost';
$db = 'mediassist';
$user = 'root';
$pass = '';            // MySQL Password

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    echo json_encode(['error' => 'Database connection failed']);
    exit;
}

if (!isset($_POST['symptom']) || empty(trim($_POST['symptom']))) {
    echo json_encode(['response' => 'No symptom provided.']);
    exit;
}

$symptom = $_POST['symptom'];

$stmt = $conn->prepare("SELECT response FROM symptoms WHERE LOWER(keyword) = LOWER(?)");
$stmt->bind_param("s", $symptom);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    echo json_encode(['response' => $row['response']]);
} else {
    echo json_encode(['response' => "Sorry, I don't have information on that symptom."]);
}

$stmt->close();
$conn->close();
?>
