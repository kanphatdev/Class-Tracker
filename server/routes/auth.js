const express = require("express");
const {
  getCurrentUser,
  logout,
  login,
  signup,
  editUser, // ✅ import editUser
} = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", getCurrentUser);
router.put("/edit", editUser); // ✅ add edit route

module.exports = router;
