const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const ProductController= require("../controllers/productController")
const OrderController= require("../controllers/orderController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.post("/createproduct", ProductController.createProduct)
router.post("/createUser",commonMW.mid1, UserController.createUser)
router.post("/createOrder",commonMW.mid2,OrderController.createOrder)   
router.post("/validation",UserController.validateuid)



module.exports = router;