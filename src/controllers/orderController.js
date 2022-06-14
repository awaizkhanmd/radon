const { count } = require("console")
const orderModel= require("../models/orderModel")
const UserController= require("../controllers/userController")
const ProductController= require("../controllers/productController")

const createOrder= async function (req, res) {
    let data = req.body
    let savedData= await orderModel.create(data)
    res.send({data: savedData})
}



module.exports.createOrder= createOrder