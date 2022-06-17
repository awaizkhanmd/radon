// const jwt = require("jsonwebtoken")
// const authenticate = function(req, req, next) {
//     //check the token in request header
//     //validate this token
// let token = req.headers["x-auth-token"]
// if(!token){res.send({status:false,msg:"token must be present"})}
// else{
//     next()
// }
// }




// //const jwt = require("jsonwebtoken")

// const authorize = function(req, res, next)
//  {
//     let token = req.headers["x-Auth-token"];
//     let decodedToken=jwt.verify(token, "functionup-radon")
//     let modify= req.params.userId;
//     let loggedUser = decodedToken.userId
//     if(modify != loggesUser)

//    {

//       return res.send({ status: false, msg: "token is invalid" });
//     }
//     next()
// }
// module.exports.authenticate=authenticate
// module.exports.authorize =authorize

// req
//  const authorise = function(req, res, next)  {
//    let token = req.headers["x-auth-token"];
   
//    if (modify !=loggedUser){
//        return res.send({status:false,msg:"modify needs to be the loggged user"})
//    }
//     next()
// }




// const validateToken = function(req, res, next) {
//     let token = req.headers["x-Auth-token"];
//     if (!token) token = req.headers["x-auth-token"];
  
//     //If no token is present in the request header return error
//     if (!token) return res.send({ status: false, msg: "token must be present" });
  
//     console.log(token);
    
//     // If a token is present then decode the token with verify function
//     // verify takes two inputs:
//     // Input 1 is the token to be decoded
//     // Input 2 is the same secret with which the token was generated
//     // Check the value of the decoded token yourself
//     let decodedToken = jwt.verify(token, "functionup-thorium");
//     if (!decodedToken) {
//       return res.send({ status: false, msg: "token is invalid" });
//     }
//     next()
// }

////---------------------------------------------//////
const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
    try{
 let token = req.headers["x-auth-token"]
 if (!token) {res.status(401).send({status: false ,msg: "Token must be present"})}
 else{
    next()
  }
 }
 catch(err){
  res.status(500).send({status: false , error: err.msg})}
 }
  

  

 const jwt = require("jsonwebtoken")
  
 const authorize = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    try{
 let token = req.headers["x-auth-token"];
 let decodedToken=jwt.verify(token ,"functionup-radon")
 let modify=req.params.userId;
 let loggedUser = decodedToken.userId
 if(modify != loggedUser){
    return res.status(403).send({status: false , msg: "modifed user must be logged in"})
 }
    next()
 }
 catch(err){
    res.status(500).send({status: false , error: err.msg})}
  }
  
 module.exports.authorize = authorize
 //module.exports.authenticate = authenticate


// const res = require("express/lib/response");
// const jwt = require("jsonwebtoken");
// const userModel = require("../models/userModel.js")


// const authenticate = async function(req, req, next) {
//     let token = req.headers["x-Auth-token"] || req.headers["x-auth-token"];

//     if (!token) //{res.send({status:false,msg:"tokem must required"})}
//     return res 
//     .status(500)
//     .send({status:false,msg:"token has to there "});
//   try{
//     let decodedToken=jwt.verify(token,"function-radon")
//     let userId=req.params.userId;
//     let LoggedUser= decodedToken.userId

//   let user= await userModel.findById(userId);
//   if (!user){
//       return res
//       .status(404)
//       .send({status:false,msg:" user not  exits in database "});
  
//     }
//     if (Loggeduser !=userId )
//     return res.status(403).send({msg:"you cannot  this perform operation"});
//     req.user=user;
// }catch (err){
//     return res.status(401).send({status:false,msg:"token is not valid"})
// }
// next();
// }

module.exports.authenticate=authenticate
//module.exports.authorise =authorise 