const express = require("express")

const app = express()
app.use(express.json())
const products = [{
    id: 1,
    title: "iphone x",
    price: 20
},
{
    id: 2,
    title: "iphone x",
    price: 20
},
{
    id: 3,
    title: "iphone x",
    price: 20
},
{
    id: 4,
    title: "iphone x",
    price: 20
},
{
    id: 5,
    title: "iphone x",
    price: 20
}]


app.get("/products", (req, res) => {
    res.send(products)

})
app.put("/products/:id", (req, res) => {
    const { id } = req.params
    let target = products.find(item => item.id == id)

    target = { ...target, ...req.body }

    res.status(203).send(target)

})
app.post("/products", (req, res) => {
    products.push({ ...req.body })
    res.status(201).send("item create olundu")
})
app.delete("/products/:id", (req, res) => {
    const { id } = req.params
    const target = products.find(item => item.id == id)
    const indexOfTarget = products.indexOf(target)
    products.splice(indexOfTarget, 1)
    res.send("item delete olundu")
})
app.get("/products/:id", (req, res) => {
    const { id } = req.params
    const target = products.find(item => item.id == id)
    res.send(target)
})
app.listen(8080, () => {
    console.log("server run olundu")
})