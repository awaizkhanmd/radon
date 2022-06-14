const orderModel = require("../models/orderModel")
const UserModel= require("../models/userModel")
const productModel=require("../models/productModel")
const createUser= async function (req, res) {
    
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const validateuid = async function(req,res) {
    let id = req.body.userId
    let pid = req.body.productId
    
    let savedData = await UserModel.findOne({_id:id})
    if(!savedData){
        res.send({msg:"User ID not found"})
        return;
    }
    let savedData2 = await productModel.findOne({_id:pid})
    if(!savedData2){
        res.send({msg:"product ID not found"})
        return;
    }
    else{
        let savedData = await orderModel.create(req.body)
        res.send({msg:savedData})
    }
}







module.exports.createUser= createUser
module.exports.validateuid=validateuid  
