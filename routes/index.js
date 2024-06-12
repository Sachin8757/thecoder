var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('navbar',(err,first)=>{
    res.render('index',(err,second)=>{
      const indexpage= first+second;
      res.send(indexpage);
    })
  })
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/about', function(req, res, next) {
  res.send('this page is under creating')
});

router.get('/contact', function(req, res, next) {
  res.render('navbar',(err,first)=>{
    res.render('contact',(err,second)=>{
      const indexpage= first+second;
      res.send(indexpage);
    })
  })
});

router.get('/code', function(req, res, next) {
  res.render('navbar',(err,first)=>{
    res.render('code',(err,second)=>{
      const indexpage= first+second;
      res.send(indexpage);
    })
  })
});

router.get('/ccode', function(req, res, next) {
  res.render('navbar',(err,first)=>{
    res.render('c',(err,second)=>{
      const indexpage= first+second;
      res.send(indexpage);
    })
  })
});

router.get('/cnotes', function(req, res, next) {

  res.render('javanotes')
});

router.get('/cppcode', function(req, res, next) {
  res.render('navbar',(err,first)=>{
    res.render('c++',(err,second)=>{
      const indexpage= first+second;
      res.send(indexpage);
    })
  })
});

router.get('/cppnotes', function(req, res, next) {
  res.render('javanotes')
});

router.get('/javacode', function(req, res, next) {
  res.render('navbar',(err,first)=>{
    res.render('java',(err,second)=>{
      const indexpage= first+second;
      res.send(indexpage);
    })
  })
});

router.get('/javanotes', function(req, res, next) {
  res.render('javanotes')
});

router.get('/resume', function(req, res, next) {
  res.render('pdf');
});

router.get('/project', function(req, res, next) {
  res.render('navbar',(err,first)=>{
    res.render('project',(err,second)=>{
      const indexpage= first+second;
      res.send(indexpage);
    })
  })
});

module.exports = router;
