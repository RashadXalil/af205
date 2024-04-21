let games;
const addGameBtn = document.getElementById("add-game")
const cards = document.getElementById("cards")
const total = document.getElementById("total")
const basketItemsList = document.getElementById("basketItemsList")
let basketItems;
let totalPrice = 0;
if (localStorage.getItem("basketItems")) {
    basketItems = JSON.parse(localStorage.getItem("basketItems"))
    for (let i = 0; i < basketItems.length; i++) {
        totalPrice += parseInt(basketItems[i].price)
    }
    total.innerHTML = `totalPrice: ${totalPrice} $`
} else {
    basketItems = []
    localStorage.setItem("basketItems", JSON.stringify(basketItems))
}
if (localStorage.getItem("games")) {
    games = JSON.parse(localStorage.getItem("games"))
} else {
    games = []
    localStorage.setItem("games", JSON.stringify(games))
}
class Game {
    constructor(name, image, price, rating, genree, company) {
        this.id = games.length > 0 ? games.length - 1 : 0
        this.name = name
        this.image = image
        this.price = price
        this.rating = rating
        this.genree = genree
        this.company = company
    }
}
addGameBtn.addEventListener("click", (e) => {
    const { nameVal, imageVal, priceVal, ratingVal, genreeVal, companyVal } = getDataFromUser()
    addGame(nameVal, imageVal, priceVal, ratingVal, genreeVal, companyVal)
    renderUI(games)
})
function getDataFromUser() {
    const nameVal = prompt("name")
    const imageVal = prompt("image")
    const priceVal = prompt("price")
    const ratingVal = prompt("rating")
    const genreeVal = prompt("genree")
    const companyVal = prompt("company")
    return { nameVal, imageVal, priceVal, ratingVal, genreeVal, companyVal }
}

function addGame(name, image, price, rating, genree, company) {
    const newGame = new Game(name, image, price, rating, genree, company)
    games.push(newGame)
    localStorage.setItem("games", JSON.stringify(games))
    renderUI(games)
}
function deleteGame() { }
function addToBasket(id) {
    const target = games.find(game => game.id == id)
    basketItems.push(target)
    localStorage.setItem("basketItems", JSON.stringify(basketItems))
    totalPrice += parseInt(target.price)
    total.innerHTML = `Total :${totalPrice} $`
    renderBasket(basketItems)
}
function removeFromBasket(id) {
    const target = basketItems.find((item) => item.id == id)
    const indexOfTarget = basketItems.indexOf(target)
    basketItems.splice(indexOfTarget, 1)
    localStorage.setItem("basketItems", JSON.stringify(basketItems))
    totalPrice -= parseInt(target.price)
    total.innerHTML = `Total :${totalPrice} $`
    renderBasket(basketItems)
}
function renderUI(list) {
    let innerHTML = ""
    for (let i = 0; i < list.length; i++) {
        innerHTML += `
        <div class="col-3 mb-5">
          <div class="card mt-5" style="width: 18rem;">
            <img
              class="card-img-top"
              height="400px"
              src="${list[i].image}"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">${list[i].name}</h5>
               <p class="card-text">
                ${list[i].company}
              </p>
              <div class="mt-2 mb-2">
                <i class="fa-solid fa-star star"></i>
                <i class="fa-solid fa-star star"></i>
                <i class="fa-solid fa-star star"></i>
                <i class="fa-solid fa-star star"></i>
                <i class="fa-solid fa-star star"></i>
              </div>
              <h3>${list[i].price}$</h3>
              <button class="btn btn-warning" onclick="addToBasket(${list[i].id})">Add to Basket</button>
            </div>
          </div>
        </div>
        `

    }
    cards.innerHTML = innerHTML
}
renderUI(games)
renderBasket(basketItems)
function renderBasket(basketItems) {
    let innerHTML = ""
    for (let i = 0; i < basketItems.length; i++) {
        innerHTML += `
        <tr>
        <td>
          <img
            width="50px"
            height="50px"
            src="${basketItems[i].image}"
            alt=""
          />
        </td>
        <td>${basketItems[i].name.slice(0, 7)}...</td>
        <td>${basketItems[i].price}$</td>
        <td><button class="btn btn-danger" onclick="removeFromBasket(${basketItems[i].id})">Delete</button></td>
      </tr>
        `
    }
    basketItemsList.innerHTML = innerHTML
}