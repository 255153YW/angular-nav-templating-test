// Code goes here
angular
.module('connectionManager',[])
.service('connectionService', function($http){
	var userCredential = null;
	var baseURL = "https://acc.realtime.eu/rest"
	this.test = function(){
		alert("success-connectionManager");
	};
	this.sendGetRequest = function(auth, purpose, data) {
		var fullURL = baseURL + "/user/current" + purpose;
		var req = {
					method: 'GET',
					url: fullURL,
					cache: false,
					headers: {
						'Content-Type':'application/json',
						'Accept':'application/json',
						'Authorization':auth,
						'X-Realtime-Agent':'webapp'
					},    
					contentType: "application/json; charset=utf-8",
					data: data
					}
		 return $http(req)
			   .then(
				  function (response) {
					return {
					   response
					   /* title: response.data.title,
					   cost:  response.data.price */
					}
				  },
				  function (httpError) {
					 // translate the error
					 throw httpError.status + " : " + 
						   httpError.data;
				  });
	};
	this.sendPostRequest = function(auth, purpose, data) {
		var fullURL = baseURL + "/file/delivery/" + purpose;
		var req = {
					method: 'POST',
					url: fullURL,
					cache: false,
					headers: {
						'Content-Type':'application/json',
						'Accept':'application/json',
						'Authorization':auth,
						'X-Realtime-Agent':'webapp'
					},    
					contentType: "application/json; charset=utf-8",
					data: data
					}
		 return $http(req)
			   .then(
				  function (response) {
					return {
					   response
					   /* title: response.data.title,
					   cost:  response.data.price */
					}
				  },
				  function (httpError) {
					 // translate the error
					 throw httpError.status + " : " + 
						   httpError.data;
				  });
	};
});

