// let users = []
// let products = []
// class Product {
//     constructor(brand, category, price, image) {
//         this.brand = brand
//         this.category = category
//         this.price = price
//         this.image = image
//     }
// }
// class User {
//     constructor(name, surname, age) {
//         this.name = name
//         this.surname = surname
//         this.age = age
//     }
// }
// function createUser(name, surname, age) {
//     let newUser = new User(name, surname, age)
//     users.push(newUser)
//     return users

// }
// function createProduct(brand, category, price, image) {
//     let newProduct = new Product(brand, category, price, image)
//     products.push(newProduct)
//     return products
// }
// createUser("sadiq", "mamedov", 20)
// createUser("sadiq", "mamedov", 20)
// createUser("sadiq", "mamedov", 20)
// console.log(users)

// class Animal {
//     constructor(weight, gender, isWild) {
//         this.weight = weight
//         this.gender = gender
//         this.isWild = isWild
//     }
//     run() {
//         return `animal running`
//     }
// }

// Animal.prototype.customMethod = function () {

// }

// class Snake extends Animal {
//     constructor(length, color, poison, weight, gender, isWild) {
//         super(weight, gender, isWild)
//         this.length = length
//         this.color = color
//         this.poison = poison
//     }
//     getLength() {
//         return `ilanin uzunlugu : ${this.length} m `
//     }

// }

// let newSnake = new Snake(110, "green", true, 3, true, true)
// let newAnimal = new Animal(10, false, false)
// console.log(newSnake.getLength())

// array arrain

// Array.prototype.customProtoMethod = function customMax() {
//     let max = 0
//     for (let i = 0; i < this.length; i++) {
//         if (this[i] > max) {
//             max = this[i]
//         }
//     }
//     return max
// }

// String.prototype.customStringMethod = function () {
//     return `salam kamran daxil etdiyin data : ${this}`
// }

// function customMax(array) {
//     let max = 0
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i]
//         }
//     }
//     return max
// }


// let items = [1, 2, 3, 4, 5, 6]
// let items2 = [10, 12, 3213, 231312321, , 321323, 232]
// console.log(items.customProtoMethod())
// console.log(items2.customProtoMethod())
// let str = "necesen?"
// console.log(str.customStringMethod())
// console.log(str.customProtoMethod())



// function User(name,surname){
//     let newUser={
//         name,surname
//     }
//     return newUser
// }
// let user1 = new User()

// class Car {
//     constructor(brand, model, year, color, fuelCapasity, fuelFor1Km, km, currentFuel) {
//         this.brand = brand
//         this.model = model
//         this.year = year
//         this.color = color
//         this.fuelCapasity = fuelCapasity
//         this.fuelFor1Km = fuelFor1Km
//         this.km = km
//         this.currentFuel = currentFuel
//     }
//     start(minute) {
//         let lazimOlanYanacag = minute * this.fuelFor1Km
//         if (lazimOlanYanacag < this.currentFuel) {
//             return `masin qizir`
//         }
//         else {
//             return `benzin yoxdur kasif`
//         }
//     }
//     run(distance) {
//         let target = distance * this.fuelFor1Km
//         if (this.currentFuel < target) {
//             return `bakda yeteri qeder yancag yoxdur`
//         }
//         else {
//             this.km += distance
//             this.currentFuel -= target
//             return `${distance}km yol gedildi`
//         }
//     }
//     zaprafka(litr) {
//         if (litr + this.currentFuel <= this.fuelCapasity) {
//             this.currentFuel += litr
//             return `elave edilen yanacag ${litr}L`
//         }
//         else {
//             return `lazim olandan daha cox doldurmusuz`
//         }
//     }
// }
// Car.prototype.stop = function () {
//     return `masin sonduruldu.Qet edilen mesafe : ${this.km}km`
// }

// let car1 = new Car("bmw", "328", 2013, "black", 50, 1.5, 30000, 40)
// console.log(car1.start(3))
// console.log(car1.run(20))
// console.log(car1.zaprafka(20))
// console.log(car1.zaprafka(5))
// console.log(car1.stop())





// let tek = 0
// let cut = 0
// for (let i = 0; i < 5; i++) {
//     let item = parseInt(prompt("ededi daxil edin"))
//     if (item == 0) {
//         alert("0 daxil edile bilmez")
//     }
//     else {
//         items.push(item)
//     }
// }
// for (let i = 0; i < items.length; i++) {
//     if (items[i] % 2 == 0) {
//         cut += items[i]
//     }
//     else {
//         tek += items[i]
//     }
// }
// if (tek > cut) {
//     console.log(tek - cut)
// }
// else {
//     console.log(cut - tek)
// }

// let items = []
// let diger = 0
// let ucReqemli = 0
// for (let i = 0; i < 5; i++) {
//     let item = parseInt(prompt("ededi daxil edin"))
//     items.push(item)
// }
// for (let i = 0; i < items.length; i++) {
//     if (items[i] > 99 && items[i] < 1000) {
//         ucReqemli += items[i]
//     }
//     else {
//         diger += items[i]
//     }
// }
// if (ucReqemli > diger) {
//     console.log(ucReqemli - diger)
// }
// else {
//     console.log(diger - ucReqemli)
// }




// let items = [1, 2, 3, 4, 5]
// let reverse = []
// for (let i = items.length - 1; i >= 0; i--) {
//     reverse.push(items[i])
// }
// console.log(reverse)














// Array.prototype.customFunc = function () {
//     let tekCemi = 0
//     let cutCemi = 0
//     if (this.length < 5) {
//         return `array-da minimum 5 element olsun`
//     }
//     else {
//         for (let i = 0; i < this.length; i++) {
//             if (this[i] % 2 == 0) {
//                 cutCemi += this[i]
//             }
//             else {
//                 tekCemi += this[i]
//             }

//         }
//         if (tekCemi > cutCemi) {
//             return tekCemi - cutCemi
//         }
//         else {
//             return cutCemi - tekCemi
//         }
//     }
// }
// let items = [1, 2, 3, 4, 5]
// console.log(items.customFunc())

// Array.prototype.namiq = function () {
//     let cem3 = 0
//     let diger = 0
//     if (this.length >= 5) {
//         for (let i = 0; i < this.length; i++) {
//             if (this[i] > 99 && this[i] < 1000) {
//                 cem3 += this[i]
//             }
//             else {
//                 diger += this[i]
//             }
//         }
//     }
//     else {
//         return `minimum 5 element olsun`
//     }
//     return cem3 - diger
// }
// let items = [99, 100, 98, 5, 125, 5465, 99, 99, 99, 99, 99]

// console.log(items.namiq())


// Array.prototype.ferec = function () {
//     let reverse = [] // 1
//     for (let i = this.length - 1; i >= 0; i--) {
//         reverse.push(this[i]) // n
//     }
//     return reverse // 1
// }
// let items = [1, 2, 3, 4, 5] // 1
// console.log(items.ferec())

// big o => n + 2 => 2

// function check(array1, array2) {
//     for (let i = 0; i < array1.length; i++) { // n
//         for (let j = 0; j < array2.length; j++) { // n
//             if (array1[i] == array2[j]) { // 1
//                 array1.splice(i, 1) // 1
//             }
//         }
//     }
//     return array1
// }
// big o =>
// kamran=>n**3+1
// emine=>2n**2+1
// ferid=>2n**2+1
// namiq=>n**2+n+1
// lamie=>n**3+1
// hikmet=n**3+1


// function salam(n) {
//     let a = 12; // 1
//     let b = 13; // 1
//     for (let i = 0; i < n; i++) {
//         if (n[i] == a) {
//             console.log("halaldi")
//         }
//     } //2n
//     for (let j = 0; j < n; j++) {
//         if (n[i] == b) {
//             console.log("halal deil")
//         }
//     }
//     return a //1
// }

//bulud=>2n+3=>namiq *4.5
// kamran=>4n+3=>lamie,aysel,emil,rufet,emil*1.2





















// let arr1 = []
// let arr2 = []
// let arr1Length = parseInt(prompt("array 1-in uzunlugunu daxil edin"))
// for (let i = 0; i < arr1Length; i++) {
//     let eded = parseInt(prompt("ededi daxil edin"))
//     arr1.push(eded)
// }
// let arr2Length = parseInt(prompt("array 1-in uzunlugunu daxil edin"))
// for (let i = 0; i < arr2Length; i++) {
//     let eded = parseInt(prompt("ededi daxil edin"))
//     arr2.push(eded)
// }
// function customToplama(array, list) {
//     let result = []
//     result = array.concat(list).sort(a, b => b - a)
//     return result
// }
// customToplama(arr1, arr2)


// sum(1)(2)(3)(4)=>24

// function sum(){
//     // 
// }



function sum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a * b * c * d
            }
        }
    }
}

console.log(sum(1)(2)(3)(4))