const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

router.post("/register", authController.signUp);
// router.post("/register", authController.register);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

router.get("/", userController.getAllUsers);
router.get("/infoUser/:id", userController.userInfo);
router.put("/updateUser/:id", userController.updateUser);
// router.delete("/:id", userController.deleteUser);

module.exports = router;
