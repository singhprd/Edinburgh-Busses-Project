window.onload = function(){
  console.log('App started');
  var request = new XMLHttpRequest();
  // request.withCredentials = true;
  var url = 'http://localhost:3000/getjson';
  request.open("GET", url);
  request.send();

  request.onload = function() {
    if(request.status === 200) {
      console.log('success');
      // var response = JSON.parse(request.responseText)
      response = request.responseText;
      var busServices = JSON.parse(response);
      console.log(busServices.services[1].name);

      var dropDown = document.getElementById("drop-down");
      
      for (i = 0; i < busServices.services.length; i++) { 
        var option = document.createElement('option');
        option.innerHTML = busServices.services[i].name;
        dropDown.appendChild(option);
          console.log(busServices.services[i]);
        var text = document.createElement('p');
        text.innerHTML = busServices.services[i].ref;
        document.body.appendChild(text);
      }


    }
    request.onerror = function() {
      console.log('There was an error!');
      console.log(request.responseText);
    };
  };
};