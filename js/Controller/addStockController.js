// Code goes here
angular
.module('app')
.controller('AddStockController', ['$scope','accountService','$location', function($scope,$accountService, $location) {
$scope.text = {	nextText:"Next", 
				prevText:"Prev"};
$scope.processList = ['scanLocation', 'scanProduct', 'changeStock','scanLocationOnly'];
$scope.currentProcess = $scope.processList[0];
$scope.addStock = {scanLocation:"", scanProduct:"", updateAmount:"", locationData:"", productData:""};

$scope.prevClick = function() {
	var index = $scope.processList.indexOf($scope.currentProcess);
	var length = $scope.processList.length;
	if(index-1 > 0)
	{
		$scope.currentProcess = $scope.processList[index -1];
	}
	else{$location.path("/");}
};

$scope.nextClick = function() {
	var index = $scope.processList.indexOf($scope.currentProcess);
	var length = $scope.processList.length;
	if(index >= 0 && index+1 <= length-1)
	{
		$scope.currentProcess = $scope.processList[index +1];
	}
	else{$scope.currentProcess = $scope.processList[0];}
};
}]);