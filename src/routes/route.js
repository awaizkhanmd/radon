const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authenticate  = require("../middlewares/auth")
const authorise  = require("../middlewares/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

// The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)
// router.post("/users/:userId/posts", userController.postMessage)

//router.put("/users/:userId", userController.updateUser)
// router.delete('/users/:userId', userController.deleteUser)

router.get("/users/:userId", authenticate.authenticate,authorise.authenticate, userController.getUserData)
 router.put("/users/:userId", authenticate.authenticate,authorise.authenticate, userController.updateUser)
router.delete("/users/:userId", authenticate.authenticate,authorise.authenticate,userController.deleteUser)

module.exports = router;