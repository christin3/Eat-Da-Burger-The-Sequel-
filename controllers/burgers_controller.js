var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//get and posts

router.get('/', function (req, res) {

    burger.selectAll(function (data) {
        var hbsObject = {burger: data};
        res.render('index', hbsObject);
    });
});

// router.get('/burger', function (req, res) {
//     burger.selectAll(function (data) {
//         var hbsObject = { burger: data };
//         console.log(hbsObject);
//         res.render('index', hbsObject);
//     });
// });



router.post('/burger/create', function(req, res){
    burger.insertOne(req.body.burger, function(){
        res.redirect('/');

    });
});

router.put('/burger/update/:id', function (req, res) {
    var condition =req.params.id;
    burger.updateOne(condition, function () {
        res.redirect('/');
    });

});




//export the `router`
module.exports = router;