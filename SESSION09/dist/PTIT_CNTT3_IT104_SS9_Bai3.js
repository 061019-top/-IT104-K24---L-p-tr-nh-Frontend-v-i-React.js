function mergeObject(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
console.log(mergeObject({ name: "Join" }, { role: "Developer" }));
