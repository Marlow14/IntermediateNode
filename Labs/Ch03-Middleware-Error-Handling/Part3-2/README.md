# Chapter 3 Exercise 2: Use a custom error handling middleware

## Objectives:
* Organize code by adding a new middleware called error-handler.js  
* Practice passing state to the error handler

## Steps

1. Continue working in your `MyPractice/lab-project` project. 

1. Create a directory for the project called `middleware`

1. Copy the file called `error-handler.js`from `NODE-INTERMEDIATE/Libs/Part3-2` into the `/middleware` folder. 

1. Note how this will check for 404 and 500 level errors. IT sets up an errorMessage to be used on error page. Update the error.pug to use this:
    ```
    extends layout

    block content
    h1= message
    h2= errorMessage
    
    pre #{error.stack}
    ```  


1. Update `app.js` to include this new middleware.
`app.use(require("./middleware/error-handler")(state));`

1. Notice how this is being passed a state object. For now create an empty state object to avoid errors.
    ``` javascript
    const state = {
        
    }
    ```

1. Test that you can still hit these URLs and that the errohandler handles the 404.
* http://localhost:3000/
* http://localhost:3000/students
* http://localhost:3000/badurl  (should be a 404 page)

1. Now, lets fake out a URL that is supposedly contacting a service that is not readily available. REMEMBER THIS NEEDS TO BE BEFORE THE 404.
    ``` javascript
    app.use('/mtgox', function(req,res,next){
        console.log('Lets pretend this uses a service that is too busy and times out');
        let err = new Error('The service is unavailable');
        err.status = 503;
        next(err);
    });
    ```
1. Test the URL:  http://localhost:3000/mtgox

1. Now lets assume we have a bug in our code. An error is being thrown from somewhere and isn't being handled. What was not planned for? 

1. Let's simulate that bug.

    ``` javascript
    app.use('/bug', function(req,res,next){
    console.log('Pretend there is a really bad bug here. No err info is set..');
    //notice next() is not called
    throw new Error('This is a bug/feature ');
    
    });
    ```

1. Test the URL http://localhost:3000/bug . It displays like a normal error.

1. But what if it is a bad bug, and we dont want Node to keep running? Lets shut down Node in this case. In the future we could make it send an SMS or use other approaches. 

1. Update `app.js` to create an unhandledError, and add this to our empty state object. 
    ``` javascript
    const unhandledError = require("unhandled-error");

    let errorReporter = unhandledError((err) => {
        /* This should eventually be hooked into some sort of error reporting
        mechanism. */
        console.error("UNHANDLED ERROR:", err.stack);
    });

    const state = {
     errorReporter: errorReporter
    }
    ```

1. Notice the use of unhandled-error. Add this as dependency to your project.
    ```
    npm i -S unhandled-error
    ```

1.  Require it in app.js
    ```
    const unhandledError = require("unhandled-error");
    ```


1. Update `error-handler` to use the else statement where no error code is being captured, and use it to report the error with errorReporter. (uncomment the code)
    ``` javascript
    else { // else we dont know why we are here
             	errorReporter.report(err, {
             		req: req,
             		res: res
             	});
            }
    ```     

1. Test the URL http://localhost:3000/bug . You should see Node being stopped in your console.   
