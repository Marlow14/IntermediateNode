# Chapter 3 Demo: Error handling

## Objectives:
* View default error handling from express a generator

## Steps

1. First do an `npm install` and `npm start`

1. In the browser, go to the URL http://localhost:3000

    The page should load with links.

1. Click the first link which gets submitted and there is no matching route. Find the code near line 15 in `app.js` which creates a 404 error, because no route previous to this has handled the request. 

    Lets trace the path taken for this route?

    Notice how the createError module is used.

    Find this module on npm to see how it works.

    Next is called with this error. What is teh next middleware that runs?

    It is the error handler which is middleware which takes 4 arguments. 
    
    ```javascript
    app.use(function(err, req, res, next) {
    ```    

1. Back at http://localhost:3000 click the second link for mtgox. Find the route handler inside of index.js. Notice how this error is 