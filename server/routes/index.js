var express = require('express');
var router = express.Router();

//checking mongoose instance
var mongoose = require('mongoose');
var models = require("../models/entities")(mongoose);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET getMoviesList
*/
router.get('/getMoviesList', function(req, res, next) {

    
    models.Movies.find({}, function (err, movies) {
        if (err) throw new Erorr('boo :(')
        res.json(movies)
        
    })
});

router.get('/getBlogsList', function(req, res, next) {

    
    models.Blogs.find({}, function (err, movies) {
        if (err) throw new Erorr('boo :(')
        res.json(blogs)
        console.log(blogs);
    })
});

//create new model
//var post = models.Blogs 






module.exports = router;
