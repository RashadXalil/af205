const express = require("express")
const { BlogsController } = require("../controllers/Blog.controller")
const router = express.Router()

router.get("/", BlogsController.getAll)
router.get("/:id", BlogsController.getById)
router.post("/", BlogsController.add)
router.delete("/:id", BlogsController.delete)
router.put("/:id", BlogsController.edit)

module.exports = router 