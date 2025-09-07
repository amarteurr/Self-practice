const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "David", grade: 90 },
    { name: "Eve", grade: 88 }
]

function getPassingName(studentsList) {
    return studentsList
        .filter(student => student.grade >= 80)
        .map(student => student.name.toUpperCase());
}
const passingNames = getPassingName(students);
console.log(passingNames); 


console.log(Array.isArray([]))
console.log(Array.isArray([1, true, "hello"]))
console.log(Array.isArray('[]'))

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
const array3 = array1.concat(array2)
console.log(array3)
console.log(array3.toString())

const array4 = [1,30, 4,21,100000]
array4.sort((item1, item2) => item1 - item2)
console.log(array4)

const stds = [{id: 1, name: 'Phirawit', email:'phirawit@sit.kmutt.ac.th'},
{id: 2, name: 'Somchai', email:'somchai@sit.kmutt.ac.th'},
{id: 3, name: 'Somying', email:'somying@sit.kmutt.ac.th'}]

const std = stds.find((item) => item.id === 2)
console.log(std)

const index = stds.findIndex((item) => item.id === 2)
console.log(index)

const numbers = [1,2,3,4,5]
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum)

const numbers2 = [1,2,3,4,5]
const sum2 = numbers2.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum2)

const fruits = ['apple', 'banana', 'cherry']
fruits.forEach((item, index) => {
    console.log(`${index}: ${item}`)
})

const letters = ['a', 'b', 'c']
const iterator = letters.entries()
for (const entry of iterator) {
    console.log(entry)
}

const keys = letters.keys()
for (const key of keys) {
    console.log(key)
}

const values = letters.values()
for (const value of values) {
    console.log(value)
}

const arr = [1,2,3,4,5]
const iterator2 = arr[Symbol.iterator]()
for (const value of iterator2) {
    console.log(value)
}