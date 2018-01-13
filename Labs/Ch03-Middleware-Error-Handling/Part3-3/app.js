var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var moment = require('moment');

var index = require('./routes/index');
var users = require('./routes/users');
var students = require('./routes/students');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const unhandledError = require("unhandled-error");

let errorReporter = unhandledError((err) => {
	/* This should eventually be hooked into some sort of error reporting
	   mechanism. SMS text nessaging....etc. bug */
	console.error("UNHANDLED ERROR:", err.stack);
});

/* The 'state' object is an object that we pass to everything that needs some
   sort of stateful dependency; all of the stateful dependencies are initialized
   here in server.js, and then passed into the modules that need them using a
   wrapper function. The wrapper function can unpack the stateful dependencies
   that it needs, eg. using object destructuring. */
   let state = {
     errorReporter: errorReporter
   }


app.use(function (req, res, next) {
  console.log(`Time: ${moment().format('MMMM Do YYYY, h:mm:ss a')}  `);
  next();
});

app.use('/', index);
app.use('/users', users);
app.use('/students', students);

app.use('/mtgox', function(req,res,next){
      console.log('Lets pretend this uses a service that is too busy and times out');
      let err = new Error('The service is unavailable');
      err.status = 503;
      next(err);
});

app.use('/bug', function(req,res,next){
  console.log('Pretend there is a really bad bug here. No err info is set..');
  //notice next() is not called
  throw new Error('This is a bug/feature ');
  
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Oh no! the page cannot be found');
  err.status = 404;
  req.timestamp = new Date();
  next(err);
});

app.use(require("./middleware/error-handler")(state));

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   res.locals.timestamp = req.timestamp
//   console.log(`Error occured at: ${req.timestamp}`);
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
