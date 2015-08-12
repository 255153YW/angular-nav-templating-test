angular
.module('app',['ngRoute','accountManager'])

.controller('MainCtrl',['$scope','accountService','$location', function($scope,$accountService,$location){

}])

/* .controller('MenuController', ['$scope','$location', function($scope,$location) {

$scope.menuItem = [{ pageID: "add_stock", pageName: "Add Stock" },  
				  {pageID:'remove_stock', pageName: "Remove Stock"},
				  {pageID:'order_picking', pageName: "Order Picking"},
				  {pageID:'undirected_inventory', pageName: "Undirected Inventory"}];
				  
$scope.stationary = {headerText:"Menu",
					logoutBtnText:"Logout"};

$scope.menuClick = function(pageID) {
	alert(pageID);
	//$.mobile.changePage("./pages/"+page.pageID+".html");
	$location.path("/"+pageID);
};

$scope.logoutClick = function() {
	//$accountService.test();
	alert("logout");
};
}]) */

.config(['$routeProvider',function($routeProvider){
$routeProvider.
when('/', {
  template:'<menu-directive></menu-directive>'
  }).
  when('/login', {
  template:'<login-directive></login-directive>'
  }).
  when('/add_stock', {
  template:'<add-stock-directive></add-stock-directive>'
  }).
  when('/remove_stock', {
  templateUrl:'Templates/removeStock.html',
  controller:'MainCtrl'
  }).
  when('/order_picking', {
  templateUrl:'Templates/orderPicking.html',
  controller:'MainCtrl'
  }).
  when('/undirected_inventory', {
  templateUrl:'Templates/undirectedInventory.html',
  controller:'MainCtrl'
  }).
  when('/logout', {
  redirectTo : '/login'
  }).
  when('/errorPage', {
  templateUrl:'Templates/errorPage.html',
  controller:'js/MainCtrl'
  }).
  otherwise( {
  redirectTo : '/errorPage'
  });
}])

.run(function($rootScope, $location) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
	
	var login = true;
	if (login == false) {
	// no logged user, redirect to /login
		if ( next.templateUrl === "/firstPage") {
		} else {
		  $location.path("/firstPage");
		}
	}
    });
  });
