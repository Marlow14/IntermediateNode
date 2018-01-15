# Chapter 4 Exercise 1: Database Access

## Objectives:
* Use script to populate Student table with records
* Connect to the database to get student records to display

## Steps 

1. Navigate to your `MyPractice/lab-project` folder.

1. If you successfully completed the last exercise, continue with your project. Otherwise rename your lab-project (and ask intructor or others for help later) and copy the `Solution/lab-project` from the last exercise to continue.

1. We will be connecting to the postgres database. Think about what dependencies we can use to build queries against the postgres database. Scroll down to verify and add the needed dependencies.
	```













	```

1. Install:  pg and knex and add to package.json. You can do this in one step from the command line 
`npm install -S pg knex `

1. Instead of hard-coding values to the database, it is better to add a `config.json` file to the project. Add this to the root directory, with this content:
	```
	{
		"port": 3000,
		"database": {
			"hostname": "localhost",
			"username": "postgres",
			"password": "password",
			"database": "studentmanagement"
		} 
	}
	```

1. Create a `knexfile.js` that uses the `config.json` file.
	```javascript	
	const config = require("./config.json");

	module.exports = {
		client: "pg",
		connection: {
			host: config.database.hostname,
			user: config.database.username,
			password: config.database.password,
			database: config.database.database
		}
	}
	```

1. In the `app.js` file use knex and pg to create a database connection pool.
	``` javascript
	const knex = require("knex");
	const db = knex(require("./knexfile"));
	```

1. In app.js, pass the db info to the student router.
	``` router.use('/students', students({db})); ```

1. Change the students.js file to accept {db}. Use this to try and get the students from the database. Map the results to add a fullname property. Use oment wiht hiredate. Then pass these students off to the render function.  

	``` javascript
	const expressPromiseRouter = require("express-promise-router");
	const router = expressPromiseRouter();
	const Promise = require("bluebird");
	const moment = require('moment');

	module.exports = function({db}) {
		let router = require("express-promise-router")();

		router.get("/",  (req, res) => {
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
			});
		});

	return router;
}

	```

1. Test your changes in the browser, do you see the students from the database?








