const mongoose = require("mongoose")


const Blogs = mongoose.model("Blogs", new mongoose.Schema({
    image: {
        type: String,
        required: false,
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    isActive: {
        type: Boolean

    },
    view: {
        type: Number
    },
    author: {
        type: Object
    },
    comments: {
        type: Array
    },
    category: {
        type: String
    },
    like: {
        type: Number
    },
    isPopular: {
        type: Boolean
    }
}))

module.exports = { Blogs }