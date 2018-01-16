# Chapter 4 Exercise 2: Add migrations

## Objectives:
* Add migrations to the project for a users table called `accounts`

## Steps 

1. Navigate to your `MyPractice/lab-project` folder.

1. If you successfully completed the last exercise, continue with your project. Otherwise copy the solution from the last exercise.

1. Review the `knexfile.js` and recall that this version of the file can be used in different environments. 

1. Execute this from the command line
	``` knex migrate:make create_accounts```

1. Look in the newly created migratons folder at the created file.

1. Modify the file so that on `exports.up`, it:
	* Creates an `accounts` table with `id` as a primary key that increments
	* Has a `username` that cannot be null and is unique
	* Has a `hash` field which is text that cannot be null
	* Has a timestamp column called `createdOn`, you can give it `knex.fn.now()` as a default
	* and on `exports.down`, it drops the table
	* SCROLL DOWN FOR HELP CREATING THE FILE CONTENTS...

    ``` javascript
    



















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

1. Check the DB for the added `Accounts` table

1. Drop the table from the client database software, pgAdmin.

1. Try to run this again
	```knex migrate:latest```

1. You will likely get a message that it is already up to date and if so - you must drop the knex_migrations table before you can run the command again.  Do that now with pgAdmin, and try to run the command again.
```knex migrate:latest```

1. Be sure you end this exercise with the accounts table, it will be used soon









