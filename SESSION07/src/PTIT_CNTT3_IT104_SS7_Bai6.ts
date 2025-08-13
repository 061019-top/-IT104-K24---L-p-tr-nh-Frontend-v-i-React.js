class Account {
  public id: string;
  public userName: string;
  private password: string;
  public isLogin: boolean;
  public role: string;

  constructor(id: string, userName: string, password: string, role: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.isLogin = false;
    this.role = role;
  }

  public login(): void {
    console.log("Đăng nhập từ lớp Account");
  }

  public logout(): void {
    if (this.isLogin) {
      console.log("Đăng xuất thành công");
      this.isLogin = false;
    }
  }
}

class UserAcc extends Account {
  public status: "active" | "banned";

  constructor(
    id: string,
    userName: string,
    password: string,
    role: string,
    status: "active" | "banned"
  ) {
    super(id, userName, password, role);
    this.status = status;
  }

  public login(): void {
    if (this.status === "active") {
      this.isLogin = true;
      console.log("Đăng nhập thành công");
    } else {
      console.log("Tài khoản đã bị khóa");
    }
  }
}

class AdminAcc extends Account {
  constructor(id: string, userName: string, password: string) {
    super(id, userName, password, "admin");
  }

  public banUser(user: UserAcc): void {
    user.status = "banned";
    console.log(`Người dùng ${user.userName} đã bị khóa.`);
  }
}

const user1 = new UserAcc("U001", "minh123", "abc123", "user", "active");
const admin = new AdminAcc("A001", "admin01", "adminpass");

user1.login();       
admin.banUser(user1); 
user1.login();       