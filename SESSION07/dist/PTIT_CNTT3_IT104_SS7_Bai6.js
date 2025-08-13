class Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login() {
        console.log("Đăng nhập từ lớp Account");
    }
    logout() {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        }
    }
}
class UserAcc extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        }
        else {
            console.log("Tài khoản đã bị khóa");
        }
    }
}
class AdminAcc extends Account {
    constructor(id, userName, password) {
        super(id, userName, password, "admin");
    }
    banUser(user) {
        user.status = "banned";
        console.log(`Người dùng ${user.userName} đã bị khóa.`);
    }
}
const user1 = new UserAcc("U001", "minh123", "abc123", "user", "active");
const admin = new AdminAcc("A001", "admin01", "adminpass");
user1.login();
admin.banUser(user1);
user1.login();
