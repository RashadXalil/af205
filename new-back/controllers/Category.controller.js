const { Categories } = require("../models/Blog.model")

const CategoriesController = {
    getAll: async (req, res) => {
        try {
            const items = await Categories.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const item = await Categories.findById(id)
            res.send(item)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const newBlog = new Categories({ ...req.body })
            await newBlog.save()
            const items = await Categories.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Categories.findByIdAndDelete(id)
            const items = await Categories.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            await Categories.findByIdAndUpdate(id, { ...req.body })
            const items = await Categories.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    }
}
module.exports = { CategoriesController }