# Chapter 1 Exercise 3: Promises and Bluebird

## Objectives:
* Create a new node project using npm init
* Use bluebird to use promises with files

## Steps

1. In the /MyWarmup directory create a folder called bluebird.

There are several ways to "transpile" code from ES6 down to ES5. One way is using babel. It can be used several ways including from the command line. One approach would be to install babel globally but this has fallen out of favor. Installing globally isnt always desirable. It makes it harder to manage the versions of the tools being used and can cause developers more manual work. Instead let's create a package.json for our mini-project, and list the dependency there.

1. Create a package.json by using the `npm init` wizard from the command line. Call the package `babel-practice` - and accept all other defaults (keep hitting Return key)

1. Add the babel CLI to the new package dependencies with this command:
```
npm install --save-dev babel-cli
```

1. Add 
npm install babel-preset-env --save-dev


1. Now, we want to execute the babel command from the command line. 

./node_modules/.bin/babel script.js --out-file script-compiled.js --presets=es2015

You could go the route of specifying the path such as ./node_modules/.bin/babel - but there is an easier way if using npm version > 5.2. 

Let's 
https://babeljs.io/docs/usage/cli/



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