'use strict';

const Promise = require("bluebird");
// const scryptForHumans = require("scrypt-for-humans");
// const databaseError = require("database-error");
const errors = require("../custom-errors");


	let router = require("express-promise-router")();

	router.get("/", (req, res) => {
		console.log('In users ');
		res.render("users");
	});

	module.exports =  router;

