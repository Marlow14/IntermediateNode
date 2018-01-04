const request = require('superagent');
const api = require('./api.js');

// function doPost() {
// request
//    .post('/api/pet')
//    .send({name: 'Manny', species: 'cat'})
//    .set('X-API-Key', 'foobar')
//    .set('Accept', 'application/json')
//    .then(function(res) {
//       alert('yay got ' + JSON.stringify(res.body));
//    });
//   }

request
      .get('/Makes')
      .then(function(res) {
          // res.body, res.headers, res.status
          api(window, res.body);
          
        //  document.getElementById("output-makes").innerHTML = showmakes();
      })
      .catch(function(err) {
          // err.message, err.response
          throw new Error('An AJAX error occured: ' + err.message);
      });
  

// function doAuthRequest() {
// request
//   .get('http://local')
//   .auth('judy', 'password')
//   .then(callback);
// }
