const hello = (name: String) => {
  console.log(`hello ${name}`);
}

hello('222')

/* 
  TypeScript 基本数据类型
  Number
  Boolean
  String
  BigInt
  Null
  Undefined
  Symbol
*/

const bool:Boolean = false

const number: Number = 1
const binaryNumber: Number = 0b11

const str: String = '122'

const empty: null = null

const undefine: undefined = undefined

const undefineNull: undefined = null

const numNull: Number = null

const numUndefined: Number = undefined


const strNull: String = null

const strUndefined: String = undefined

/* any 【不确定的数据类型】 的使用 */
let notSureType: any = '1'
notSureType = 1
notSureType = {}
notSureType = []
notSureType = false
notSureType = null
notSureType = undefined

/* 联合类型 */
let numberOrString: number | String = 1
numberOrString = '1111'

/* 对象类型 */
// 纯数字数组
let arrOfNumber: number[] = [1, 2, 5, 4]
arrOfNumber.push(11)

let arr_number: Array<number> = [12, 33]
// 纯字符串数组
let arrOfString: String[] = ['1', '2', '5', '4']
arrOfString.push('aaa')

function args () {
  console.log(arguments)
  // let arr: any[] = arguments
}

/* 元组 */
let cell: [string, number] = ['asss', 23]

/* 方法 */
// 无返回值的方法
function no_return ():void {
  console.log('无任何返回值的方法...')
}
// 有返回值的方法
function add (x: number, y: number): number {
  return x + y
}
add(1, 2)
/* 
  可选参数, 可选参数只能出现在参数列表（固定参数）的后面，作为最后一个参数
  可选参数不可以给默认值
*/
function sqrt (x: number, y: number, z: number = 10, u?: number): number {
  return x * y
}

// 函数的赋值
const sqrt_copy = sqrt

const subtract = function (x: number, y: number, z?: number | string): number {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

// 只复制固定参数
const subtract_copy: (q: number, w: number) => number = subtract

// 参数全复制
const subtract_copy_complete: (q: number, w: number, e?: number) => number = subtract

/* 
  Interface 接口
  接口属性不可加修饰符
 */

interface Person  {
  name: String;
  age: Number;
  sex?: String;                 // 可有可无的属性
  readonly userid: Number;      // 只读，初始化后不可修改
}
// 属性不可少， 也不可多
let user: Person = {
  userid: 12,
  name: '',
  age: 12
}
console.log(user);

/* 类 class */

class Car {
  brand: String = '';

  constructor (brand: string) {
    this.brand = brand
  }

  run () {
    return `品牌是：${this.brand}`
  }
}

const bmw = new Car('宝马')
console.log(bmw.run());

class BMW extends Car {
  public price: number = 100

  constructor (brand) {
    super(brand)
    console.log(this.brand)
  }

  run () {
    return `${this.brand} 的价格是：${this.price}`
  }
}

/* 
  类的修饰符
  public
  private
  protected
*/

class Modifier {
  public open: String;
  private personal: String;
  protected protect: String;

  static categoies: string[] = ['mammal', 'bird']

  static isCar (arg) {
    return arg instanceof Car
  }
}


/* 类和接口 */

interface Animal {
  run(): void;
  eat(): void;
}

interface Characteristic {
  loyal: Boolean;
  bark(): void;
}

class Dog implements Animal, Characteristic {
  loyal: boolean
  constructor (loyal: boolean) {
    this.loyal = loyal
  }
  run () {}
  eat () {}
  bark () {}
}

class Cat implements Animal {
  constructor () {
    
  }
  run () {

  }
  eat () {}
}


/* 枚举 Enum */

enum Colors {
  Red,
  Yellow,
  Blue,
  Orange,
  Gray
}

console.log(Colors.Red)     // ===> 0
console.log(Colors.Blue)    // ===> 1
console.log(Colors[0]);     // ===> Red

enum Direction {
  Up  = 10,
  Down,
  Left,
  Right,
}

console.log(Direction.Up);      // ===> 10
console.log(Direction.Down);      // ===> 11


enum Week {
  Monday  = 'MONDAY',
  Tuseday = 'TUSEDAY',
  Wednesday = 'WEDNESDAY',
  Thursday = 'THURSDAY',
  Friday = 'FRIDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY'
}
const weekday = 'MONDAY'
if (weekday === Week.Monday ) {
  console.log(weekday)
}


/* 泛型 Generics */

function echo<T> (arg: T): T {
  return arg
}

const num = echo<Number>(1222)

const str1: string = '222'
const result_string = echo(str1)

const result_bool = echo(false)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const result_tuple = swap(['string', 12334])

/* 泛型约束 */
function echoWithArr<T> (arg: T[]): T[] {
  return arg
}

const arrs = echoWithArr([122, 12, 1])

interface IWithLength {
  length: number
}

// 只要参数包含length属性就可以正确使用
function echoWidthLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg
}

const str_has_len = echoWidthLength('str')
const obj_with_length = echoWidthLength({length: 10, width: '122'})
const arr_has_len = echoWidthLength([1, 2, 4])


// class Queue {
//   private data = [];
//   push (item) {
//     return this.data.push(item)
//   }
//   pop () {
//     return this.data.shift()
//   }
// }

// const queue = new Queue()
// queue.push(1)
// queue.push('1222')
// console.log(queue.pop().toFixed())
// console.log(queue.pop().toFixed())     // ===> throw error



class Queue<T> {
  private data = [];
  push (item: T) {
    return this.data.push(item)
  }
  pop (): T {
    return this.data.shift()
  }
}

const queue_number = new Queue<number>()
queue_number.push(1)
queue_number.push(1222)
console.log(queue_number.pop().toFixed())
console.log(queue_number.pop().toFixed())

const queue_string = new Queue<string>()
queue_string.push('1')
queue_string.push('1222')
console.log(queue_string.pop())

interface KeyPair<T, U> {
  key: T,
  value: U
}

let map1: KeyPair<number, string> = { key: 122, value: '122'}
let map2: KeyPair<string, number[]> = { key: '122', value: [122]}

interface Plus<T> {
  (a: T, b: T): T;
}

function plus (a: number, b: number): number {
  return a + b
}

function connect (a: string, b: string): string {
  return a + b
}

const a: Plus<number> = plus

const b: Plus<string> = connect

/* alias */

function sum (x: number, y: number): number {
  return x + y
}

const sum2: (x: number, y: number) => number = sum

// 别名
type PlusType = (x: number, y: number) => number

const sum_of_typeAlias: PlusType = sum

type NameResolver = () => string
type NameOrResolver = string | NameResolver

function getName (n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}

/* 断言 assertion */

function getLength (input: string | number): number {
  // way 1
  // const str = input as String
  // if (str.length) {
  //   return str.length
  // } else {
  //   const number = input as Number
  //   return number.toString().length
  // }
  // way 2
  if ((<string>input).length) {
    return (<string>input).length
  } else {
    return input.toString().length
  }
}

/* 声明 */

declare var jQuery: (selector: string) => any