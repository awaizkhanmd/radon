const UserModel= require("../models/userModel")




// const basicCode= async function(req, res,next) {
//     let data = req.body
//     res.send({msg:"this is the time"})
//     next()
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)
// }


    // console.log( "HEADER DATA ABOVE")
    // console.log( "hey man, congrats you have reached the Handler")
    // res.send({ msg: "This is coming from controller (handler)"})
    // }
// const basicCode= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
//}
const basicCode=async function(req,res,next){
    console.log()
    res.send({msg:"this msg is comming from controller (handlers)"}
    )}

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
module.exports.basicCode=basicCode