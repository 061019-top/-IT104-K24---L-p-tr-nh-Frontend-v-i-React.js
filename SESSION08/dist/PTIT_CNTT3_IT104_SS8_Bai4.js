function object(obj1, obj2) {
    let obj3 = Object.assign(Object.assign({}, obj1), obj2);
    return obj3;
}
console.log(object({ Id: 1, name: "minh" }, { age: 20, occupation: "sinh vien" }));
