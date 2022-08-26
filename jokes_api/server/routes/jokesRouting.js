const router = require("express").Router();
const JokesController = require("../controllers/jokesController");

// Note : Order is matter , params should be after normal paths

// Get all jokes from database
router.get("/api/jokes",JokesController.all)

// Select random joke from database
router.get("/api/jokes/random",JokesController.random)

// Insert a joke in database
router.post("/api/jokes/new",JokesController.create)

// Find a specific joke from database
router.get("/api/jokes/:_id",JokesController.find)

// Update an exact joke in database
router.put("/api/jokes/update/:_id",JokesController.update)

// Delete a joke from database
router.delete("/api/jokes/delete/:_id",JokesController.delete)

module.exports = router;



