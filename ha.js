let users = []; // Mảng để lưu trữ người dùng

function register() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    
    // Kiểm tra nếu tên người dùng đã tồn tại
    const userExists = users.find(user => user.username === username);
    if (userExists) {
        document.getElementById("message").innerText = "Tên người dùng đã tồn tại!";
        return;
    }

    // Thêm người dùng mới vào mảng
    users.push({ username, password });
    document.getElementById("message").innerText = "Đăng ký thành công!";
    clearForms();
}

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Kiểm tra thông tin đăng nhập
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        document.getElementById("message").innerText = "Đăng nhập thành công!";
        clearForms();
    } else {
        document.getElementById("message").innerText = "Tên người dùng hoặc mật khẩu không đúng!";
    }
}

function clearForms() {
    document.getElementById("register-username").value = "";
    document.getElementById("register-password").value = "";
    document.getElementById("login-username").value = "";
    document.getElementById("login-password").value = "";
}
