var createError = require('http-errors');
var express = require('express');
var path = require('path');

/* require the new e-p-r */
const expressPromiseRouter = require("express-promise-router");

//var logger = require('morgan');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/* The rest of the routers and middlewares are wrapped into an express-promise-router to make sure that error handling is consistent throughout the application. */
let router = expressPromiseRouter();

/* So instead of app... */

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(express.static(path.join(__dirname, 'public')));

router.use('/', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
router.use(function(req, res, next) {
  next(createError(404));
});

// error handler
router.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/* indicate to use router */
app.use(router);


module.exports = app;
