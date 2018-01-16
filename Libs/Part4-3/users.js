var express = require('express');
const expressPromiseRouter = require("express-promise-router");
const router = expressPromiseRouter(); 

var Model = require('./../models/User');

/* Save a user */
var saveUser = function (req, res) { 
	new Model.User({
		username: req.body.username,
		email: req.body.email,
		name: req.body.name,
		age: req.body.age,
		location: req.body.location
	}).save()
		.then(function (user) {
			res.json(user);
		}).catch(function (error) {
			res.json(error);
		});
};

/* Get all users */
var getAllUsers = function (req, res) {
	new Model.User().fetchAll()
		.then(function (users) {
			res.json(users);
		}).catch(function (error) {
			res.json(error);
		});
};

/* Delete a user */
var deleteUser = function (req, res) {
	var userId = req.params.id;
	new Model.User().where('id', userId)
		.destroy()
		.catch(function (error) {
			res.json(error);
		});
};

/* Get a user */
var getUser = function (req, res) {
	var userId = req.params.id;
	new Model.User().where('id', userId)
		.fetch()
		.then(function (user) {
			res.json(user);
		}).catch(function (error) {
			res.json(error);
		});
};

/* User Routes */
router.post('/', saveUser);
router.get('/', getAllUsers);
router.delete('/:id', deleteUser);
router.get('/:id', getUser);


/* Exports all methods */
module.exports = router
