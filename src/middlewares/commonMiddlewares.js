
// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }
const mid1= function ( req, res, next) {
    const data = req.headers.isfreeappuser
    if(!data){
        res.send({msg:"Missing a mondatory header"})
    }
    else{
        next()
    }

}
const mid2= function ( req, res, next) {
    const data = req.headers.isfreeappuser
    if(!data){
        res.send({msg:"Missing a mondatory header"})
    }
    else{
        next()
    }
}
module.exports.mid1= mid1
module.exports.mid2=mid2
   