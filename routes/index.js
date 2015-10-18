var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Comment=mongoose.model('Comment');

/* GET home page. */
router.get('/', function(req, res, next) {
	Comment.find(function(err,comments,count){
  		res.render('index', {
  		 title: 'Comments with Mongoose',
  		 comments:comments 
		});
  	});
});
/* POST comments on home page. */
router.post('/create',function(req,res){
	new Comment({
		username : req.body.username,
		content : req.body.content,
		created : Date.now()
	}).save(function(err,comment,count){
		console.log(comment);
		res.redirect('/');
	});
});


module.exports = router;
