const router = require("express").Router();
const AuthorController = require("../controllers/AuthorController")

// Fetch all authors data from database .
router.get("/api/authors",AuthorController.all)

// insert an author into database .
router.post("/api/author/new",AuthorController.create)

// update an author in database .
router.put("/api/author/:_id/update",AuthorController.update)

// find an author by id in database
router.get("/api/author/:_id",AuthorController.find)

// delete an author by id in database
router.delete("/api/author/:_id",AuthorController.delete)

module.exports = router;