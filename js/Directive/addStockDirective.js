// Code goes here
angular
.module('app')
.directive("addStockDirective", function() {
  return {
    restrict: "E",

    templateUrl: "Templates/addStock.html",
    controller: "AddStockController"
    };
})
.directive("scanLocation", function() {
  return {
    restrict: "E",

    templateUrl: "Templates/scanBarcode.html",
    controller: "ScanLocationController"
    };
});