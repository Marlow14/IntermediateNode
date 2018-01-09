# Chapter 1 Exercise 3: Promises and Bluebird

## Objectives:
* Create a new node project using npm init
* Use babel to compile code from ES6 to ES5
* Use bluebird to use promises with file reading

## Steps

1. In the /MyWarmup directory create a folder called bluebird.




1. In the /bluebird folder, open a terminal window

1. Create a package.json by using the `npm init` wizard from the command line. Call the package `bluebird-practice` - and accept all other defaults (keep hitting Return key)

1. Open the package.json and look at the dependencies section. Close the file.

1. Add bluebird to the project by issuing this command - within the /bluebird directory  `npm install -S bluebird`

1. in the /bluebird directory create an index.js file. Start off by requiring bluebird

    ``` javascript
        const Promise = require("bluebird");
    ```

1. One feature that Bluebird gives us is the ability to Promisify packages....you can dynamically create asychrounous functions from normally synchronous ones. They get prefixed with the name `Async`. Add this line of code to promisify the built in fs package.

    ``` javascript
        const fs = Promise.promisifyAll(require("fs"));
    ```

1. Now we will use the newly generated versions of the functions to write asynchronously.
    ``` javascript
    Promise.try(() => {
        return fs.writeFileAsync("hobbies.txt", "These are my hobbies: swimming, running, painting!");
    }).then(() => {
        console.log("Data written successfully!");
        console.log("Let's read newly written data");

        return fs.readFileAsync("hobbies.txt");
    }).then((data) => {
        console.log(`Asynchronous read: ${data.toString()}`);
    });

    console.log(`something console.logged after the calls to write data`);

    ```

1. In the terminal window, execuet the command `node index.js`

1. Look at the output in the console and the order of the printed statements.

1. Also look at the newly created file. You may need to refresh the directory in the editor.