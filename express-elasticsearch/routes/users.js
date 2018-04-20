var express = require('express');
var router = express.Router();

var elasticsearch = require('../config/elasticsearch');

var dir = 'data/products.json';

var fs = require('fs');



/* GET users listing. */
// router.get('/', function(req, res, next) {

//   elasticsearch.get({
//     index: 'products',
//     type: 'mytype',
//     id: 1
//   }, function (error, response) {

//     res.send(response)

//   });




// });


router.get('/create', function (req, res, next) {


  fs.readFile(dir, 'utf-8', (err, succ) => {

    var result = JSON.parse(succ);
    
  });


});

router.get('/', function (req, res, next) {

  var readStream = fs.createReadStream(dir).pipe(res);


});



module.exports = router;
