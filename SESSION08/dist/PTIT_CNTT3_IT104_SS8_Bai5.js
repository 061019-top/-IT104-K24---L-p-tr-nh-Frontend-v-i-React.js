function arrayx(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && arr[i] % 2 === 0) {
            console.log(arr[i]);
            return;
        }
    }
    console.log("undefined");
}
arrayx([1, 2, 3]);
arrayx(["a", "b", "c"]);
