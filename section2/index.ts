let hasValue = false;
// hasValue = 20;
// let hasValue: boolean = false;
let count: number = 10;
let float: number = 3.14;
let negative: number  = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;
// let hello;
// hello = 2;
// hello = 'hello';
// hello = true;
let hello: string;
hello = 'hello';

const person: {
  //   name: string;
  //   age: number;
  // } = {
  // name: 'Jack',
  name: {
    first: 'Jack',
    last: 'Smith'
  },
  age: 21
}
// console.log(person.gender);
// const person: object = {
//   name: 'Jack',
//   age: 21
// }
// Object create();
// console.log(person.gender);

const fruits: string[] = [
  'Apple', 'Banana', 'Grape'
]
const fruits2= [
  'Apple', 'Banana', 'Grape', 1
]
// fruits.push(21); //Error
const fruit = fruits[0];
fruit.toUpperCase;

const book: [string, number, boolean] = ['business', 1500, false];
// const book: [string, number, boolean] = ['business', 1500, false, 21]; //error
book[1] = 70
book.push(21)
// console.log(book[3]) // Error

// const CoffeeSize = {
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

enum CoffeeSize2 {
  SHORT, // 0
  TALL, // 1
  GRANDE, // 2
  VENTI // 3
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
// coffee.size = 'SHORT'//Error
coffee.size = CoffeeSize.SHORT

let anything: any = true;
anything = 'hello';
anything = {};
anything = ['hello', 33, true];
let banana = 'banana';
banana = anything;

let unionType: number | string = 10;
// unionType.toUpperCase() //Error
unionType = 'hello'
unionType.toUpperCase()

const apple = 'apple'
// let clothSize : 'small' | 'medium' | 'large';
type ClothSize = 'small' | 'medium' | 'large';
// let clothSize : 'small' | 'medium' | 'large' = 'large';
let clothSize : ClothSize = 'large';
const cloth = {
  color: 'white',
  // size: ClothSize
  size: clothSize
} 
const cloth2: {
  color: string;
  size: 'small' | 'medium' | 'large'
} = {
  color: 'white',
  size: 'medium'
}
// cloth.size = 'small' //Error

function add(num1: number, num2: number): number{
  return num1 + num2
}
add(1, 2)

function sayHello(): void {
  console.log('hello!')
}
function sayHello2(): undefined {
  console.log('hello!')
  return;
}

let tmp: undefined;

const anotherAdd: (n1: number, n2: number) => number = add;
const anotherAdd2: (n1: number, n2: number) => number = function (num1: number, num2: number): number{
  return num1 + num2
};
const anotherAdd3 = function (num1, num2) {
  return num1 + num2
};

const doubleNumber = (number: number): number => number * 2;
const doubleNumber2: (num: number) => number = num => num * 2;

function doubleAndHandle(num: number): void {
  console.log(num * 2)
}
doubleAndHandle(21);

function doubleAndHandle2(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(num * 2);
}

function doubleAndHandle3(num: number, cb: (num: number) => void): void {
  // null //error
  const doubleNum = cb(num * 2);
  // doubleNum.toUpperCase() //error
  if (double)
  console.log(num * 2);
}
doubleAndHandle2(21, doubleNum => {
  return doubleNum
});

let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// text = unknownInput; //error
text = anyInput
if (typeof unknownInput === 'string') {
  text = unknownInput;
}

function error(message: string) {
  throw new Error(message);
}
console.log(error('This is an error'))

function error2(message: string): never {
  throw new Error(message);
  // while (true){

  // }
}
console.log(error2('This is an error'))
