<?php
// donate.php
// Kết nối cơ sở dữ liệu
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "anime_db";

// Tạo kết nối
$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

// Nhận dữ liệu từ form
$name = $_POST['name'];
$amount = $_POST['amount'];

// Thêm thông tin ủng hộ vào cơ sở dữ liệu
$sql = "INSERT INTO donations (name, amount) VALUES ('$name', '$amount')";

if ($conn->query($sql) === TRUE) {
    // Ủng hộ thành công
    header('Location: thank_you.html'); // Chuyển hướng đến trang cảm ơn
} else {
    // Có lỗi xảy ra
    echo "Lỗi: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
