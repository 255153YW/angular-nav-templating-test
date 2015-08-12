// Code goes here
angular
.module('app')
.controller('LoginController', ['$scope','accountService','$location', function($scope,$accountService, $location) {

$scope.user = {companyID:"", userID:"", loginPWD:""};
$scope.cbRememberModel = {
   value : false
 };
$scope.stationary = {headerText:"Login", 
					companyIDText:"Company ID", 
					userIDText:"User ID", 
					loginPWDText:"Password", 
					rememberLoginText:"Remember Login",
					loginBtnText:"Login"};

$scope.loginSubmit = function(user,cbRememberModel) {
	//$accountService.test();
	//alert(user.companyID + user.userID + user.loginPWD + cbRememberModel.value);
	$location.path("/");
};
}]);