'use strict';

const Promise = require("bluebird");
// const scryptForHumans = require("scrypt-for-humans");
// const databaseError = require("database-error");
const errors = require("../custom-errors");

// let duplicateUsername = {
// 	name: "UniqueConstraintViolationError",
// 	table: "accounts",
// 	column: "username"
// }

	let router = require("express-promise-router")();

  router.get('/', function(req, res) {
    res.render('index', { title: 'Student Manager' });
  });
  
	router.get("/login", (req, res) => {
		console.log('In login ');
		res.render("admin/login");
	});

	router.post("/login", (req, res) => {
		return Promise.try(() => {
		
		}).then((user) => {
    
    }
		).catch( (err) => {
			throw new errors.AuthenticationError("Incorrect password");
		});
	});

	module.exports =  router;

