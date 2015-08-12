// Code goes here
angular
.module('accountManager',[])
.service('accountService', function(){
	var userCredential = null;
	this.test = function(){
		alert("success");
	};
	this.createCredential = function(companyID, userID, password) { 
		window.localStorage.setItem("company", companyID());
		window.localStorage.setItem("username", userID());
		window.localStorage.setItem("password", password);
		
		var cookie = encodeURI(companyID) + "," + encodeURI(userID) +':' + password;
		userCredential = 'Basic ' + btoa(cookie);
		
		window.localStorage.setItem("auth", this.userCredential);
	};
	this.getCredential = function() { 
		if(userCredential === null){
			if(window.localStorage.getItem("auth") === null){
                return false;
            }
			else {
				userCredential = window.localStorage.getItem("auth");
				return userCredential;
			}
		}
		else{
			return userCredential;
		}
	};
});

