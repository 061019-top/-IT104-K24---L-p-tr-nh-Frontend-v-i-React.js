function _flatten<T>(arr:T[]):T[]{
   let resurt:T[]=[];
   for (let i = 0; i < arr.length; i++) {
    const item=arr[i];
    if (Array.isArray(item)) {
      let flatItem=  flatten<T>(item);
      for (let j = 0; j < flatItem.length; j++) {
        resurt.push(flatItem[j]);
        
      }
    }else{
       resurt.push(item);
    }
   }
   return resurt;
}

let input=[1,[2,[3,4],5],6];

console.log(_flatten(input));