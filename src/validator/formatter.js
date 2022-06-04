let a=  'Functionup'
let result = a.trim();
let trim = function trim(){
    console.log(result)
}
module.exports.trim=trim

let  result1 = a.toLowerCase();
let toLowerCase = function toLowerCase(){
 console.log(result1)
}
module.exports.toLowerCase=toLowerCase

let result2 = a.toUpperCase();
let toUpperCase = function toUpperCase(){
  console.log(result2)
}
module.exports.toUpperCase=toUpperCase 