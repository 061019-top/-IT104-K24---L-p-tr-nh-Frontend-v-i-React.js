class User {
    constructor(id, name, email, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
function updateUser(user, updates) {
    if (Object.keys(updates).includes("id")) {
        return "Id cannot be changed";
    }
    return Object.assign(Object.assign({}, user), updates);
}
const user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
const updates = {
    id: 2,
    name: "Alice Johnson",
};
console.log(updateUser(user, updates));
