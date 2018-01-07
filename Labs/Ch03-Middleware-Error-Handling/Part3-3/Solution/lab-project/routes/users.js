module.exports = function() {
  let router = require("express-promise-router")();
/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
  res.render('users', { title: 'Users' });
});
return router;
}
