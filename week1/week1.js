const arr = [1, true , 'hello world'];
console.log(arr)
console.log(`length: ${arr.length}`)
console.log(`first item: ${arr[0]}`)
console.log(`last item: ${arr[arr.length - 1]}`)
for (let i = 0; i < arr.length; i++)
    console.log(`item ${i}: ${arr[i]}`)



const a = 'apple'
const b = 'banana'
const n = 10
const x = [a, b, n , null, undefined]
let i = 0
for (const item of x) {
    console.log(`item ${i++}: ${item}`)
}

// growing
arr[arr.length]='somchai'
arr[arr.length

]='js'
console.log(arr)
console.log(arr.length)//5

// shrinking
delete arr[2]
console.log(arr)
console.log(arr.length)//5
console.log(arr.pop())
console.log(arr.length)//4


//array contrains many objects
const colors = [{id:1, name:'red', tone:'hot'},{id:2, name:'blue', tone:'cold'},{id:3, name:'green', tone:'cool'}]
console.log(colors)

const contracts = [{email:['peerawit@gmail.com', 'peerawit@kmutt.ac.th']},
{address:['Bankok', 'Chamthaburi']}]
console.log(contracts)

//array contrains many arrays
const groups = [['apple', 'banana'], ['red', 'blue', 'green'], ['cat', 'dog']]
console.log(groups)
console.log(groups[0])//apple, banana]
console.log(groups[1][2])//green


const greeting = 'Hello World'
//spread operator
const greetingch = [...greeting]
console.log(greetingch)

const cloneGreeting = ['checked', ...greetingch ,'done']
console.log(cloneGreeting)


const arr1 = new Array()
console.log(arr1)//[]
console.log(arr1.length)//0

const arr2 = new Array(10)
console.log(arr2)//[ <10 empty items> ]
console.log(arr2.length)//10

const arr3 = new Array(1,5,7, 'hello')
console.log(arr3)   //[ 1, 5, 7, 'hello' ]
console.log(arr3.length) //4


const arr4 = Array.of(5)
console.log(arr4)   //[ 5 ]
console.log(arr4.length) //1

const str='Hello'
const arr5 = Array.from(str)
console.log(arr5)   //[ 'H', 'e', 'l', 'l', 'o' ]
console.log(arr5.length) //5

const arr6 = Array.from(arr4)
console.log(arr6)   //[ 5 ]
console.log(arr6.length) //1

const [h,y, ...z] = [10,15,20,25,30,40]
console.log(z)//[ 20, 25, 30, 40 ]