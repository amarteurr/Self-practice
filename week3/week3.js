//1. function declaration
function multiply1(a,b){
    return a*b
}
// console.log(multiply1(2, 3))

//2. function expression (using arrow function syntax)
const multiply2= (a, b)=>{return a*b}  //(a,b)=>a*b
console.log(multiply2(4,2))
//3. function expressiong (using function declaration)
const multiply3=function(a,b){return a*b}
console.log(multiply3(5,2))

console.log(typeof multiply1)
console.log(typeof multiply2)
console.log(typeof multiply3)
const x=multiply1
const y=multiply2
const z=multiply3
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
console.log(x(2,3))
console.log(y(3,3))
console.log(z(4,3))

let a=1
let b=a
console.log( typeof a)
console.log( typeof b)

if(x===multiply1)
    console.log("x equals to multiply1")
else
    console.log('x not equals to multiply1')

function dosomething(x){
    return x
}
const t = dosomething(multiply2)
console.log(y(6,3))

function dosomething2(x,y){
    return x(y)
}

function saygoodbye(){
    return "Goodbye"
}
function sayhello(){
    return saygoodbye
}

console.log(sayhello()() )

function square(side){
    side = 9;
}
let theSide = 5;
square(theSide);
console.log(theSide); // 5

function sum(x,y, ...z){
    for (argu of arguments) {
        console.log(argu)
    }
    console.log(arguments.length)
}
sum(1,2,3,4,5,6,7,8,9)


function greeting(greet = "Hello", name = "World") {
    return `${greet}, ${name}!`;
}
console.log(greeting());
console.log(greeting("Hi"));
console.log(greeting("Hi", "Alice"));
console.log(greeting(undefined, "Bob"));
console.log(greeting(null, "Bob"));
console.log(greeting("Hi", null));

function sum1(num1, num2, num3) {
    console.log(num1)
    console.log(num2)
    console.log(num3)
    return num1 + num2 + num3;
}
let nums = [5, 10, 15];
console.log(sum1(...nums)); // Spread the array into individual arguments


function getFreqOfWords(sentence) {
 // ถ้าเป็น null หรือ undefined ให้ return undefined
 if (sentence === null || sentence === undefined) {
   return undefined;
 }
 // แปลงเป็นตัวพิมพ์เล็กทั้งหมด
 sentence = sentence.toLowerCase();
 // แยกคำด้วยช่องว่าง และตัด punctuation เบื้องต้น
 let words = sentence.match(/\b\w+\b/g);
 // ถ้าไม่มีคำ (string ว่าง) คืน object ว่าง
 if (!words) return {};
 let freq = {};
 // นับจำนวนคำ
 for (let word of words) {
   freq[word] = (freq[word] || 0) + 1;
 }
 return freq;
}

console.log(getFreqOfWords('Today is present and present is your gift'));
// { today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
console.log(getFreqOfWords('Do you best just do it'));
// { do: 2, you: 1, best: 1, just: 1, it: 1 }
console.log(getFreqOfWords(null));
// undefined
console.log(getFreqOfWords(undefined));
// undefined
