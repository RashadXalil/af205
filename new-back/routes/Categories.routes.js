const express = require("express")
const { CategoriesController } = require("../controllers/Category.controller")
const router = express.Router()

router.get("/", CategoriesController.getAll)
router.get("/:id", CategoriesController.getById)
router.post("/", CategoriesController.add)
router.delete("/:id", CategoriesController.delete)
router.put("/:id", CategoriesController.edit)

module.exports = router 