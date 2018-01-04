var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('Students will go in here');
 res.render('index', { title: 'Students' });
});

module.exports = router;