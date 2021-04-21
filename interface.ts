interface Person  {
  name: String;
  age: Number;
  sex?: String;                 // 可有可无的属性
  readonly userid: Number;      // 只读，初始化后不可修改
}
// 属性不可少， 也不可多
let man: Person = {
  userid: 12,
  name: '',
  age: 12
}
console.log(man);

