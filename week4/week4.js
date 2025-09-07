const words = ["mango , 'apple", "banana", "orange", "grape"];
const shotestWord = words.filter(word => word.length <= 4);
console.log(words);
console.log(shotestWord)

const sortedWords = words.sort()
console.log(words)
console.log(sortedWords)

let letters = [...'hello world']
let uppercase = ''
letters.forEach(letter => {
    uppercase += letter.toUpperCase()
})
console.log(`uppercase: ${uppercase}`)

const products = [
    { name: 'laptop', price: 1000, quantity: 2 },
    { name: 'phone', price: 500, quantity: 5 },
    { name: 'tablet', price: 300, quantity: 3 }
];
products.forEach((product) => console.log(product.name));


const students = [
    {id: 1, name: 'Phirawit'},
    {id: 2, name: 'Punnawish'},
    {id: 3, name: 'Chaibadin'}
]
const studentNames = students.map(student => student.name)
console.log(studentNames)

const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(`sum: ${sum}`)

const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(`evenNumbers: ${evenNumbers}`)

const fruits = ['apple', 'banana', 'orange', 'grape']
const hasBanana = fruits.includes('banana')
console.log(`hasBanana: ${hasBanana}`)

num = 10 
num % 2 === 0 ? 'eveen' : 'odd'
console.log(Boolean(num % 2 === 0) ? 'even' : 'odd')

const cart = [
    { productId: 1001, price: 500, quantity: 2 },
    { productId: 1002, price: 300, quantity: 1 },
    { productId: 1003, price: 200, quantity: 4 }
];

let total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

console.log(total);

cart.push({ productId: 1004, price: 400, quantity: 1 });
console.log(cart);
console.log(cart.length);

//shift()

const array1 = [1, 2, 3];
const firstElement = array1.shift()
console.log(array1)
console.log(firstElement)

//unshift()

const array2 = [1, 2, 3];
console.log(array2.unshift(4,5))
console.log(array2)

const word1 = ["mango", "apple", "banana", "orange", "grape"]
word1.splice(2,1)
console.log(word1)
word1.splice(3,2)
console.log(word1)
word1.splice(1,0,"kiwi","pear")
console.log(word1)
