# Chapter 1 Exercise 2B: More with NPM Modules

## Objectives:
* Update npm
* Understand package.lock
* Use babel to transpile from ES6 to ES5


## Steps

1. Continue working in the folder `/WarmUp/practiceModules`.

1. READ: There are several ways to "transpile" code from ES6 down to ES5. One way is using babel. It can be used several ways including from the command line. One approach would be to install babel globally. Installing globally isnt always desirable. It makes it harder to manage the versions of the tools being used and can cause developers more manual work.

    If you install at the package level, you can specify CLI tools in the node_modules directory like this 
    
    ```./node_modules/.bin/babel script.js --out-file script-compiled.js```
    
    Starting with npm version 5.x.x there is a new tool available called `npx`. 

    Let's use this approach

1. Ensure npm is up to date. Use this command to get current version:
```npm -v```

1. Use this command to find out the latest version:
```npm view npm version```

1. To update: If your npm version is < 5.x use this command:
```npm i -g npm```


1. Now create a `package.json` by using the `npm init` wizard from the command line. Call the package `babel-practice` - and accept all other defaults (keep hitting Return key)


1. Add the babel CLI to the new package.json dev dependencies with this command:
```
npm install --save-dev babel-cli
```

1. Add a `preset`. Babel uses this to know how to transpile to a specific version.
`npm install babel-preset-env --save-dev`

1. The last thing needed for the setup is a configuration file called `.babelrc` Create this file with this content, which specifes to use the preset we just installed.
    ```
    {
        "presets": ["env"]
    }
    ```

1. Now, we want to execute the babel command from the command line. Recall, we could give the full path to node_modules, but this is made easier with the built in npm tool called `npx`. Issue this command:
    ```
    npx babel source.js -o bundle.js
    ```

## BONUS
1. To see more on using babel and presets visit
Let's 
https://babeljs.io/docs/usage/cli/

