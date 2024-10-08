const express = require("express");
const router = express.Router();
const authController = require("../Controllers/AuthController");


router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logOut);


// router.get('/getAdminProfile', authController.getAdminProfile);
// router.get('/users', authController.getAllUsers);
// router.put('/users/:id/avatar', authController.setAvatar);

module.exports = router;
