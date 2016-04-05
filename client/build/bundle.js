/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map