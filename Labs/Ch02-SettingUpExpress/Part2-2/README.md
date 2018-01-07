# Chapter 2 Exercise 2: Creating a new route
## Objectives:
* You will add aditional routes to your project. 

## Steps

1. Navigate to your `MyPractice/lab-project` folder. If you had any issues creating the project, copy the solution from the last exercise into this location.

1. If not already running, open a terminal at the location of your project folder. You can right click the `MyPractice/lab-project/package.json` and Choose Open Terminal.

1. Start the application by running the command  `nodemon start` 

1. In the browser, visit the URL http://localhost:3000 and verify that it is working. You can ctrl-click this link in VS Code. 

1.  Create a new route in the routes folder called students.js `routes/studets.js`. The easiest way to do this is to copy and paste users.js. You can right click and choose copy (or CTRL-C) then click the folder and right click and choose paste. (or CTRL-V)

1. This is where the display of students will be. 
For now, update the line to read 
`res.send('Students will go in here');`

1. Update `app.js` to require and then use this route. If need help, copy what is being done for requiring the users route and update it for students.

1. Refresh the browsr, is the root URL still working?

1. Now see yoru new route by visiting the URL http://localhost:3000/students (you can ctrl click this link)

1. Verify, are are you seeing the correct output? If not try to troubleshoot and ask questions if need be.


