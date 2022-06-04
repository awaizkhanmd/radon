let objDate = new Date()
const printDate = function printDate(){
    console.log(objDate.getDate())
}
module.exports.printDate=printDate

let printMonth = function printMonth() {
    console.log(objDate.getMonth()+1);

}
module.exports.printMonth=printMonth

let getBatchInfo = function getBatchInfo(){
    console.log("Radon W3D4 nodejs module")
}
module.exports.getBatchInfo=g9