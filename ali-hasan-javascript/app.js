// Java-script variables
`apple is my favourite ,apple i like to ea`;

/*
multi line comment in js
*/

let x = 10;
x = x + 1;
x++;
// console.log(`${x}`);

let y = 10;
// y = y - 1;
y--;
// console.log(`${y}`)

/*
comparison operators
*/
let p = 15;
let q = 16;

// console.log(p == q)
// console.log(p === q)
// console.log(p !== q)
// console.log(p > q);
// console.log(p < q);
// console.log(p >= q);
// console.log(p <= q);

/*
logical operators
*/

/*
Assignment operators
*/
let j = 10;
let k = 20;
// j = j + k;
j += k;

// j = j - k;
j -= k;

// j = j*k;
j *= k;
// console.log(j)

/*
Ternary operators
*/
let a = 20;
let b = 10;
let t = a < b ? "True" : "False";
let g = a < b ? true : false;

// console.log(t)
// console.log(g)

/*
java script data types
*/

let firstName = "john";
firstName = "ramos";
// let fullName = 'my name is \'john china\'';
let fullName = 'my name is "john china"';

let finalName = `my name is ${firstName}`;

let age = 30;

let name = "anisul" + 10;
let calculation = age + name;
// console.log(calculation);

let numberBig = 9n;
let numberBig2 = 5n;

let ifAdult = true;

let someInfo = null;

let fruits = ["apple", "lemon", "orange", "peer"];
fruits[0] = "mango";
fruits[4] = "kola";

let student = {
  fullName: "ali hosen",
  age: 30,
  dateOfBirth: 1 - 1 - 20000,
};
student.age = 55;
student.fullName = "ali";
student.dateOfBirth = 2001;

// console.log(student);

// javascript operator precedence
// ----- () {} []
//  / * - +

// console.log(5 + 6 - (3 / 2) * 4);

// console.log(typeof student);

// javascript functions

function myFunction(yourName, age, dateOfBirth = 1991) {
  console.log(
    "hello " +
      yourName +
      " your age is " +
      age +
      " your date of birth " +
      dateOfBirth
  );
}
myFunction("ali", 30, 1999);
myFunction("shovo", 40, true);

function isSubscribed() {
  console.log("subscribed");
}
document.getElementById("btn").addEventListener("click", isSubscribed);

(function (message) {
  console.log("i am self-Invokeing function", message);
})("helloo");

let maths = function (x, y) {
  return x * y;
};
console.log(maths(3, 4));
console.log(maths(3, 5));

function newFunction() {
  let firstName = "ali";
  console.log(firstName);
}
newFunction();
function newFunction() {
  let firstName = "ali";
  console.log(firstName);
}
newFunction();

let numbers = [4, 5, 6, 7];

let sqNumbers = numbers.map(function (number) {
  return number * number;
});
console.log(sqNumbers);

// arrow function
/*
let add = function (x,y){
  return x + y; 
}
console.log(add(5,6));
*/
let add = (x, y) => x + y;
console.log(add(5, 6));

function greet(firstName) {
  function sayHello() {
    alert("hello " + firstName);
  }
  return sayHello();
}
greet("shuvo");
