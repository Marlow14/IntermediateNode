# Chapter 1 Exercise 2: Modules and Browserify

## Objectives:
* Divide up the code into modules
* Use browserify to be able to use your code (or the solution) from the last exercise in a browser

## Steps

1. Create another directory so that you have this structure: `WIP/Ch01/browserifyModules` 

1. You will be doing command line work in this folder. You can get there in VS code by right clicking the new folder and choosing Open in Terminal.

1. In your new `browserifyModules` folder, create a new file called `printHobbies.js` and copy this code into it - which includes module.exports as shown:

    ``` javascript
    function printHobbyInfo(hobby) {
        console.log(` ${hobby.name} has been an interest for ${hobby.duration} years`)
    }

    module.exports = printHobbyInfo;
    ```

1. Create a new file called `source.js` that requires `printHobbies.js` making it available. You can copy the source below into this new file.

``` javascript
const printInfo = require('./printHobbies');

const hobbies = [
    { name: 'volleyball', duration: 20 },
    { name: 'cooking', duration: 5},
    { name: 'swimming', duration: 11}
];

for (const hobby of hobbies) {
    printInfo(hobby);
}
```

1. Very few browsers support modules, so lets use browserify to convert the use of modules into something that we can use. We can install it globally using:
```npm install -g browserify``` 

1. Open a terminal at the location of your current folder and execute this command: `browserify source.js -o bundle.js`

1. Create an `index.html` file in this directory. Before typing anything in this file, as the first line, start typing the word `html`. A pop-up should appear while you are typing, and if you choose the html:5 template it will create the basic HTML structure that is needed.

1. Before the closing `</head>` tag add this:

    ```html
         <script src="bundle.js"></script> 
    ```

1. Test your `index.html` file in Chrome and Internet Explorer. Do you see your output in the developer tools console?

1. Chrome should successfully display the data. But Internet Explorer and Firefox will not work due to the ES6 code. We will address this in the next section. 

## Bonus

1. In `source.js` require lodash.

1. Create a function called `mostRecentHobby`, which uses lodash to find and return the hobby with the minimum years. 

    You can search npm for lodash and search usage guides for an appropriate lodash method to find an object by a property minimum value.