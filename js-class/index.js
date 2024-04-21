// let eded = parseInt(prompt("ededi daxil edin"))

// if (eded == 1) {
//     console.log(true)
// }
// else {
//     while (eded % 3 == 0) {
//         eded /= 3
//     }
//     if (eded == 1) {
//         console.log(true)
//     }
//     else {
//         console.log(false)
//     }
// }

// let reverse = 0;
// let originalData2 = eded;
// let originalData = eded
// let mertebe = 0
// let isPolindrome = true;

// for (mertebe; mertebe > 0; mertebe--) {
//     let qaliq = eded % 10
//     eded = (eded - qaliq) / 10
// }
// for (mertebe; mertebe >= 0; mertebe--) {
//     let qaliq = eded % 10
//     eded = (eded - qaliq) / 10
//     reverse = reverse + qaliq * 10 ** (mertebe - 1)
// }

// console.log(originalData2, reverse)
// if (originalData2 == reverse) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }
// 396=> 6*
// let string = prompt("ededi daxil edin")
// let mertebe = string.length;
// let eded = parseInt(string)
// let cloneEded = eded
// let reverse = 0;
// // 232
// // 1551 =>
// for (let i = 0; 0 <= mertebe; i++) {
//     mertebe-- // 2=>1
//     let qaliq = eded % 10 // =>2 =>3
//     reverse += qaliq * (10 ** (mertebe)) // 200=>230
//     eded -= qaliq // 230=>
//     eded /= 10 // 23=>2
// }
// if(cloneEded == reverse){
//     console.log(true)
// }
// else{
//     console.log(false)
// }
// const myArr = [[1, 2], [3, 4], [5, 6]];

// let items = [1, 2, 3, 4, 5]


// items[1] == items.at(1)


// let newItems = items.slice(1,,"new item")


// console.log(newItems)


// let items = [1, 2, 3, 5, 3, 6, 7, 8, 1, 5]
// let cloneItem = []
// for (let i = 0; i < items.length; i++) {
//     for (let j = i + 1; j < items.length; j++) {
//         if (items[i] == items[j]) {
//             cloneItem.push(items[i])
//         }
//     }
// }
// console.log(cloneItem)
// let items = []

// let eded = parseInt(prompt("ededi daxil edin"))
// items.push(eded)
// console.log(items)

//
// let items = [1, 2, 3, 4, 5, 11, 17, 29, 44, 12]

// let teklerinCemi = 0
// let cutlerinCemi = 0

// for (let i = 0; i < items.length; i++) {
//     if (items[i] % 2 == 0) {
//         cutlerinCemi += items[i]
//     }
//     else {
//         teklerinCemi += items[i]
//     }
// }
// // teklerin = 30 cutlerin = 35
// if (teklerinCemi > cutlerinCemi) {
//     console.log(teklerinCemi - cutlerinCemi)
// }
// else if (teklerinCemi == cutlerinCemi) {
//     console.log(0)
// }
// else {
//     console.log(cutlerinCemi - teklerinCemi)
// }
// let length = parseInt(prompt("arrayin size-ini daxil edin"))
// let items = []

// for (let i = 0; i < length; i++) {
//     let item = prompt(`${i + 1}-ci ededi daxil edin`)
//     items.push(item)
// }
// console.log(items)

// items => [1,2,3,4]
let items = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let counter = 0
let target = parseInt(prompt("axtardiginiz ededi daxil edin"))

for (let i = 0; i < items.length; i++) {
    if (items[i] == target) {
        items.splice(i, 1)
        console.log("item silindi")
        console.log(items)
        counter++
    }
}
if (counter == 0) {
    console.log("axtardiginiz item arrayda yoxdur")
}
