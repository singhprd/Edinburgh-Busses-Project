var md5 = require('blueimp-md5');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var toReturn;
var apiKey = require('./apiKey');

var getJSON = function( callback ){
  // new date method to get the correct format to send with the API key
  Date.prototype.yyyymmddhh = function() {
    var yyyy = this.getFullYear().toString();
  var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
  var dd  = this.getDate().toString();
  var hh = this.getHours().toString();
  return yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]) + (hh[1]?hh:"0"+hh[0]); // padding
  };

  d = new Date();
  d = d.yyyymmddhh();

  keyPlusDate = apiKey+d;
  var hash = md5(keyPlusDate);

  var url = 'http://ws.mybustracker.co.uk/?module=json&key='+hash+'&function=getTopoId';
  var services = 'http://ws.mybustracker.co.uk/?module=json&key='+hash+'&function=getServices';
  var locations = 'http://ws.mybustracker.co.uk/?module=csv&key='+hash+'&function=getVehicleLocations';
  var predictions = 'http://ws.mybustracker.co.uk/?module=csv&key='+hash+'&function=getAllStopPredictions';

    // console.log(hash)

  var request = new XMLHttpRequest();
  // request.withCredentials = true;
  request.open("GET", services);
  request.send();


  request.onload = function() {
    if(request.status === 200) {
      console.log('success');
      // var response = JSON.parse(request.responseText);
      response = request.responseText;
      callback( response );
      // return toReturn;
      // console.log(toReturn)

  // for(response.services)
  // console.log(response.services[2 ]);
  // jsonString = request.responseText;
  // console.log(jsonString)
  // var countries = JSON.parse(jsonString);
  // console.log(countries)
    }
  };

  request.onerror = function() {
    console.log('There was an error!');
    console.log(request.responseText);
  };

};

module.exports = getJSON;

// module.exports = function(getJSON){
//   if(typeof toReturn != 'undefined'){
//         getJSON(toReturn); // If toReturn is already define, I don't wait.
//       } else {
//         callback = getJSON;
//       }
//     }


