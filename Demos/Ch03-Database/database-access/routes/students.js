var express = require('express');
var router = express.Router();
var moment = require('moment');


/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('Students will go in here');
    res.render('students', { 
     title: 'Students' ,
     students: ['Uma','Tucker','Seema','Saroj','Rathna','Ella','Paul']
        
    });
});

module.exports = router;

module.exports = function({db}) {
	const createStudentObject = require("../lib/create-student-object")({db});
	let router = require("express-promise-router")();

	router.get("/", requireLogin, (req, res) => {
		return Promise.try(() => {
			return db("students");
		}).map((student) => {
			return createStudentObject(student);
		}).then((students) => {
			res.render("index", {
				students: students
			});
		});
	});