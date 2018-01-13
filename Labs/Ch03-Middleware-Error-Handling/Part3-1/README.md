# Chapter 3 Exercise 1: Use default error handling middleware

## Objectives:
* Create middleware that logs the current time to the console


## Steps

1. Continue working in your `MyPractice/lab-project` project. 

1. We will be using the moment package - add it to package.json.

1. In `app.js` add in middleware that causes all routes to print out the time as shown below. Make sure you put this before any routes that will call send() or render():

    ``` javascript
    app.use(function (req, res, next) {
        console.log(`Time: ${moment().format('MMMM Do YYYY, h:mm:ss a')}  `);
        next();
    });
    ``` 

1. Load the application in the browser. For each link/route you activate - ytou should see it in the terminal console.