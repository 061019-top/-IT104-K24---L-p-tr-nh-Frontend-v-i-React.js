function findElement(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return arr[i];
        }
    }
    return undefined;
}
console.log(findElement([1, 2, 3], 3));
console.log(findElement(["a", "b", "c"], "a"));
console.log(findElement([1, 2, 3], 6));
