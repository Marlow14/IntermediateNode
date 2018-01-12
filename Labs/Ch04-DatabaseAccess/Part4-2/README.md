# Chapter 4 Exercise 2: Add migrations

## Objectives:
* Add migrations to the project

## Steps 

1. Navigate to your `MyPractice/lab-project` folder.

1. If you successfully completed the last exercise, continue with your project. Otherwise copy  the solution from the last exercise.

1. We will create a migrations file for users. Look at the `knexfile.js` and `config.json` for the project. Use a DB client to connect to the database.

1. Review the knexfile.js and open the corresponding database view with the appropriate client software.

1. execute this from the command line
``` knex migrate:make create_users```

1. Look in the newly created migratons folder at the created file

1. Modify the file so that its content looks like this:

    ``` javascript
    'use strict';

	exports.up = function(knex, Promise) {
		return knex.schema.createTable("accounts", (table) => {
			table.increments("id").primary();
			table.text("username").notNull().unique();
			table.text("hash").notNull();
			table.timestamp("createdOn").default(knex.fn.now());
		});
	};

	exports.down = function(knex, Promise) {
		return knex.schema.dropTable("accounts");
	};

    ```

1. Run the migration with this command:
```knex migrate:latest```

1. Check the DB for the added Users table

1. Drop the table from the client.

1. Try to run this again
	```knex migrate:latest```

1. You will likely get a message that it is already up to date and if so - you must drop the knex_migrations table before you can run the command again.  Do that now so you end up with the users table.

1. Install:  `pg` and `knex` and add to package.json. You can do this in one step from the command line 
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
	``` javascript
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

	```
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








