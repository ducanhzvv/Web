// js/script.js

// Hàm kiểm tra tính hợp lệ của form đăng nhập
function validateLoginForm() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert('Tên tài khoản và mật khẩu không được để trống.');
        return false;
    }
    // Thực hiện thêm kiểm tra nếu cần
    return true;
}

// Hàm kiểm tra tính hợp lệ của form đăng ký
function validateRegisterForm() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert('Tên tài khoản và mật khẩu không được để trống.');
        return false;
    }
    // Thực hiện thêm kiểm tra nếu cần
    return true;
}

// Thêm sự kiện cho form đăng nhập
document.querySelector('form[action="login.php"]').addEventListener('submit', function(event) {
    if (!validateLoginForm()) {
        event.preventDefault(); // Ngăn không gửi form nếu kiểm tra không hợp lệ
    }
});

// Thêm sự kiện cho form đăng ký
document.querySelector('form[action="register.php"]').addEventListener('submit', function(event) {
    if (!validateRegisterForm()) {
        event.preventDefault(); // Ngăn không gửi form nếu kiểm tra không hợp lệ
    }
});
// js/script.js

// Hiển thị thông báo khi form được gửi thành công
function showSuccessMessage(message) {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = message;
    document.body.appendChild(successMessage);
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}

// Thực hiện khi form đăng ký thành công
document.querySelector('form[action="register.php"]').addEventListener('submit', function(event) {
    if (validateRegisterForm()) {
        showSuccessMessage('Đăng ký thành công!');
    }
});
// js/script.js

// Hiệu ứng mở/đóng cho các phần của trang
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        if (targetElement.style.display === 'none' || targetElement.style.display === '') {
            targetElement.style.display = 'block';
        } else {
            targetElement.style.display = 'none';
        }
    });
});
