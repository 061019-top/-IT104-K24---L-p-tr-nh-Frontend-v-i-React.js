function object<T,U>(obj1:T,obj2:U):T&U {
   let obj3={...obj1,...obj2};
   return obj3;
}
console.log(object({Id:1,name:"minh"},{age:20,occupation:"sinh vien"}));