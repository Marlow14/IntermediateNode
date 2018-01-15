# Chapter 2 Exercise 1: Create a new project
## Objectives:
* Create a new project for the course using Express App Generator
* Customize some of the default setup

## Steps

### Create new project

1. During the course you will be creating a project and updating it in each exercise.  Create a new folder called `MyPractice` at the same level as `Demos` and `Labs`.   If VS Code is open to the `Node-Intermediate` folder you can right-click below the other folders and choose new folder. If it gets created in an existing folder you can drag it to the correct location.

1. Open a terminal at the location of the new `MyPractice` folder. You can right click and Choose Open Terminal.

1. If you havent already, install globally the Express application generator using `npm install express-generator -g`

1. Execute one of these commands to create the lab-project
    1. This works if you have npm > 5.x
         ``` express --view=pug --git lab-project && cd lab-project``` 
    1. Or split it out into two commands instead of using && for both steps

        ``` express --view=pug --git lab-project ```
    
        ``` cd lab-project ```

1. Execute the command `npm install`

1. Run npm start

1. Visit the site at http://localhost:3000. Your app should now be up and running.

1. In VSCode you can:
    * Ctrl-C to stop the process and stay in the same directory
    * Hit the trashcan icon to kill process and clsoe the window
    * Hit the X to hide the window, and use Ctrl-` to get it back

1. PLEASE NOTE: solutions are provided for all exercises. If your code is ever not working and the time for the exercise has come to an end, you can rename your current `lab-project` folder to not lose your current work, for example `NotWorkingExercisePart2-4` and then copy the `Solution/lab-project` folder to your `MyPractice` folder.

### Modify initial setup of new project

1. If you havent already, install `nodemon` globally. This way you can start projects using `nodemon` - which will automatically restart the server when you make file changes. 

1. Update the `package.json` scripts entry for `start` to use nodemon instead of node: 
    ```   "start": "nodemon ./bin/www" ```

1. Another nice script to have allows you to launch the project in a DEBUG specific mode. Complete your scripts area for now by adding an entry for devstart
    ```
    "scripts": {
        "devstart": "DEBUG=lab-project nodemon ./bin/www",
        "start": "nodemon ./bin/www"
    },
    ```

1. Stop/Restart the server using `npm start` is it still working?