# Chapter 2 Exercise 1: Create a new project
## Objectives:
* You will create a new project for the course 

## Steps

1. During the course you will be creating a project and updating it in each exercise.  Create a new folder called `MyPractice` at the same level as `Demos` and `Labs`.   If VS Code is open to the `Node-Intermediate` folder you can right-click below the other folders and choose new folder. If it gets created in an existing folder you can drag it to the correct location.

1. Open a terminal at the location of the new folder. You can right click and Choose Open Terminal.

1. If you havent already install globally the Express application generator using `npm install express-generator -g`

1. Execute one of these commands to create the lab-project
    1. This works if you have npm > 5.x
         ``` express --view=pug --git lab-project && cd lab-project``` 
    1. Or split it out into two commands instead of using && 

1. Execute the command `npm install`

1. If you havent already, install `nodemon` globally. This way you can start projects using `nodemon` - which will automatically restart the server when you make changes. 

1. Update the scripts entry to use nodemon instead of node: 
    ```   "start": "nodemon ./bin/www" ```
    
1. Visit the site at http://localhost:3000

1. Notice the text on the screen. Look at the generated folder structure and code and find this code. 

1. Change the code and refresh your browser. Do you see your changes?

1. Visit the site at http://localhost:3000/users 

1. Please note for all exercises, solutions are provided. If your code is ever not working and the time for the exercise has come to an end, you can rename your folder, for example Part4-2NotWorking and copy the `Solution/lab-project` folder to your `MyPractice` folder.
