# Chapter 1 Exercise 2B: More with NPM Modules

## Objectives:
* Update npm
* Learn about package.lock
* Create a new node project using npm init
* Install packages locally instead of globally
* Use babel to compile code from ES6 to ES5

## Steps

1. Continue working in the folder `/browserifyModules`.

1. READ: There are several ways to "transpile" code from ES6 down to ES5. One way is using babel. It can be used several ways including from the command line. One approach would be to install babel globally. Installing globally isnt always desirable. It makes it harder to manage the versions of the tools being used and can cause developers more manual work.

    If you install at the package level, you can specify CLI tools in the node_modules directory like this: 
    
    ```./node_modules/.bin/babel source.js --out-file source-compiled.js```


1. To update: If your npm version is < 5.x use this command:
```npm i -g npm```

1. Now create a `package.json` by using the `npm init` wizard from the command line. Call the package `babel-practice` - and accept all other defaults (keep hitting Return key)

1. Open the package.json and look at the dependency sections. Close the file.

1. Add the babel CLI to the new package.json dev dependencies with this command:
    ```
    npm install --save-dev babel-cli
    ```

1. Open the package.json and look at the changes in the dev dependencies section. Close the file.

1. READ: You may notice a package-lock.json file being created. This is a new approach to be able to go back to previous versions of your package.json. You can ignore this for now, but it would be checked in to your repo in the real-world.

1. Add a `preset` to the dev dependencies. Babel uses this to know how to transpile to a specific version.
    ```
    npm install babel-preset-env --save-dev
    ```

1. The last thing needed for the setup is a configuration file called `.babelrc` Create this file with this content, which specifes to use the preset we just installed.
    ```
    {
        "presets": ["env"]
    }
    ```


1. Use browserify to bundle our files that are relate through module requires. 
    ```
    browserify source.js -o es6bundle.js
    ```    


1. Now, we want to execute the babel command to turn this into ES5. Recall, we could give the full path to node_modules, but this is made easier with the built in npm tool called `npx`. Issue this command:
    ```
    npx babel es6bundle.js -o bundle.js
    ```


1. Reload the browser, you should now see output in the dev tools console for both Chrome and IE.

## BONUS
1. npx also allows you to execute tools not installed. One-off. They take a littlelonger to run because they are downloaded, ut then ou dont have to clean up your npm local repos or package.json file. Try these out:
    ```
    npx cowsay Say something

    npx happy-birthday -u YourName

    npx benny-hill
    ```

1. You can specify different browser versions with babel. Check out
https://github.com/ai/browserslist 
