# Chapter 2 Exercise 4: Add new pug files, and render them
## Objectives:
* Create new pug files for student and users
* Pass title values from the specific routes to the pug files

If you want a challenge do this now. Otherwise, refer to the steps below. 

## Steps

1. Continue with your `MyPractice/lab-project` and launch http://localhost:3000 in browser. Refer to previous exercises if you need more detail.

1. Create pug files for users and students by adding appropriately named files to the `views` directory. 
(You can copy and paste the index.pug file and rename.

1. Ensure that these files extend layout and display title in an h1 tag. 
`h1 #{title}` or `h1= title` can be used. 
The pages should also display 
`This is the #{title} page.`  
You will pass the titles into each from their associated router. 

1. Update both the students and users router files to render these pug views with appropriate titles instead of just passing back text with send().  For example: 
`res.render('XXXX', { title: 'YYYY' });`

1. Visit the URLS and confirm they all still work - and they display the correct info.
* http://localhost:3000/
* http://localhost:3000/students
* http://localhost:3000/users