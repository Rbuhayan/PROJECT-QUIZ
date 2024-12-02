var express = require('express');
var router = express.Router();

const categories = [

  { id: 11, name: 'Entertainment: Film' },

];

const difficulties =[
  {id: 'easy', name: 'Easy'},
  {id: 'medium', name: 'Medium'},
  {id: 'hard', name: 'Hard'},
];

const types =[
  {id: 'multiple', name: 'Multiple Choices'},

]


router.get('/', function(req, res, next) {
  res.render('indexs', { title: 'Express',categories, difficulty: difficulties, types});
});

module.exports = router;