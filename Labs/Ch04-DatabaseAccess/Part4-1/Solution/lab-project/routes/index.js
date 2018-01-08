
'use strict';

const Promise = require("bluebird");

module.exports = function({db}) {
  let router = require("express-promise-router")();

  //const createStudentObject = require("../lib/create-student-object")({db});

	router.get("/",  (req, res) => {
			res.render("index");
	});
	


	return router;
}
