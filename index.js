const request = require('request'); 
const express = require('express');
//const request = require('request');
const app = express();

//var API_KEY = 'be2fefda64d0c14a2dfd6bad4af5851b'; 
  
app.get('/', function(req, res) {

    // Get city name passed in the form
    var city = req.query.city;
    
    var request = require('request');
   
    let url = `https://api.openweathermap.org/data/2.5/weather?`
    +`q=${city}&appid=be2fefda64d0c14a2dfd6bad4af5851b`
  
    request({ url: url, json: true }, function (error, response) { 
        if (error) 
        { 
            console.log('Unable to connect to Forecast API'); 
        } 
          else { 
            console.log('It is currently '
            + response.body.main.temp
            + ' degrees out.'
        ); 
        
            console.log('The high today in '+city+' is '
                + response.body.main.temp_max
                + ' with a low of '
                + response.body.main.temp_min
            ); 
  
            console.log('Humidity today is '
                + response.body.main.humidity
            ); 
            res.send(response.body);
        } 
    }) 
} )
  
//var latitude = 22.7196; // Indore latitude 
//var longitude = 75.8577; // Indore longitude 
  //var city="tenali"

app.listen(5000, function() {
    console.log('Weather app listening on port 5000!');
});