function flatten(arr) {
    let resurt = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            resurt.push(arr[i][j]);
        }
    }
    return resurt;
}
console.log(flatten([[1, 2], [3, 4], [5, 6]]));
console.log(flatten([["a", "b"], ["c", "d"]]));
