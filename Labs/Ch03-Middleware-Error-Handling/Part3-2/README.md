# Chapter 3 Exercise 2: Use a custom error handling middleware

## Objectives:
* Examine the default error handling middleware and 

Organize code by adding a new middleware called error-handler.js  
* Practice passing state to the error handler

## Steps

1. Continue working in your `MyPractice/lab-project` project. 

1. Notice how 404s are handled. Try to reach a made up URL like http://localhost:3000/notforrealz 

1. You should be seeing the same format as your other pages.

1. Can you see how the error view is being rendered? Try to find it.  Scroll down to continue and confirm info on this.

```










```
1. In app.js, look for the comment line: `// catch 404 and forward to error handler`

1. This middleware is used to generate an error, set the status to 404 then it goes the next middleware the error handler. This catch 404 will only be reached if no other middleware returns with a send or render.

1. In the 404 catch middleware, modify the passed in Error text so that instead of  `Not Found` the text `Oh no! the page cannot be found` is stored. 

1. Still in the 404 catch middleware, modify the request to add a property called `req.timestamp` and set it to new Date(). Notice how next() is called with err.

1. Now in the error handler middleware, use console.log to display the timestamp by accessing the previously set value for `req.timestamp`. Test your changes by refreshing Try to reach a made up URL like http://localhost:3000/notforrealz in the browser. View the Node terminal window to view the console.log.

1. Note the usage of `res.locals.message = err.message` and how this is used in error.pug.  This is another way to make data available in the template view. 

1. In this file, expose the timestamp by adding a property to res.locals and using it in error.pug in this way:
    ```
    Error occured at #{timestamp}
    ``` 

1. Test your changes in the browser.

## Error handler as its own middleware

1. Create a directory for the project called `middleware`

1. Copy the file called `error-handler.js` from `NODE-INTERMEDIATE/Libs/Part3-2` into the `/middleware` folder. 

1. Note how this will check for 404 and 500 level errors. It sets up an errorMessage to be used on the error page. Update the error.pug to use it in this way:
    ```
    extends layout

    block content
    h1= message
    h2= errorMessage
    
    pre #{error.stack}
    ```  


1. Update `app.js` to include this new middleware after the check for 404. (comment out the current code for error handling.)
`app.use(require("./middleware/error-handler")(state));`

1. Notice how this is being passed a state object. For now, be sure to create an empty state object, before this call to the middleware,  to avoid errors.
    ``` javascript
    const state = {
        
    }
    ```

1. Test that you can still hit these URLs and that the errohandler handles the 404.
    * http://localhost:3000/
    * http://localhost:3000/students
    * http://localhost:3000/badurl  (should be a 404 page)

1. Now, lets create a route that mimics calling a service that generates a specific error, 503 which means that a service is unavailable. REMEMBER THIS NEEDS TO BE BEFORE THE 404.
    ``` javascript
    app.use('/mtgox', function(req,res,next){
        console.log('Lets pretend this uses a service that is too busy and times out');
        //fake calling of a service which returns a 503 error
        let err = new Error('The service is unavailable');
        err.status = 503;
        next(err);
    });
    ```
1. Test the URL:  http://localhost:3000/mtgox you should see the error page with the 503 code displayed.

1. Now lets assume we have a realy bad bug in our code. An error is being thrown from somewhere and isn't being handled.  Let's simulate that bug by adding a route called `/bug`.
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
    let crashOptions = {doNotCrash : true};
    let errorReporter = unhandledError( (err) => {
                            /* This should eventually be hooked into some sort of error reporting
                              mechanism. SMS text nessaging....etc. bug */
                            console.error("UNHANDLED ERROR:", err.stack);
                          }
                    , crashOptions);

    /* The 'state' object is an object that we pass to everything that needs some
    sort of stateful dependency; all of the stateful dependencies are initialized
    here in server.js, and then passed into the modules that need them using a
    wrapper function. The wrapper function can unpack the stateful dependencies
    that it needs, eg. using object destructuring. */
    let state = {
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
