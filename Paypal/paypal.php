<?php
$clientId = "AbTVlLcpVsVwQTNEfml8c1GN0sa4bj-jSm10ucDDqwHz4vp73m5-jlVBqtrOlz6uo5JobRtCx3KkDknQ";
$secret = "EIQ-3doGnbGCgBsgMzYlv5SLZmC-MBTOyn4K7Ftspa76iFMW_FuoR0ZC0cHmgYl3VVFYEFXMnZXXkTf3";

$dbname = "tour5"; 
$servername = "localhost";
$username = "root";
$password = "";

// Tạo kết nối
$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

// Generate a new access token
function generateAccessToken($clientId, $secret) {
    $url = "https://api-m.sandbox.paypal.com/v1/oauth2/token";
    $headers = [
        "Accept: application/json",
        "Accept-Language: en_US",
    ];
    $data = "grant_type=client_credentials";

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_USERPWD, "$clientId:$secret");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $result = curl_exec($ch);
    if (empty($result)) {
        die("Error: No response.");
    } else {
        $json = json_decode($result);
        return $json->access_token;
    }

    curl_close($ch);
}

// Capture the order
function captureOrder($accessToken, $orderId) {
    $url = "https://api-m.sandbox.paypal.com/v2/checkout/orders/$orderId/capture";
    $headers = [
        "Content-Type: application/json",
        "Authorization: Bearer $accessToken",
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $result = curl_exec($ch);
    if (empty($result)) {
        die("Error: No response.");
    } else {
        return json_decode($result);
    }

    curl_close($ch);
}

// Update booking status
function updateBookingStatus($conn, $bookingId, $status) {
    $sql = "UPDATE booking SET status = '$status' WHERE id = '$bookingId'";
    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }
}

// Handle request
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $orderId = $data['orderID'];
    $bookingId = $data['bookingId'];

    $accessToken = generateAccessToken($clientId, $secret);
    $result = captureOrder($accessToken, $orderId);

    if ($result->status === "COMPLETED") {
        updateBookingStatus($conn, $bookingId, 'paid');
        echo json_encode(["status" => "COMPLETED"]);
    } else {
        echo json_encode(["status" => "FAILED"]);
    }
}

$conn->close();
?>
