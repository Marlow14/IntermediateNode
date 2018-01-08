# Chapter 3 Exercise 3: Using the promise router so middleware can return promises

## Objectives:
* Add the use of Express Promise Router to our Application
* Create custom errors
* Throw a custom error from a Promise

## Steps

1. Continue working in your `MyPractice/lab-project` project. 

1. So far our routes have been simple. Let's clean this area up a bit in our project because it can get messy quickly. First delete the /mtgox and /bug routes from app.js. 

1. In this app, a requirement exists to have http://localhost:3000/login as a way to allow users to login. Add this as a link in the layout.pug file after `a(href="/users") Users`
    ```
    li 
        a(href="/login") Login
    ```    

1. Which file would be a good place to indicate the route for this path?

1. Let's add the /login route to the index.js file. The URL / is the root/index. If the URL were to be /users/login we could add it to the users.js file.
Which HTTP method is needed to request the login page?

1. We need a GET for /login which returns the login view. Add this to `index.js`

    ``` javascript
    router.get('/login', function(req, res, next) {
        res.render('admin/login');
    });
    ```
1. Copy the `admin` directory to the `views` directory which contains the login page from `/Libs/Part3-3`. Looking at login.pug - what action is taken when the form is submitted?

1. Test now if you can see the login page when you click the link. If not, troubleshoot.

1. Supply any user/pass and submit. What happens? Why?
 
1. We need to process the /login as a POST. In the future we will be implementing this using DB functionality and therefore using Bluebird for Promises. Add a require in the `index.js` and also grab the dependency using the CLI.

    ``` const Promise = require("bluebird"); ```

    ``` npm i bluebird -S ```

1. For now, when a user submits their username and password, let's only check to see if the password matches `secret` and if not throw an error.

    ``` javascript
    router.post('/login', (req, res) => {
        return Promise.try(() => {
            if (req.body.password === "secret") {
            //if it is the correct password, login and set up session
                res.redirect('/students');
            
            } else {
            //throw new errors.AuthenticationError("Incorrect password");
                throw new Error("Incorrect password");
            }
        });
    });
    ```

1. Go through the login process. You should be see the page and be able to login using `secret`. But what happens if you supply a different password? Try both ways. Do you see the error page?

1. Because the error is being thrown from within a Promise, our unhandled error is not handling it! To make this work you can add a catch block after the Promise.try() passing next - like this. 

    ``` javascript
   .catch( next )
    ```    

1. You would need to do this everywhere you use promises. You may forget to do this in your code.  Instead, we can leverage the Express Promise Router. It allows middleware to return promses and will allow Promise rejections to be handled without explicitly calling next(err).  

1. Modify index.js by commenting out express.Router and instead using expressPromiseRouter
    
    ``` javascript
       //var router = express.Router();
        var expressPromiseRouter = require("express-promise-router");
        var router = expressPromiseRouter();
    ```

1. Add the dependency to the project. 
    ```
    npm i -S express-promise-router
    ```

1. Now, test that logging in, with an invalid password, works with or without the catch() block in the Promise.try() 

1. We still have work to do. We will start working with the DB next.


