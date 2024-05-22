const express = require("express");
const router = express.Router();
const {
  createUser,
  getAll,
  getUserById,
} = require("../controllers/user-controller.js");

router.post("/create", createUser);
router.get("/getAll", getAll);
router.get("/:id", getUserById);

module.exports = router;
