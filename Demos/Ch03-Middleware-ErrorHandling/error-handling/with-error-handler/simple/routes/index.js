var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('This is an index page');
});

router.use('/mtgox', function(req,res,next){
  console.log('Lets pretend this uses a service that is too busy and times out');
  let err = new Error('The service is unavailable');
  err.status = 503;
  next(err);
});

router.use('/bug', function(req,res,next){
console.log('Pretend there is a really bad bug here. No err info is set..');
//notice next() is not called
throw new Error('This is a bug/feature ');

});


module.exports = router;
