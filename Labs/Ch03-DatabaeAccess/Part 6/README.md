
Overview:
ge data from db

## Steps:
1. If you successfully completed teh last exercise, continnue with your prject. Otherwise copy the solution from Part 5.

1. Install: faker, pg, knex, pick-item, range and add to package.json. You can do this in on step from the command line 
`npm install -S faker pg knex pick-item range`


npm install -S pg knex

1. Add a `config.json` file to the project root directy.

1. Add the connection info to the file:
{
	"port": 3000,
	"database": {
		"hostname": "localhost",
		"username": "postgres",
		"password": "password",
		"database": "studentmanagement"
	} 
}



create a knewfile.js
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







