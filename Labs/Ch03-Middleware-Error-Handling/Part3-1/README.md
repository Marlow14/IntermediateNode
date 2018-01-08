# Chapter 3 Exercise 1: Use default error handling middleware

## Objectives:
* Examine the default error handling middleware and modify the req and res objects. 

## Steps

1. Continue working in your `MyPractice/lab-project` project. 

1. Try to reach a made up URL like http://localhost:3000/notforrealz 

1. Notice how 404 are handled. You should be seeing the same format as your other pages.

1. Can you see how the error view is being rendered? Try to find it.  Scroll down to continue and confirm info on this.

```










```
1. In app.js, look for the comment line: `// catch 404 and forward to error handler`

1. This middleware is used to generate an error, set the status to 404 then it goes the next middleware the error handler. This catch 404 will only be reached if no other middleware returns with a send or render.

1. In the 404 catch middleware, modify the error text so that instead of displaying `Not Found` the text `Oh no! the page cannot be found` is displayed. Test your changes in the browser.

1. In the 404 catch middleware, modify the request to add a req.timestamp set it to new Date()

1. In the error handler, log the req.timestamp using console.log. Test your changes in the browser.

1. Note the usage of `res.locals.message = err.message` and how this is used in error.pug.  This is another way to make data available in the template view. 

1. Use this approach with res.locals to set the date timestamp so that this code can be used in error.pug `Error occured at #{timestamp}` 

1. Test your changes in the browser.
