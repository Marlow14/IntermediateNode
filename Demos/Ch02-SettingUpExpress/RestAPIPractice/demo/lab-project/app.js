var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(function(req, res, next){
//   res.locals.user = req.user;
//   res.locals.authenticated = ! req.user.anonymous;
//   next();
// });

app.get('/sendnull', function (req, res) {
  res.json(null);
});

app.get('/sendname', function (req, res) {
  res.json({ name: 'Cody' });
});

const myArray = [1,2,3,4];
app.get('/sendarray', function (req, res) {
  res.json(myArray);
});

const myPet = {name:'birdy', type:'cat'};
app.get('/sendpet', function (req, res) {
  res.json(myPet);
});

app.get('/senderror', function (req, res) {
  res.status(500).json({ error: 'message' });
});


app.get('/user/:id', function(req, res) {
  res.send('user ' + req.params.id);
});

app.get('/', function (req, res) {
  res.send('GET request to homepage');
});

app.get('/method', function(req, res) {
  res.send('user ' + req.method);
});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
