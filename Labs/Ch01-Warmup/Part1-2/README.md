# Chapter 1 Exercise 2: Modules and Browserify

## Objectives:
* Divide up the code into modules
* Use browserify to be able to use your code (or the solution) from the last exercise in a browser

## Steps

1. Create another directory so that you have this structure: `WIP/Part1-2/browserifyModules` 

1. You will be doing command line work in this folder. You can get there in VS code by right clicking the new folder and choosing Open in Terminal.

1. Let's separate the script you created into two files. 

1. In your new `browserifyModules` folder, create a file called `printHobbies.js` and copy the print function you created into it - and use module.exports as shown:

    ``` javascript
    function printHobbyInfo(hobby) {
        console.log(` ${hobby.name} has been an interest for ${hobby.duration} years`)
    }

    module.exports = printHobbyInfo;
    ```

1. Create a new file called `source.js` that requires `printHobbies.js` making it available. You can copy the source below.

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

1. Very few browsers support modules, so lets use browserify. We can install it globally using:
```npm install -g browserify``` 

1. Open a terminal at the location of your current folder and execute this command: `browserify source.js -o bundle.js`

1. Create an `index.html` file which contains
``` <script src="bundle.js"></script> ```

1. Test your `index.html` file in Chrome and Internet Explorer. Do you see your output in the developer tools console?

1. Chrome should successfully display the data. But Internet Explorer and Firefox will not work due to the ES6 code. We will address this in the next section. 

