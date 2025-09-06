// 1. Object literal
const book = {isbn:12345678, title:'title:Introduction toJS',
getISBN:function(){return this.isbn}}
console.log(book)

const person = {name:'Phirawit', age:19, city:'Bangkok', country:'Thailand',birthdate:'2005-12-13'}
console.log(person)

const product = {id:1, name:'iPhone', price:30000, stock:50, brand:'Apple'}
console.log(product)

const car = {make:'Toyota', model:'Camry', year:2020, color:'White', mileage:15000}
console.log(car)

const student = {id:67130500104, name:'Phirawit', lastname:'Pratoomsuwan',getname:function(){return this.name}}
console.log(student)


// new Date(year, monthIndex, day
book.publishDate = new Date(2025, 1, 1)
console.log(book)
delete book.isbn
console.log(book)
for (const key in book){
    console.log(book[key])
}



// 2. contructor function
function book1(isbn,title){
    this.isbn= isbn
    this.title = title
}
const b1 = new book1(123, 'js')
const b2 = new book1(456, 'html')
console.log(b1)
console.log(b2)

function std(id,firstname, lastname,age){
    this.id = id
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
}
const s1 = new std(67130500104, 'Phirawit', 'Pratoomsuwan' , 19)
const s2 = new std(67130500073, 'chaibadin', 'saejew', 20)
console.log(s1)
console.log(s2)

function product1(id,name,price,stock,brand){
    this.id = id
    this.name = name
    this.price = price
    this.stock = stock
    this.brand = brand
}
const p1 = new product1(1,'iPhone',30000,50,'Apple')
const p2 = new product1(2,'Galaxy',25000,30,'Samsung')
console.log(p1)
console.log(p2)

function car1(make,model,year,color,mileage){
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.mileage = mileage
}
const c1 = new car1('Toyota','Camry',2020,'White',15000)
const c2 = new car1('Honda','Civic',2019,'Black',20000)
console.log(c1)
console.log(c2)


// 3. class
class Book2{
    constructor(isbn,title){
        this.isbn = isbn
        this.title = title
    }
    getISBN(){
        return this.isbn
    }
    setTITLE(title){
        this.title = title
    }
    getBookInfo(){
        return `ISBN: ${this.isbn}, Title: ${this.title}`
    }
}
const myBook = new Book2(12345678,'Introduction to JS')
console.log(myBook)
console.log(myBook.getBookInfo())
console.log(myBook.getISBN())
console.log(myBook.setTITLE('Introduction to JS'))

// 4. using Object.create(existingObject)
const book3 = Object.create(book)
book3.isbn = 87654321
book3.title = 'Advanced JS'
console.log(book3)
console.log(book3.getISBN())


let a1={id:1, title:'js'}
const a2={id:1, title:'js'}
console.log(a1==a2)
console.log(a1===a2)
console.log(Object.is(a1,a2))

a1=a2
console.log(a1==a2)
console.log(a1===a2)
console.log(Object.is(a1,a2))

const keys = Object.keys(book)
console.log(keys)
const values = Object.values(book)
console.log(values)

//Shaallow Equality
function shallowEqual(obj1,obj2){
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    if(keys1.length !== keys2.length){
        return false
    }
    for(const key of keys1){
        if(obj1[key] !== obj2[key]){
            return false
        }
    }
    return true
}
const obj1 = {a:1, b:2, c:3}
const obj2 = {a:1, b:2, c:3}
const obj3 = {a:1, b:2, c:4}
console.log(shallowEqual(obj1,obj2))
console.log(shallowEqual(obj1,obj3))
