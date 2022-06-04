const express = require('express');
//const externalModule1 = require('../logger/logger.js')
//const externalModule2 = require('../util/helper.js')
//const externalModule3 = require('../validator/formatter.js')

const lodash=require('lodash');


const router = express.Router();

// router.get('/test-me', function (req, res) {
// //externalModule1.welcome()
// //externalModule2.printDate()
// //externalModule2.printMonth()
// //externalModule2.getBatchInfo()
//     // externalModule3.trim()
//     // externalModule3.toLowerCase()
//     // externalModule3.toLowerCase()

//    res.send('My first ever api!')
// });

router.get('/test-me1', function (req, res) {
  console.log(lodash.tail([1,3,5,7,9,11,13,15,17]))
    res.send('My second ever api!')
});

// router.get('/test-me2', function (req, res) {
//     res.send('My third api!')
// });

router.get('/test-me3', function (req, res) {
    console.log(lodash.union([1,2],[2,3],[3,4],[5,6],[6,7]));
    res.send('My 4th api!')
});

 router.get('/test-me4', function (req, res) {
    let movies=[ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
     console.log(lodash.fromPairs(movies))

    res.send('My last api!')
 });

module.exports = router;
// adding this comment for no reason