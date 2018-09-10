# Chapter 1 Exercise 1: ES6 Practice

## Objectives:
* Create a small application file and execute it
* Practice with some of the newer ES6 features.

## Steps

1. In Ch00 you should have created a WIP directory. In this directory create another directory so that you have this structure: `WIP/Part1-1`


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