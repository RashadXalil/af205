const mongoose = require("mongoose")


const Categories = mongoose.model("Categories", new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
}))

module.exports = { Categories }