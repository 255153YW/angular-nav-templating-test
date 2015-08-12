// Code goes here
angular
.module('app')
.controller('ScanLocationController', ['$scope','accountService','$location', function($scope,$accountService, $location) {

$scope.scannedData = {bcValue:"", locationData:""};
$scope.cbRememberModel = {
   value : false
 };
$scope.labelText = {headerText:"Scan Location", 
					scanText:"Scan Location/Container"};
					
$scope.scanBarcode = function(){
	 alert("launch scanner viewfinder");
	 $scope.checkBarcode();
};
$scope.checkBarcode = function(){
	 alert("process location/container barcode");
};
$scope.scanClick = function() {
		$scope.scanBarcode();
};

}]);