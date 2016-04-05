// window.onload = function(){
//   console.log('App started');

//   var predictions = 'localhost:3000/getjson'

//   var request = new XMLHttpRequest();
//   // request.withCredentials = true;
//   request.open("GET", services);
//   request.send();


//    request.onload = function() {
//     if(request.status === 200) {
//       console.log('success');
//       var response = JSON.parse(request.responseText)
      
//       for(response.services)
//       console.log(response.services[2 ]);
//       // jsonString = request.responseText;
//       // console.log(jsonString)
//       // var countries = JSON.parse(jsonString);
//       // console.log(countries)
//     }
//   }

//   request.onerror = function() {
//     console.log('There was an error!');
//     console.log(request.responseText);

//   };
// }