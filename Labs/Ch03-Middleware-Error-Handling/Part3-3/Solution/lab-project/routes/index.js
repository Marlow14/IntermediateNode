'use strict';

module.exports = function() {
    let router = require("express-promise-router")();

    /* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('index', { title: 'Student Manager' });
    });

    return router;
}
