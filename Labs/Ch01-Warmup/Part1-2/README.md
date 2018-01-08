# Chapter 1 Exercise 2: Modules and Browserify

## Objectives:
* Create a new module called source.js
* Copy your logic (or the solution) from the last exercise into the browser for usage.

## Steps

1. In the /MyWarmup directory create a folder called practiceModules.

1. In practiceModules, create an index.html file which contains
``` <script src="bundle.js"></script> ```

1. Create a file called source.js and copy into it your logic (or the solution) from Part1-1

1. Install browserify globally. 
`npm install -g browserify`            

1. Execite this command: browserify source.js -o bundle.js

1. Test your index.html file in Chrome and Internet Explorer. Do you see your ouput in the console?