create routes/studets.js

display students will go here



update app.js to require and then use this route

need moe step by step?

update app.js with...


create routes/student.js
one quick way is to copy users.js
cahnge th etxt to be about atudent to ensure we put all th pieces tgetehr correctly

router.get('/', function(req, res, next) {
  res.send('Students will go in here');
});

