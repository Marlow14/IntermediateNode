var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.render('Students will go in here');
 res.render('students', { title: 'Students' });
});

module.exports = router;