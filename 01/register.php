<?php
// register.php
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
$user = $_POST['username'];
$pass = $_POST['password'];

// Truy vấn để kiểm tra xem tên tài khoản đã tồn tại chưa
$sql = "SELECT * FROM users WHERE username='$user'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Tên tài khoản đã tồn tại
    header('Location: register.html?error=1'); // Quay lại trang đăng ký và hiển thị thông báo lỗi
} else {
    // Thêm người dùng mới vào cơ sở dữ liệu
    $sql = "INSERT INTO users (username, password) VALUES ('$user', '$pass')";

    if ($conn->query($sql) === TRUE) {
        // Đăng ký thành công
        header('Location: welcome.html'); // Chuyển hướng đến trang chào mừng
    } else {
        // Có lỗi xảy ra
        header('Location: register.html?error=2'); // Quay lại trang đăng ký và hiển thị thông báo lỗi
    }
}

$conn->close();
?>
