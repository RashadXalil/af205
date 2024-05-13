const box = document.querySelector(".box")
// setTimeout(() => {
//     box.classList.add("bigger")
//     setTimeout(() => {
//         box.classList.add("rounded")
//         setTimeout(() => {
//             box.classList.add("colored")
//             setTimeout(() => {
//                 box.classList.add("move")
//                 setTimeout(() => {
//                     box.classList.remove("move")
//                     setTimeout(() => {
//                         box.classList.remove("colored")
//                         setTimeout(() => {
//                             box.classList.remove("rounded")
//                             setTimeout(() => {
//                                 box.classList.remove("bigger")
//                                 console.log("animasiya bitdi")
//                             }, 1000);
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);
// let counter = 10

// let newPromise = new Promise((resolve, reject) => {
//     if (counter % 2 == 0) {
//         resolve("ok")
//     }
//     else {
//         reject("error")
//     }
// })
// newPromise.then(data => console.log(data)).catch(error => console.log(error))


const list = document.getElementById("list")
let loading = true
list.innerHTML = `
<div div class="spinner-border" role = "status" >
  </div >
`
fetch("https://dummyjson.com/products").then(data => data.json()).then(res => {
    let products = res.products
    loading = false
    let innerHTML = ""
    for (let i = 0; i < products.length; i++) {
        const element = products[i]
        innerHTML += `
    <div div class="col-3 mt-5 mb-5" >
        <div class="card" style="width: 18rem">
            <img class="card-img-top" height="300px" src="${element.thumbnail}" alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">
                    ${element.description}
                </p>
                <button onclick="deleteHandler(${element.id})">delete</button>
                <a href="./detail.html?id=${element.id}">detail</a>
            </div>
        </div>
      </div > `
    }
    if (loading) {
        list.innerHTML = `
    <div div class="spinner-border" role = "status" >
        <span class="sr-only">Loading...</span>
      </div >
    `
    }
    else {
        list.innerHTML = innerHTML
    }
}).catch(error => console.log(error))

const deleteHandler = (id) => {
    fetch(`https://dummyjson.com/products/${id}`, {
        method: "DELETE"
    }).then(res => console.log(res))
}


// async function getData() {
//     let result = await fetch("http://localhost:3000/comments")
//     let data = await result.json()
//     return {
//         status: 200,
//         data: data
//     }
// }

// getData().then(data => console.log(data)).catch(error => console.log(error))