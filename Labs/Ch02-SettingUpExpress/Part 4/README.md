create pug files for users and students
Overview:
copy the libs foldr contents into the appropriate locations under public


Need step by steps?

Read below...

update the index.pug to say Home Page Wlecome

update the layout to say student manger
rename javascripst to js saves typing and that spelling is annoying
rename stylesheets to just css, again im a lazy typer and dont like their default

copy in the css and js from the libs directory to the approrpiate places

add references in the layout.pug

Can copy from index.pug
extends layout

block content
  h1= title
  p Welcome to #{title}

  update routes/students.js
        chaneg to render, pass the title

  do the same for users


CSS etc etc okay if yoru stylig does not match
complete th exercises for content completion, then you can refer to the solution if you like

