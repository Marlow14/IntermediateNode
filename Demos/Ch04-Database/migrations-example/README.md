
1. Before running this demo, do a GIT PULL  

1. View package.json and run `npm install`

1. View the knexfile.js and open the corresponding database with the appropriae client software

1. execute this from the command line
``` knex migrate:make create_products ```

1. Look in the migrations folder at the created file

1. modify the file with this content whch creates a table

    ``` javascript
    exports.up = function(knex, Promise) {
        return knex.schema.createTable('products', function(t) {
            t.increments('id').unsigned().primary();
            t.dateTime('createdAt').notNull();
            t.dateTime('updatedAt').nullable();
            t.dateTime('deletedAt').nullable();

            t.string('name').notNull();
            t.text('decription').nullable();
            t.decimal('price', 6, 2).notNull();
            t.enum('category', ['apparel', 'electronics', 'furniture']).notNull();
        });
    };
    ```

1. modify the content with a drop table, in case a rollback is needed
    ``` javascript
    exports.down = function(knex, Promise) {
        return knex.schema.dropTable('products');
    };
    ```

1. Run the migration with this command:
```knex migrate:latest```

1. Check the DB for added table

1. Rollback this change:
```knex migrate:rollback```

1. Use Git icon in VS Code to undo changes to this /Demo directory

