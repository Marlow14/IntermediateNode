
'use strict';

module.exports = function({db}) {
  let router = require("express-promise-router")();

	router.get("/",  (req, res) => {
			res.render("index");
	});
	


	return router;
}
