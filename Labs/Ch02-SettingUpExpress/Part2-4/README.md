basic templates and layout

create student and users
create pug files for users and students

extend layout


add references in the layout.pug

Can copy from index.pug
extends layout

block content
  h1= title
  p Welcome to #{title}

  update routes/students.js
        chaneg to render, pass the title

  do the same for users
