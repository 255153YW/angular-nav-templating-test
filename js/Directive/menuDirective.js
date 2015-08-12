// Code goes here
angular
.module('app')
.directive("menuDirective", function() {
  return {
    restrict: "E",

    templateUrl: "Templates/menu.html",
    controller: "MenuController"
    };
});

