const expressPromiseRouter = require("express-promise-router");
const router = expressPromiseRouter();
const Promise = require("bluebird");
const moment = require('moment');

module.exports = function({db}) {
	let router = require("express-promise-router")();

	router.get("/",  (req, res) => {
		console.log('in the students GET route ' );
		return Promise.try(() => {
			return db("students");
		}).map((student) => { //process each student
			student.fullName = student.nameFirst + ' ' + student.nameLast;
			student.hireDate = moment(student.hireDate, "MM/DD/YYYY")
			return student;
		}).then((students) => {
			res.render("students", {
				students: students
			});
		}).catch(err => {
			console.log('Reaching this err block ' + err);
			console.log(err);
			res.render("students", {
				students: null
			});
	       });
	});
	
	return router;
}
