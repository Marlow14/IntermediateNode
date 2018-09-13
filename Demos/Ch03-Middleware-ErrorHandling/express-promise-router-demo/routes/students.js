'use strict';

const Promise = require("bluebird");
const moment = require("moment");

let students = [{
	nameFirst: "Devin",
	nameLast: "Durgan",
	email: "Devin.Durgan@gmail.com",
	hireDate: moment("01/19/2015", "MM/DD/YYYY")
}, {
	nameFirst: "Cristal",
	nameLast: "Adams",
	email: "Cristal.Adams@live.com",
	hireDate: moment("07/29/2016", "MM/DD/YYYY")
}, {
	nameFirst: "Nettie",
	nameLast: "McGlynn",
	email: "Nettie.McGlynn@gmail.com",
	hireDate: moment("08/29/2015", "MM/DD/YYYY")
}];


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
