// Code goes here
angular
.module('app')
.directive("loginDirective", function() {
  return {
    restrict: "E",

    templateUrl: "Templates/login.html",
    controller: "LoginController"
    };
});

