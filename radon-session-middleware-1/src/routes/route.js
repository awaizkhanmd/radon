const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")
const basicCode = require("../middlewares/commonMiddlewares")
const commonMiddlewares = require ("../middlewares/commonMiddlewares")
// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })




// router.post("/createBook", BookController.createBook  )




// // router.post("/createUser", UserController.createUser  )
// // router.get("/getUsersData", UserController.getUsersData)


// // const mid1= function ( req, res, next) {
// //     console.log("Hi I am a middleware named Mid1")
// //     // logic
// //     let loggedIn = false

// //     if (loggedIn== true) { 
// //         console.log( "OK LOGGED IS IS TRUE NOW")
// //         next ()
// //     }
// //     else {
// //         res.send ("Please login or register")
// //     }
// // }

// // // e.g. restricted and open-to-all API's can be handled like below now:
// // router.get('/homePage', mid1, UserController.feeds)
// // router.get('/profileDetails', mid1, UserController.profileDetails)
// // router.get('/friendList', mid1, UserController.friendList)
// // router.get('/changePassword', mid1, UserController.changePassword)

// // router.get('/termsAndConditions',  UserController.termsAndConditions)
// // router.get('/register',  UserController.register)





// router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)



// // router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// // router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// // router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)
// const mid1= function(req,res,next){
// console.log("hii ia am malware named midd 1")
// let loggedIn = true
// if (loggedIn==true){
//     next()
// }
// else{
//     res.send("please login or register")
// }
// }
// const mid2= function(req,res,next){
//     console.log( "hii i am mid 2 function")

//     next( )
 
// }



//router.get("/firstmiddleware", commonMiddlewares.timeStamp,commonMiddlewares.ipAdd,commonMiddlewares,UserController.basicCode)




//router.get("/basicRoute", commonMiddlewares.timeStamp,UserController.basicCode)
// 
//router.get("/basicRoute", commonMiddlewares.ipAdd,UserController.basicCode)
//router.get("/basicRoute", commonMiddlewares.path,UserController.basicCode)
router.get("/basicRoute", commonMiddlewares.timeStamp,commonMiddlewares.ipAdd,commonMiddlewares.path, UserController.basicCode)

module.exports = router;