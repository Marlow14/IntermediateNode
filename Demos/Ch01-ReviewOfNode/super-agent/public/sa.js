const request = require('superagent');

function doPost() {
request
   .post('/api/pet')
   .send({name: 'Manny', species: 'cat'})
   .set('X-API-Key', 'foobar')
   .set('Accept', 'application/json')
   .then(function(res) {
      alert('yay got ' + JSON.stringify(res.body));
   });
  }

function doGet() {
      request
      .get('/makes')
      .then(function(res) {
          // res.body, res.headers, res.status
          document.getElementById("output-makes").innerHTML = res.body;
      })
      .catch(function(err) {
          // err.message, err.response
      });
  }

function doAuthRequest() {
request
  .get('http://local')
  .auth('judy', 'password')
  .then(callback);
}
