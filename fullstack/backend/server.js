const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
require("dotenv").config()
const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})
const Products = mongoose.model("Product", productSchema)
//get all products
app.get("/api/products", async (req, res) => {
    const response = await Products.find()
    res.send(response)
})
//get product by id
app.get("/api/products/:id", async (req, res) => {
    const { id } = req.params
    const target = await Products.findById(id)
    res.send(target)
})
//delete product
app.delete("/api/products/:id", async (req, res) => {
    const { id } = req.params
    await Products.findByIdAndDelete(id)
    const items = await Products.find()
    res.send(items)
})
//add new product
app.post("/api/products", async (req, res) => {
    const { title, price, image } = req.body
    const newProd = new Products({ title: title, price: price, image: image })
    await newProd.save()
    res.status(201).send("item created")
})
//edit product
app.put("/api/products/:id", async (req, res) => {
    const { id } = req.params
    const { title, price, image } = req.body
    await Products.findByIdAndUpdate(id, { ...req.body })
    const items = await Products.find()
    res.send(items)
})
mongoose.connect(process.env.CONNECTION_STRING).then(res => {
    console.log("db connected")
})
app.listen(process.env.PORT, (req, res) => {
    console.log("api running on 8080")
})