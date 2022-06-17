const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authenticate  = require("../middlewares/auth")
const authorise  = require("../middlewares/auth")
router.post("/users", userController.createUser)
 
router.post("/login", userController.loginUser)
 
//The userId is sent by front end
router.get("/users/:userId",authenticate.authenticate,authorise.authorize , userController.getUserData)
router.post("/users/:userId/posts",authenticate.authenticate,authorise.authorize , userController.postMessage)
 
router.put("/users/:userId",authenticate.authenticate, authorise.authorize, userController.updateUser)
router.delete('/users/:userId',authenticate.authenticate, authorise.authorize ,userController.deleteUser)
 
module.exports = router;