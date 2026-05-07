const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Route: /api/users
router.route("/")
    .post(userController.createUser)
    .get(userController.getAllUsers);

// Route: /api/users/:id
router.route("/:id")
    .get(userController.getUserById)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;