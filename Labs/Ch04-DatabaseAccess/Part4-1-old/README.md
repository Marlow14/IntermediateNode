# Chapter 4 Exercise 1: Database Access

## Objectives:
* Connect to the database to get records to display

## Steps 

1. Navigate to your `MyPractice/lab-project` folder.

1. If you successfully completed the last exercise, continue with your project. Otherwise use the solution from the last exercise.

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

1. Create a knexfile.js that uses the config.json file.
```
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









