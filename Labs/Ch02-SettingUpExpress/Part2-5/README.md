# Chapter 2 Exercise 5: Iterate over data

## Objectives:
* In the student router, setup a student array to be used in the student view
	``` javascript
	let students = [{
		nameFirst: "Devin",
		nameLast: "Durgan",
		email: "Devin.Durgan@gmail.com",
		hireDate: moment("01/19/2015", "MM/DD/YYYY")
	}, {
		nameFirst: "Cristal",
		nameLast: "Adams",
		email: "Cristal.Adams@live.com",
		hireDate: moment("07/29/2016", "MM/DD/YYYY")
	}, {
		nameFirst: "Nettie",
		nameLast: "McGlynn",
		email: "Nettie.McGlynn@gmail.com",
		hireDate: moment("08/29/2015", "MM/DD/YYYY")
	}];
	```
* Pass the students to the view
* In students.pug, display students by iterating over the data 
* Add an if conditon to display if no students are present. Comment out array code to test this.
* Change the formatting of the application and add Bootstrap
* When your code is tested and works, replace the /views directory with /Libs/Part

Need detailed steps?
Read below...

## Steps

1. Continue with your `MyPractice/lab-project` and launch http://localhost:3000 in browser. Refer to previous exercises if you need more detail.

1. In the terminal install the `moment` package and add it as a dependency to the package.json.
`npm i -S moment`

1. update the index.pug to just say `Welcome to #{title}`

1. update the layout to say `Student Manager Application`

1. Define student array in the `/routes/students`. Use the moment package ot create dates. Add moment to the project using an nom install with a --save flag.

1. display student data however you want, the solution uses a table. The demo displays list items.
	```
	each student in students
		tr
		td #{student.nameFirst} #{student.nameLast}
		td #{student.email}
		td #{student.hireDate.format("MM/DD/YYYY")}
	```
1. Test that you can see the students in the browser. If not make fixes and ask if you get stuck.

1. Add an if conditon to display if no students are present. Comment out students inclusion in router and test your conditional works.

## Preparing Project for future work
The following will modify the application to have links to the routes files.
It uses Bootstrap for styling. 

1. Delete the `/public/javascripts` and `/public/stylesheets` directories. 

1. Copy the `/public`  (css and js files) from `NODE-INTERMEDIATE/Libs/Part2-5` into the `/public` folder.

1. Copy the favicon.ico file from `NODE-INTERMEDIATE/Libs/Part2-5` into the `/public` folder.

1. Replace the `layout.pug` and `students.pug` from `NODE-INTERMEDIATE/Libs/Part2-5` into the views directory.

1. Load in the browser and you should now see a table being displayed like in the solution.