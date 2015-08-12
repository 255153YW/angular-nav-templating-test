// Code goes here
angular
.module('app')
.controller('MenuController', ['$scope','accountService',function($scope){	
$scope.menuItem = [{ pageID: "add_stock", pageName: "Add Stock" },  
				  {pageID:'remove_stock', pageName: "Remove Stock"},
				  {pageID:'order_picking', pageName: "Order Picking"},
				  {pageID:'undirected_inventory', pageName: "Undirected Inventory"}];
				  
$scope.stationary = {headerText:"Menu",
					logoutBtnText:"Logout"};

$scope.menuClick = function(pageID) {
	//alert(pageID);
	//$.mobile.changePage("./pages/"+page.pageID+".html");
	$location.path("/"+pageID);
};

$scope.logoutClick = function() {
	//$accountService.test();
	$location.path("/logout");
	//alert("logout");
};

}]);
