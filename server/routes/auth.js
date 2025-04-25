const express = require("express");
const { getCurrentUser, logout, login, signup } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", getCurrentUser);

module.exports = router;
