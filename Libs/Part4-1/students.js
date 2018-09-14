'use strict';

const Promise = require("bluebird");

module.exports = function({db}) {
	let router = require("express-promise-router")();

	router.get("/students",  (req, res) => {
		return Promise.try(() => {
			return db("students");
		}).map((student) => { //process each student
			student.fullName = student.nameFirst + ' ' + student.nameLast;
			return student;
		}).then((students) => {
			res.render("students", {
				students: students
			});
		});
	});



	return router;
}
