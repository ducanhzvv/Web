<?php
// login.php
// Kết nối cơ sở dữ liệu (thay đổi thông tin kết nối cho phù hợp với cơ sở dữ liệu của bạn)
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
$user = $_POST['username'];
$pass = $_POST['password'];

// Truy vấn để kiểm tra thông tin đăng nhập
$sql = "SELECT * FROM users WHERE username='$user' AND password='$pass'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Đăng nhập thành công
    header('Location: dashboard.html'); // Chuyển hướng đến trang dashboard
} else {
    // Đăng nhập thất bại
    header('Location: login.html?error=1'); // Quay lại trang đăng nhập và hiển thị thông báo lỗi
}

$conn->close();
?>
