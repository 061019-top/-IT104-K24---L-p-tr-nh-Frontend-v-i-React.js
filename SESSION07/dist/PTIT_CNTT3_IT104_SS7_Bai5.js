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
        else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
        }
    }
}
const user1 = new UserAcc("U001", "minh123", "abc123", "user", "active");
const user2 = new UserAcc("U002", "banUser", "xyz789", "user", "banned");
user1.login();
user1.logout();
user2.login();
user2.logout();
