var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/student', function(req, res) {
  var student1 ={
    "name":"Tuan Minh",
    "dob":"05/09/2000",
    "gender":"male",
    "mobile":"0999999999",
    "email": "tuanminh@fpt.edu.vn"
  }
  var student2 ={
    "name":"Thanh Hung",
    "dob":"05/09/2000",
    "gender":"male",
    "mobile":"09999934539",
    "email": "tuanminh@fpt.edu.vn"
  }
  var student3 ={
    "name":"Quang Hai",
    "dob":"05/09/2000",
    "gender":"male",
    "mobile":"245345345",
    "email": "tuanminh@fpt.edu.vn"
  }
  var students = [student1, student2, student3]
  res.render('student', {students: students});
});

module.exports = router;
