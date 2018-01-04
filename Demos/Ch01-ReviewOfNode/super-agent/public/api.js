module.exports = function(global, makes){

    var favorites = [];

    global.showmakes = function(){
        let htmlMakes = '<table><th>Make</th><th>Country</th><th>Action</th></tr>';
        
        makes.forEach(function(m){
            console.log(m.make_display + ' | ' + m.make_country);
            htmlMakes += `<tr><td> ${m.make_display}</td><td>${m.make_country}</td><td><button onclick="deleteMake('${m.id}')">Delete</button></td></tr>`
        });
        document.getElementById("output-makes").innerHTML = htmlMakes;
    };

    global.deleteMake = function(id) {
        console.log('You made it here' + makes);
        request
      .delete('/Makes')
      .send(`{id:${id}}`)
      .then(function(res) {
          // res.body, res.headers, res.status
          api(window, res.body);
          
        //  document.getElementById("output-makes").innerHTML = showmakes();
      })
      .catch(function(err) {
          // err.message, err.response
          throw new Error('An AJAX error occured: ' + err.message);
      });
  

    }

    global.addFavorite = function(id){

        id = id || 0;
        id -= 1;

        if(makes[id] !== undefined){
            favorites.push(id);
            console.log('You added a favorite "' + makes[id].make_display + '"!')
        }
        else{
            console.error('No such make! ' + id);
        }
    };

    global.showfavorites = function(){

        favorites.forEach(function(id){
            console.log('Favorite:  ' + makes[id].make_display );
        });

    };

  
}