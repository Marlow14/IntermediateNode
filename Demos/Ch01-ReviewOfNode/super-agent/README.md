# Chapter 1 Demo: SuperAgent

## Objectives:
* Start a server and use postman to execute GET, POST, DELETE, PUT
* Become familiar with SuperAgent
* Explore the usage of watchify and exorcist

## Steps

1. Open the terminal at this location and run `npm install`

1. Open package.json. There is a lot going in this file and we will walk through it in this demo.

1. First, notice the dependency in package.json for json-server.  This package creates a quick and easy REST API built on top of express. You can give it a JSON fle and it creates the endpoints for you. 

1. Look at the script in package.json called json-server. Let's start the json-server by running this script. `npm run jsonserver`

1. Notice the output in the terminal window includes a URL for http://localhost:3333/Makes.  Open this in the browser (control+click works form VSCode) and notice this is a GET request which returns JSON data. The JSON data is coming from `db.json`.

1. Now load this page in the browser: `http://localhost:3333/`. Click the button to see the JSON data displayed as rows.  

1. Return to VSCode. The json-server lets us access static resources from the public folder. Expand this folder in VSCode and notice the index.html. This is the page that was loading. 

1. Hit the x on the terminal window. (or use Control + `) This hides the window but the service keeps running.

1. READ: Pure JavaScript could be used to make  AJAX requests to get the JSON data. We are instead using `superagent` which is a module that simplifies AJAX calls. Because this is a module, this project uses browserify to load the module in the browser.

1. Open the `api.js` file. This module defines an array (private) and exports a function which will be used to populate the array initially, and then create two functions to be used in the browser.

    * What do the 2 functions do?

1. Open `main.js` and note the use of require. 


1. Install dependencies by using `npm install`

1. Run using `npm run start`.

1. Watch the console and load the browser at the Home link - this may take a minute to appear:

    ``` 
    Resources
    http://localhost:3333/Makes

    Home
    http://localhost:3333
    ```

1. Trace through the following code. 
    * index.html
    * main.js - and the files it requires

1. How are the makes of cars displayed?