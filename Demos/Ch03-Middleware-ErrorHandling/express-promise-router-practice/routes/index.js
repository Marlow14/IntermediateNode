
'use strict';

module.exports = function({db}) {
  let router = require("express-promise-router")();

	router.get("/", (req, res, next) => {
		req.message += 'Adding a message';
		next();
	});

	router.get("/", (req, res) => {
		res.render("index", {
			students: students
		});
	});
	

	return router;
}
