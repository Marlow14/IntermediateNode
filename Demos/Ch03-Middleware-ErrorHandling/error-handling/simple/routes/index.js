var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var fs = require("fs");


/* GET home page. */
router.get('/', function (req, res, next) {
  let html = `<p>These links throw errors. </p>
   <ul>
   <li> <a href="/foobar">This is a link to /foobar which doesnt have a route</a></li>

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
  next(createError(503, "Service temporarily unavailable", { expose: false }));
});

router.get("/fileread", function (req, res, next) {
  fs.readFile("/file-does-not-exist", function (err, data) {
    if (err) {
      next(err); // Explicitly Pass errors to Express.
    }
    else {
      res.send(data);
    }
  });
});

router.get("/filewritebad", function (req, res, next) {
  fs.writeFile("/inaccessible-path", "data", next);
  //next gets called with or without the error
},
  function (req, res) { //this fires if next is called w no error
    res.send("OK");
  }
);

router.get("/filewritegood", function (req, res, next) {
  fs.writeFile("demo.text", "data", next);
  //next gets called with or without the error
},
  function (req, res) { //this fires if next is called w no error
    res.send("OK");
  }
);

module.exports = router;
