function reverseArray<T>(arr:T[]):T[]{
    let resurt:T[]=[];
    for (let i = arr.length-1; i >=0; i--) {
        resurt.push(arr[i]);
    }
    return resurt;
}
console.log(reverseArray([1,2,3,4]));
console.log(reverseArray(["a","b","c"]));