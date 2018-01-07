# Chapter 3 Exercise 3: Using the promise router so middleware can return promises

## Objectives:
* Add the use of Express Promise Router to our Application
* Create custom errors
* Throw a custom error from a Promise

## Steps

1. Continue working in your `MyPractice/lab-project` project. 

1. So far our routes have been simple. Now lets add in work with Promises. 

1. Lets use Bluebird, const Promise = require("bluebird");

1. You will need to install the dependencies. Bluebird to start and we will leverage the express router in a moment. 
    ```
    npm i -S express-promise-router
    npm i -S bluebird
    ```

1. Add two routes for logging in.... a get and a post. In the future we will implement this functionality but for now, when a user submits their user and password, they either match secretpasswod or an error is thrown.

    ``` javascript
    app.get("/login", (req, res) => {
        res.render("admin/login");
    });

    app.post("/login", (req, res) => {
        return Promise.try(() => {
            if (req.body.password === "secretpassword") {
        //if it is the correct password, login and set up session
            } else {
        //	throw new errors.AuthenticationError("Incorrect password");
        throw new Error("Incorrect password");
            }
        });
    });
    ```

1. Copy the admin directory which contains the login page from /Libs/Part3-3


1. Bring up the the URL http://localhost:3000/login 

1. You should be see the page and be able to login using `secretpassword`. But what happens if you suppy a different password? Try both ways. Do you see the error page?

1. Because the error is being thrown from within a Promise, our unhandled error is not handling it! To make this work you can add a catch block in which you then call next(err). You would need to do this everywhere you use promises.

    ``` javascript
    .catch(function(err){
            next(err);
        });
    ```    

1. Instead, we can use the Express Promise Router. It allows middleware to return promses and will allow Promise rejections to be handled without explicitly calling next(err).  In app.js, add these lines in place of just `var app = express();`
    
    ``` javascript
        var app = express();
        var expressPromiseRouter = require("express-promise-router");
        var router = expressPromiseRouter();
        app.use('/', router);
    ```

1. Now, throughout the code where routing middleware is being set up use router instead of app.


1. Bring up the the URL http://localhost:3000/login 


npm i -S create-error