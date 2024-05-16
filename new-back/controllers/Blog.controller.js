const { Blogs } = require("../models/Blog.model")

const BlogsController = {
    getAll: async (req, res) => {
        try {
            const items = await Blogs.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const item = await Blogs.findById(id)
            res.send(item)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const newBlog = new Blogs({ ...req.body })
            await newBlog.save()
            const items = await Blogs.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Blogs.findByIdAndDelete(id)
            const items = await Blogs.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            await Blogs.findByIdAndUpdate(id, { ...req.body })
            const items = await Blogs.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    }
}
module.exports = { BlogsController }