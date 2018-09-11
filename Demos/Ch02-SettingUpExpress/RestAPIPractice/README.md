# Chapter 2 Exercise 6: Create a Rest API

## Objectives:


## Steps

1. Create a folder `WIP\Ch02\Rest`

1. Use the express app generator to create a project called rest-api

1. Add moment package to your project

1. Define a student array:

	``` javascript
	let students = [{
		id: 1,
		nameFirst: "Devin",
		nameLast: "Durgan",
		email: "Devin.Durgan@gmail.com",
		hireDate: moment("01/19/2015", "MM/DD/YYYY")
	}, {
		id: 2,
		nameFirst: "Cristal",
		nameLast: "Adams",
		email: "Cristal.Adams@live.com",
		hireDate: moment("07/29/2016", "MM/DD/YYYY")
	}, {
		id: 3,
		nameFirst: "Nettie",
		nameLast: "McGlynn",
		email: "Nettie.McGlynn@gmail.com",
		hireDate: moment("08/29/2015", "MM/DD/YYYY")
	}];
	```

1. Create Get, Post, and Delete for /students

	* for each one take the appropriate action return the array, add to it (push) 

1. Test using Postman


