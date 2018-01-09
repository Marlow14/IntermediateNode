# Chapter 1 Exercise 4: ESLint practice

## Objectives:
* Apply ESLint

## Steps


1. Check your extensions for VSCode. If you do not have ESLint installed (by Dirk Baeumer), install it. Once installed, disable it. You can do this by clicking on the extension and selecting the Disable drop-down, and choosing Workspace.

In the /MyWarmup directory create a new subfolder called /eslint-practice

1. Use npm init to create a new package.json - this time by using `npm init -y`

1. Open package.json and notice the defaults used.

1. Add ESLint to your project using: `npm install eslint --save-dev`

1. Create another subdirectory called `files` at the location
`MyWarmup/eslint/files`

1. Create a file called add.js with this content:
    ``` javascript
    function add(a,b) {
        return a + c
    }
    ```

1. Create a file called divide.js with this content:

    ``` javascript
    function average(a,b,c) {
        sum = a + b + c

        avg = sum / 3

        return a/c
    }
    ```

1. Create an ESLint config file by using the command: 
`npx eslint --init`

1. Use the arrow keys to choose `Answer questions about your style` and choose:
    * Yes for ES6 and ES6 modules
    * toggle all for browser and node
    * Yes for CommonJS
    * No for JSX
    * Tabs for indentation
    * Single for quotes
    * Windows
    * Yes Require semicolons 
    * JSON for config style

1. Look at the resulting `.eslintrc.json` file

1. From the command line at `MyWarmup/eslint` issue this command to check on one specific file, and look at the output in your console:
    ```
    npx eslint files/add.js   
    ```

1. Now try this command to scan the entire directory:
    ```
    npx eslint files/*
    ```

1. Add this entry to your .eslintrc.json file, in the rules section, to change the unused errors to warnings:
    ``` javascript
        "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
    ```

1. Run this command again and notice there are now warnings for unused variables instead of errors.
    ```
    npx eslint files/*
    ```

1. Now lets try this out in VSCode. Go back to the extensions menu, and enable ESLint. Reload.

1. Now visit add.js you should see the feeback in the editor.

1. You can also enable and disable from the editor pane. 
    * While looking at the code in add.js, right click for the contextmenu and choose Command Palette...
    * Start typing ESlint and you will see possible choices
    * Practice enabling and disabling the feedback
## Bonus
1. If done before others, practice more with with ESLint and try auto-correcting issues.