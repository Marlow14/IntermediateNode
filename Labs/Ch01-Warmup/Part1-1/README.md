# Chapter 1 Exercise 1: ES6 Practice

## Objectives:
* Create a new MyWarmup folder
* Create a small application file and execute it
* Practice with some of the newer ES6 features.

## Steps


1. During the warmup chapter, you will be create a directory called `MyWarmup`. Create this new folder at the same level as `Demos` and `Labs`.   If VS Code is open to the `Node-Intermediate` folder you can right-click below the other folders and choose new folder. If it gets created in an existing folder you can drag it to the correct location.

1. In a file called myHobbies.js - create an array of 3 of your hobbies. Each hobby should be represented as an object with a name, and lengthInYearsAtHobby. Similar to this sports array, only with lengthInYearsAtHobby as a numeric value.

    ``` javascript
    const sportsArray = [
        { name: 'volleyball', duration: 'matches' },
        { name: 'baseball', duration: 'innings'},
        { name: 'hockey', duration: 'periods'}
    ];
    ```            

1. Create a function that takes in one hobby and prints it to console.log. Use ES6 backticks. It should be similar to this:
    ``` javascript
    function printSportInfo(sport) {
        console.log(` ${sport.name} is played in ${sport.duration} `)
    }
    ```

1. Now loop through the array items and call the function for each item.     ``` javascript
        printSportInfo(sportsArray[0]);
    ```

1. Run from the command line using `node myHobbies`

PUT YOUR TENT CARD UP - BONUS TIME

1. If you are done before others, see if you can help your neighbors. Test yourself - can you sort by the hobby names alphabetically? Can you sort by the lengthInYearsAtHobby