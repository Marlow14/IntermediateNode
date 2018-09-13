var express = require('express');
var router = express.Router();
var createError = require('http-errors');


/* GET home page. */
router.get('/', function (req, res, next) {
  let html = `<p>These links throw errors. </p>
   <ul>
   <li> <a href="/foobar">This is a link to /foobar which doesnt have a route</a></li>
   <li><a href="/throwserror">This /throwserror has bad code that throws an error, never calls next()</li>
   <li> <a href="/mtgox"> This link is /mtgox and it passes a 503 error into next()</a><br /></li>
</ul>

  `;
  res.send(html);
});

router.use('/throwserror', function (req, res, next) {
  console.log(`the following function doesnt exist`);

  notAFunction();

  next();
});

router.use('/mtgox', function (req, res, next) {
  console.log(`Let's pretend another webservice is too busy and times out`);

  //call 3rd party service, times out - so we throw error with 503
  next(createError(503));
});

module.exports = router;
