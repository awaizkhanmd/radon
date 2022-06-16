const jwt = require("jsonwebtoken")
const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
let token = req.headers["x-auth-token"]
if(!token){res.send({status:false,msg:"token must be present"})}
else{
    next()
}
}




//const jwt = require("jsonwebtoken")

const authorize = function(req, res, next)
 {
    let token = req.headers["x-Auth-token"];
    let decodedToken=jwt.verify(token, "functionup-radon")
    let modify= req.params.userId;
    let loggedUser = decodedToken.userId
    if(modify != loggesUser)

   {

      return res.send({ status: false, msg: "token is invalid" });
    }
    next()
}
module.exports.authenticate=authenticate
module.exports.authorize =authorize